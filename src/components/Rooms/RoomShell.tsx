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
  const archInner = doorW / 2 + 0.15;
  const cornerR = 0.25;

  return (
    <group position={position}>
      <mesh receiveShadow position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>

      <RigidBody type="fixed" colliders={false}>
        <mesh castShadow receiveShadow position={[0, height / 2, -half]}>
          <boxGeometry args={[size, height, wallT]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
        <CuboidCollider
          args={[half, height / 2, wallT / 2]}
          position={[0, height / 2, -half]}
        />

        <mesh castShadow receiveShadow position={[-half, height / 2, 0]}>
          <boxGeometry args={[wallT, height, size]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
        <CuboidCollider
          args={[wallT / 2, height / 2, half]}
          position={[-half, height / 2, 0]}
        />

        <mesh castShadow receiveShadow position={[half, height / 2, 0]}>
          <boxGeometry args={[wallT, height, size]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
        <CuboidCollider
          args={[wallT / 2, height / 2, half]}
          position={[half, height / 2, 0]}
        />

        <mesh castShadow receiveShadow position={[-sideOffset, height / 2, half]}>
          <boxGeometry args={[sideLen, height, wallT]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
        <CuboidCollider
          args={[sideLen / 2, height / 2, wallT / 2]}
          position={[-sideOffset, height / 2, half]}
        />

        <mesh castShadow receiveShadow position={[sideOffset, height / 2, half]}>
          <boxGeometry args={[sideLen, height, wallT]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
        <CuboidCollider
          args={[sideLen / 2, height / 2, wallT / 2]}
          position={[sideOffset, height / 2, half]}
        />

        {/* Rounded corner posts */}
        {[
          [-half, -half],
          [half, -half],
          [-half, half],
          [half, half],
        ].map(([cx, cz], i) => (
          <mesh
            key={`corner-${i}`}
            castShadow
            receiveShadow
            position={[cx, height / 2 + 0.1, cz]}
          >
            <cylinderGeometry args={[cornerR, cornerR, height + 0.2, 16]} />
            <meshStandardMaterial color={color} roughness={0.85} />
          </mesh>
        ))}
        {/* Decorative caps on top of corners */}
        {[
          [-half, -half],
          [half, -half],
          [-half, half],
          [half, half],
        ].map(([cx, cz], i) => (
          <mesh
            key={`cap-${i}`}
            castShadow
            position={[cx, height + 0.25, cz]}
          >
            <sphereGeometry args={[cornerR + 0.04, 16, 12]} />
            <meshStandardMaterial color={accent} roughness={0.6} />
          </mesh>
        ))}

        {/* Arched accent over the doorway */}
        <mesh
          castShadow
          position={[0, height, half + 0.05]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry
            args={[archInner, 0.18, 16, 24, Math.PI]}
          />
          <meshStandardMaterial color={accent} roughness={0.5} metalness={0.1} />
        </mesh>

        {/* Top trim — a horizontal cylinder spanning the front */}
        <mesh
          castShadow
          position={[0, height + 0.18, half + 0.05]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.12, 0.12, size + 0.5, 16]} />
          <meshStandardMaterial color={accent} roughness={0.55} metalness={0.1} />
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
