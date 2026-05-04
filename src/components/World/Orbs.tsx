"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ORB_COUNT = 14;

export default function Orbs() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(() => {
    const rand = mulberry32(53);
    return Array.from({ length: ORB_COUNT }, () => ({
      origin: new THREE.Vector3(
        (rand() - 0.5) * 60,
        1.5 + rand() * 3.5,
        (rand() - 0.5) * 60,
      ),
      bobAmp: 0.25 + rand() * 0.4,
      bobFreq: 0.4 + rand() * 0.6,
      driftRadius: 0.6 + rand() * 1.2,
      phase: rand() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    const m = meshRef.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      const x =
        s.origin.x + Math.sin(t * s.bobFreq + s.phase) * s.driftRadius;
      const y = s.origin.y + Math.sin(t * s.bobFreq * 1.6 + s.phase) * s.bobAmp;
      const z =
        s.origin.z + Math.cos(t * s.bobFreq * 0.7 + s.phase) * s.driftRadius;
      dummy.position.set(x, y, z);
      const scale = 0.12 + Math.sin(t * 1.5 + s.phase) * 0.02;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, ORB_COUNT]}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color="#ffe6a3" toneMapped={false} />
    </instancedMesh>
  );
}
