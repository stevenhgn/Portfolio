"use client";

import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Ground() {
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      <CuboidCollider args={[60, 0.5, 60]} position={[0, -0.5, 0]} />
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[120, 1, 120]} />
        <meshStandardMaterial color="#5a7a4a" flatShading roughness={0.95} />
      </mesh>
    </RigidBody>
  );
}
