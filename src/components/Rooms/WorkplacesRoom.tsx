"use client";

import { CuboidCollider, RigidBody } from "@react-three/rapier";
import RoomShell from "./RoomShell";
import Telescope from "@/components/Telescope/Telescope";
import { ROOM_DEFINITIONS } from "@/lib/constants";

export default function WorkplacesRoom() {
  const def = ROOM_DEFINITIONS.workplaces;
  return (
    <RoomShell
      id="workplaces"
      position={def.position}
      color={def.color}
      accent={def.accent}
      available={def.available}
    >
      <RigidBody type="fixed" colliders={false}>
        <mesh castShadow receiveShadow position={[-3, 0.4, -3]}>
          <boxGeometry args={[2, 0.8, 1]} />
          <meshStandardMaterial color="#7a5c3a" roughness={0.85} />
        </mesh>
        <CuboidCollider args={[1, 0.4, 0.5]} position={[-3, 0.4, -3]} />

        <mesh castShadow receiveShadow position={[3, 0.6, -3]}>
          <boxGeometry args={[1.2, 1.2, 0.4]} />
          <meshStandardMaterial color="#5b4a3a" roughness={0.85} />
        </mesh>
        <CuboidCollider args={[0.6, 0.6, 0.2]} position={[3, 0.6, -3]} />
      </RigidBody>

      <Telescope id="workplaces" position={[0, 0, -2]} accent={def.accent} />
    </RoomShell>
  );
}
