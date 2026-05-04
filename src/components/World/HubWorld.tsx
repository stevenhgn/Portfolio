"use client";

import Ground from "./Ground";
import WorkplacesRoom from "@/components/Rooms/WorkplacesRoom";
import PlaceholderRoom from "@/components/Rooms/PlaceholderRoom";

export default function HubWorld() {
  return (
    <>
      <Ground />
      <WorkplacesRoom />
      <PlaceholderRoom id="projects" />
      <PlaceholderRoom id="hobbies" />
      {/* Hub centerpiece marker */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 0.4, 8]} />
        <meshStandardMaterial color="#3a3a3a" flatShading />
      </mesh>
      <mesh castShadow position={[0, 1.1, 0]}>
        <coneGeometry args={[0.4, 1.4, 6]} />
        <meshStandardMaterial color="#f5c45e" flatShading />
      </mesh>
    </>
  );
}
