"use client";

import {
  CuboidCollider,
  RigidBody,
} from "@react-three/rapier";
import { useEffect } from "react";
import { useWorldStore } from "@/stores/useWorldStore";
import type { RoomId } from "@/lib/constants";

type Props = {
  id: RoomId;
  position: [number, number, number];
  color: string;
  accent: string;
  size?: number;
  height?: number;
  available: boolean;
  children?: React.ReactNode;
};

export default function RoomShell({
  id,
  position,
  color,
  accent,
  size = 10,
  height = 3,
  available,
  children,
}: Props) {
  const setActiveRoom = useWorldStore((s) => s.setActiveRoom);

  useEffect(() => {
    return () => {
      if (useWorldStore.getState().activeRoom === id) setActiveRoom(null);
    };
  }, [id, setActiveRoom]);

  const half = size / 2;
  const wallT = 0.3;
  const doorW = 2.4;
  const sideLen = (size - doorW) / 2;
  const sideOffset = doorW / 2 + sideLen / 2;

  return (
    <group position={position}>
      <mesh receiveShadow position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color={color} flatShading />
      </mesh>

      <RigidBody type="fixed" colliders={false}>
        <mesh castShadow receiveShadow position={[0, height / 2, -half]}>
          <boxGeometry args={[size, height, wallT]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <CuboidCollider
          args={[half, height / 2, wallT / 2]}
          position={[0, height / 2, -half]}
        />

        <mesh castShadow receiveShadow position={[-half, height / 2, 0]}>
          <boxGeometry args={[wallT, height, size]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <CuboidCollider
          args={[wallT / 2, height / 2, half]}
          position={[-half, height / 2, 0]}
        />

        <mesh castShadow receiveShadow position={[half, height / 2, 0]}>
          <boxGeometry args={[wallT, height, size]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <CuboidCollider
          args={[wallT / 2, height / 2, half]}
          position={[half, height / 2, 0]}
        />

        <mesh castShadow receiveShadow position={[-sideOffset, height / 2, half]}>
          <boxGeometry args={[sideLen, height, wallT]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <CuboidCollider
          args={[sideLen / 2, height / 2, wallT / 2]}
          position={[-sideOffset, height / 2, half]}
        />

        <mesh castShadow receiveShadow position={[sideOffset, height / 2, half]}>
          <boxGeometry args={[sideLen, height, wallT]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <CuboidCollider
          args={[sideLen / 2, height / 2, wallT / 2]}
          position={[sideOffset, height / 2, half]}
        />

        <mesh
          castShadow
          position={[0, height + 0.4, half + 0.05]}
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[size + 0.6, 0.8, 0.4]} />
          <meshStandardMaterial color={accent} flatShading />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders={false} sensor>
        <CuboidCollider
          args={[doorW / 2, 1.2, 0.6]}
          position={[0, 1.2, half - 0.6]}
          onIntersectionEnter={({ other }) => {
            if (other.rigidBodyObject?.name === "player") {
              setActiveRoom(id);
            }
          }}
          onIntersectionExit={({ other }) => {
            if (other.rigidBodyObject?.name === "player") {
              if (useWorldStore.getState().activeRoom === id) {
                setActiveRoom(null);
              }
            }
          }}
        />
      </RigidBody>

      {!available && (
        <mesh position={[0, 1.4, half - 0.4]}>
          <planeGeometry args={[1.6, 0.5]} />
          <meshBasicMaterial color="#222" transparent opacity={0.7} />
        </mesh>
      )}

      {children}
    </group>
  );
}
