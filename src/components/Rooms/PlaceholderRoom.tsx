"use client";

import RoomShell from "./RoomShell";
import { ROOM_DEFINITIONS, type RoomId } from "@/lib/constants";

export default function PlaceholderRoom({ id }: { id: RoomId }) {
  const def = ROOM_DEFINITIONS[id];
  return (
    <RoomShell
      id={id}
      position={def.position}
      color={def.color}
      accent={def.accent}
      available={def.available}
    >
      <mesh position={[0, 1.5, -2]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" flatShading />
      </mesh>
    </RoomShell>
  );
}
