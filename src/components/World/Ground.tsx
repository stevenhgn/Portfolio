"use client";

import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Ground() {
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      <CuboidCollider args={[60, 0.5, 60]} position={[0, -0.5, 0]} />
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[120, 1, 120]} />
        <meshStandardMaterial color="#2c4a3a" flatShading />
      </mesh>
      {Array.from({ length: 9 }, (_, i) => {
        const r = 6 + i * 4;
        return (
          <mesh
            key={i}
            position={[0, 0.001, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <ringGeometry args={[r - 0.05, r, 64]} />
            <meshBasicMaterial color="#1f3527" transparent opacity={0.35} />
          </mesh>
        );
      })}
    </RigidBody>
  );
}
