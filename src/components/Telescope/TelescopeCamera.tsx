"use client";

import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  CAMERA_LERP,
  CAMERA_LOOK_OFFSET,
  CAMERA_OFFSET,
  TELESCOPE_TWEEN_SECONDS,
} from "@/lib/constants";
import { useWorldStore } from "@/stores/useWorldStore";
import type { PlayerHandle } from "@/components/Player/Player";

type Props = {
  playerRef: React.RefObject<PlayerHandle | null>;
};

type AnchorRegistry = Record<
  string,
  {
    getAnchor: (out: { eye: THREE.Vector3; focus: THREE.Vector3 }) => {
      eye: THREE.Vector3;
      focus: THREE.Vector3;
    };
  }
>;

export default function TelescopeCamera({ playerRef }: Props) {
  const { camera, scene } = useThree();

  const tween = useRef<gsap.core.Timeline | null>(null);
  const anchor = useMemo(
    () => ({ eye: new THREE.Vector3(), focus: new THREE.Vector3() }),
    [],
  );
  const lookTarget = useRef(new THREE.Vector3());
  const tmp = useMemo(
    () => ({
      desiredCam: new THREE.Vector3(),
      desiredLook: new THREE.Vector3(),
      playerPos: new THREE.Vector3(),
    }),
    [],
  );

  useEffect(() => {
    const initial = playerRef.current?.getPosition(new THREE.Vector3());
    if (initial) {
      camera.position.set(
        initial.x + CAMERA_OFFSET.x,
        initial.y + CAMERA_OFFSET.y,
        initial.z + CAMERA_OFFSET.z,
      );
      lookTarget.current.copy(initial).add(CAMERA_LOOK_OFFSET);
      camera.lookAt(lookTarget.current);
    }
  }, [camera, playerRef]);

  useEffect(() => {
    const unsub = useWorldStore.subscribe((state, prev) => {
      if (state.telescopeMode === prev.telescopeMode) return;
      const registry = (scene.userData.telescopes ?? {}) as AnchorRegistry;
      const activeId = state.nearTelescope ?? state.activeRoom ?? null;

      if (state.telescopeMode === "zooming" && activeId && registry[activeId]) {
        registry[activeId].getAnchor(anchor);
        tween.current?.kill();
        const tl = gsap.timeline({
          defaults: {
            duration: TELESCOPE_TWEEN_SECONDS,
            ease: "power2.inOut",
          },
          onComplete: () => useWorldStore.getState().setTelescopeMode("viewing"),
        });
        tl.to(camera.position, {
          x: anchor.eye.x,
          y: anchor.eye.y,
          z: anchor.eye.z,
        }, 0);
        tl.to(lookTarget.current, {
          x: anchor.focus.x,
          y: anchor.focus.y,
          z: anchor.focus.z,
        }, 0);
        tween.current = tl;
      }

      if (state.telescopeMode === "unzooming") {
        const player = playerRef.current?.getPosition(tmp.playerPos);
        if (!player) {
          useWorldStore.getState().setTelescopeMode("idle");
          return;
        }
        tmp.desiredCam.copy(player).add(CAMERA_OFFSET);
        tmp.desiredLook.copy(player).add(CAMERA_LOOK_OFFSET);
        tween.current?.kill();
        const tl = gsap.timeline({
          defaults: {
            duration: TELESCOPE_TWEEN_SECONDS * 0.85,
            ease: "power2.inOut",
          },
          onComplete: () => useWorldStore.getState().setTelescopeMode("idle"),
        });
        tl.to(camera.position, {
          x: tmp.desiredCam.x,
          y: tmp.desiredCam.y,
          z: tmp.desiredCam.z,
        }, 0);
        tl.to(lookTarget.current, {
          x: tmp.desiredLook.x,
          y: tmp.desiredLook.y,
          z: tmp.desiredLook.z,
        }, 0);
        tween.current = tl;
      }
    });
    return () => {
      unsub();
      tween.current?.kill();
    };
  }, [camera, scene, anchor, playerRef, tmp]);

  useFrame(() => {
    const { telescopeMode } = useWorldStore.getState();
    if (telescopeMode === "idle") {
      const player = playerRef.current?.getPosition(tmp.playerPos);
      if (player) {
        tmp.desiredCam.copy(player).add(CAMERA_OFFSET);
        tmp.desiredLook.copy(player).add(CAMERA_LOOK_OFFSET);
        camera.position.lerp(tmp.desiredCam, CAMERA_LERP);
        lookTarget.current.lerp(tmp.desiredLook, CAMERA_LERP);
      }
    }
    camera.lookAt(lookTarget.current);
  });

  return null;
}
