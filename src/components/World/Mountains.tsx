"use client";

import { useMemo } from "react";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Mountains() {
  const peaks = useMemo(() => {
    const rand = mulberry32(31);
    const out: {
      position: [number, number, number];
      rotation: number;
      scale: [number, number, number];
      shade: number;
    }[] = [];
    const count = 26;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rand() * 0.18;
      const r = 60 + rand() * 12;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const h = 8 + rand() * 14;
      const w = 6 + rand() * 6;
      out.push({
        position: [x, 0, z],
        rotation: rand() * Math.PI * 2,
        scale: [w, h, w],
        shade: rand(),
      });
    }
    return out;
  }, []);

  return (
    <group>
      {peaks.map((p, i) => (
        <mesh
          key={i}
          position={p.position}
          rotation={[0, p.rotation, 0]}
          scale={p.scale}
        >
          <coneGeometry args={[1, 1, 5]} />
          <meshStandardMaterial
            color={p.shade > 0.6 ? "#3a3550" : "#2c2a45"}
            flatShading
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  );
}
