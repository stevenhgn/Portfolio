"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useWorldStore } from "@/stores/useWorldStore";
import type { RoomId } from "@/lib/constants";

type Props = {
  id: RoomId;
  position: [number, number, number];
  accent: string;
};

export default function Telescope({ id, position, accent }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const eyepieceRef = useRef<THREE.Object3D>(null);
  const focusRef = useRef<THREE.Object3D>(null);

  const setNearTelescope = useWorldStore((s) => s.setNearTelescope);

  const tilt = -Math.PI / 4.2;

  const tmp = useMemo(
    () => ({
      eye: new THREE.Vector3(),
      focus: new THREE.Vector3(),
    }),
    [],
  );

  const idleSpinSpeed = 0.6;
  const spin = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const { telescopeMode, nearTelescope } = useWorldStore.getState();
    if (telescopeMode === "idle" && nearTelescope === id) {
      spin.current += delta * idleSpinSpeed;
      groupRef.current.rotation.y = spin.current;
    } else if (telescopeMode === "idle") {
      groupRef.current.rotation.y *= 0.92;
    }
  });

  useEffect(() => {
    return () => {
      if (useWorldStore.getState().nearTelescope === id) setNearTelescope(null);
    };
  }, [id, setNearTelescope]);

  return (
    <group position={position}>
      <RigidBody type="fixed" colliders={false} sensor>
        <CuboidCollider
          args={[1.6, 1.2, 1.6]}
          position={[0, 1.2, 0]}
          onIntersectionEnter={({ other }) => {
            if (other.rigidBodyObject?.name === "player") {
              setNearTelescope(id);
            }
          }}
          onIntersectionExit={({ other }) => {
            if (other.rigidBodyObject?.name === "player") {
              if (useWorldStore.getState().nearTelescope === id) {
                setNearTelescope(null);
              }
            }
          }}
        />
      </RigidBody>

      <group ref={groupRef}>
        <mesh castShadow position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.05, 0.4, 0.8, 6]} />
          <meshStandardMaterial color="#222" roughness={0.7} />
        </mesh>
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            castShadow
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 0.5,
              0.5,
              Math.sin((i / 3) * Math.PI * 2) * 0.5,
            ]}
            rotation={[0, (i / 3) * Math.PI * 2, Math.PI / 8]}
          >
            <cylinderGeometry args={[0.04, 0.04, 1.4, 6]} />
            <meshStandardMaterial color="#3a3a3a" roughness={0.7} />
          </mesh>
        ))}

        <group position={[0, 1.2, 0]} rotation={[tilt, 0, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.22, 1.6, 12]} />
            <meshStandardMaterial color="#1f1f24" roughness={0.7} metalness={0.4} />
          </mesh>
          <mesh castShadow position={[0, 0.85, 0]}>
            <cylinderGeometry args={[0.26, 0.22, 0.18, 12]} />
            <meshStandardMaterial color={accent} roughness={0.7} metalness={0.5} />
          </mesh>
          <mesh castShadow position={[0, -0.85, 0]}>
            <cylinderGeometry args={[0.14, 0.16, 0.18, 12]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.7} />
          </mesh>
          <object3D ref={eyepieceRef} position={[0, -1.0, 0]} />
          <object3D ref={focusRef} position={[0, 14, 0]} />
        </group>
      </group>

      {/* hover badge */}
      <mesh position={[0, 2.7, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color={accent} />
      </mesh>

      <TelescopeAnchorBroadcaster
        id={id}
        eyepieceRef={eyepieceRef}
        focusRef={focusRef}
      />
    </group>
  );
}

function TelescopeAnchorBroadcaster({
  id,
  eyepieceRef,
  focusRef,
}: {
  id: RoomId;
  eyepieceRef: React.RefObject<THREE.Object3D | null>;
  focusRef: React.RefObject<THREE.Object3D | null>;
}) {
  const { scene } = useThree();
  useEffect(() => {
    scene.userData.telescopes = scene.userData.telescopes ?? {};
    scene.userData.telescopes[id] = {
      getAnchor: (out: { eye: THREE.Vector3; focus: THREE.Vector3 }) => {
        eyepieceRef.current?.getWorldPosition(out.eye);
        focusRef.current?.getWorldPosition(out.focus);
        return out;
      },
    };
    return () => {
      if (scene.userData.telescopes) delete scene.userData.telescopes[id];
    };
  }, [scene, id, eyepieceRef, focusRef]);
  return null;
}
