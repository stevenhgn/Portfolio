"use client";

import { useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RigidBody,
  type RapierRigidBody,
} from "@react-three/rapier";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  PLAYER_HEIGHT,
  PLAYER_RADIUS,
  PLAYER_SPEED,
  PLAYER_SPEED_MOBILE,
} from "@/lib/constants";
import { useWorldStore } from "@/stores/useWorldStore";
import { useKeyboard } from "./useKeyboard";

export type PlayerHandle = {
  getPosition: (out: THREE.Vector3) => THREE.Vector3;
  getBody: () => RapierRigidBody | null;
};

type Props = {
  start: [number, number, number];
  isTouch: boolean;
};

const Player = forwardRef<PlayerHandle, Props>(function Player(
  { start, isTouch },
  ref,
) {
  const body = useRef<RapierRigidBody>(null);
  const visualRef = useRef<THREE.Group>(null);
  const keys = useKeyboard();

  const tmp = useMemo(
    () => ({
      forward: new THREE.Vector3(),
      right: new THREE.Vector3(),
      move: new THREE.Vector3(),
      camPos: new THREE.Vector3(),
      facing: new THREE.Quaternion(),
      up: new THREE.Vector3(0, 1, 0),
    }),
    [],
  );

  useImperativeHandle(
    ref,
    () => ({
      getPosition: (out) => {
        const t = body.current?.translation();
        if (t) out.set(t.x, t.y, t.z);
        return out;
      },
      getBody: () => body.current,
    }),
    [],
  );

  useFrame((state, delta) => {
    const rb = body.current;
    if (!rb) return;
    const visual = visualRef.current;
    const { telescopeMode, mobileInput } = useWorldStore.getState();
    const inputLocked = telescopeMode !== "idle";

    let fw = 0;
    let rt = 0;
    if (!inputLocked) {
      const k = keys.current;
      fw = (k.forward ? 1 : 0) - (k.back ? 1 : 0);
      rt = (k.right ? 1 : 0) - (k.left ? 1 : 0);
      if (isTouch) {
        fw += mobileInput.forward - mobileInput.back;
        rt += mobileInput.right - mobileInput.left;
      }
    }

    state.camera.getWorldPosition(tmp.camPos);
    tmp.forward
      .set(0, 0, 0)
      .subVectors(
        new THREE.Vector3(rb.translation().x, 0, rb.translation().z),
        new THREE.Vector3(tmp.camPos.x, 0, tmp.camPos.z),
      )
      .normalize();
    tmp.right.crossVectors(tmp.forward, tmp.up).normalize();

    tmp.move
      .set(0, 0, 0)
      .addScaledVector(tmp.forward, fw)
      .addScaledVector(tmp.right, rt);

    const len = tmp.move.length();
    const speed = isTouch ? PLAYER_SPEED_MOBILE : PLAYER_SPEED;
    if (len > 1) tmp.move.multiplyScalar(1 / len);

    const linvel = rb.linvel();
    rb.setLinvel(
      {
        x: tmp.move.x * speed,
        y: linvel.y,
        z: tmp.move.z * speed,
      },
      true,
    );

    if (visual) {
      const moving = len > 0.05;
      if (moving) {
        const angle = Math.atan2(tmp.move.x, tmp.move.z);
        tmp.facing.setFromAxisAngle(tmp.up, angle);
        visual.quaternion.slerp(tmp.facing, 0.2);
      }
      const t = state.clock.elapsedTime;
      visual.position.y = moving ? Math.abs(Math.sin(t * 10)) * 0.08 : 0;
    }
  });

  return (
    <RigidBody
      ref={body}
      name="player"
      colliders={false}
      position={start}
      enabledRotations={[false, false, false]}
      mass={1}
      linearDamping={6}
      friction={0.4}
      ccd
    >
      <CapsuleCollider args={[PLAYER_HEIGHT / 2 - PLAYER_RADIUS, PLAYER_RADIUS]} />
      <group ref={visualRef}>
        <mesh castShadow position={[0, 0.2, 0]}>
          <capsuleGeometry args={[PLAYER_RADIUS, PLAYER_HEIGHT - PLAYER_RADIUS * 2, 8, 16]} />
          <meshStandardMaterial color="#e8a25e" roughness={0.8} />
        </mesh>
        <mesh castShadow position={[0, PLAYER_HEIGHT / 2 + 0.08, 0]}>
          <sphereGeometry args={[0.26, 16, 12]} />
          <meshStandardMaterial color="#f0c9a0" roughness={0.85} />
        </mesh>
        <mesh position={[0.08, PLAYER_HEIGHT / 2 + 0.12, 0.22]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[-0.08, PLAYER_HEIGHT / 2 + 0.12, 0.22]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>
    </RigidBody>
  );
});

export default Player;
