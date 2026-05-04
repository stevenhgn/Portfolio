"use client";

import Foliage from "./Foliage";
import Ground from "./Ground";
import Mountains from "./Mountains";
import Orbs from "./Orbs";
import WorkplacesRoom from "@/components/Rooms/WorkplacesRoom";
import PlaceholderRoom from "@/components/Rooms/PlaceholderRoom";

export default function HubWorld() {
  return (
    <>
      <Ground />
      <Mountains />
      <Foliage />
      <Orbs />

      <WorkplacesRoom />
      <PlaceholderRoom id="projects" />
      <PlaceholderRoom id="hobbies" />

      {/* Hub centerpiece — small lantern */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.45, 0.6, 0.4, 8]} />
        <meshStandardMaterial color="#3a3a3a" flatShading />
      </mesh>
      <mesh castShadow position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.9, 6]} />
        <meshStandardMaterial color="#2a2a2a" flatShading />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshBasicMaterial color="#ffd987" toneMapped={false} />
      </mesh>
      <pointLight
        position={[0, 1.5, 0]}
        intensity={4}
        distance={6}
        color="#ffb766"
      />
    </>
  );
}
