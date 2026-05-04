"use client";

import { Instance, Instances } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import { ROOM_DEFINITIONS } from "@/lib/constants";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ROOM_KEEP_OUT = 8;
const HUB_KEEP_OUT = 3;
const PLAYER_START_KEEP_OUT = 4;

function isInsideKeepOut(x: number, z: number) {
  if (Math.hypot(x, z) < HUB_KEEP_OUT) return true;
  if (Math.hypot(x, z - 6) < PLAYER_START_KEEP_OUT) return true;
  for (const def of Object.values(ROOM_DEFINITIONS)) {
    const [rx, , rz] = def.position;
    if (Math.abs(x - rx) < ROOM_KEEP_OUT && Math.abs(z - rz) < ROOM_KEEP_OUT)
      return true;
  }
  return false;
}

type Item = {
  position: [number, number, number];
  rotation: number;
  scale: number;
  tone: number;
};

function generateItems(
  seed: number,
  count: number,
  innerRadius: number,
  outerRadius: number,
  scaleRange: [number, number],
): Item[] {
  const rand = mulberry32(seed);
  const out: Item[] = [];
  let attempts = 0;
  while (out.length < count && attempts < count * 6) {
    attempts++;
    const r = innerRadius + rand() * (outerRadius - innerRadius);
    const a = rand() * Math.PI * 2;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (isInsideKeepOut(x, z)) continue;
    out.push({
      position: [x, 0, z],
      rotation: rand() * Math.PI * 2,
      scale: scaleRange[0] + rand() * (scaleRange[1] - scaleRange[0]),
      tone: rand(),
    });
  }
  return out;
}

const TRUNK_COLOR = new THREE.Color("#3d2a1a");
const LEAF_COLORS = [
  new THREE.Color("#4d7d4a"),
  new THREE.Color("#5a8a52"),
  new THREE.Color("#3e6c40"),
];

export default function Foliage() {
  const trees = useMemo(() => generateItems(7, 80, 14, 48, [0.85, 1.6]), []);
  const grass = useMemo(() => generateItems(11, 180, 4, 50, [0.5, 1.1]), []);

  const grassColor = useMemo(() => new THREE.Color("#5a8a4a"), []);

  return (
    <group>
      {/* Trunks — smooth-shaded cylinders */}
      <Instances limit={trees.length} castShadow>
        <cylinderGeometry args={[0.18, 0.28, 1.4, 12]} />
        <meshStandardMaterial color={TRUNK_COLOR} roughness={0.95} />
        {trees.map((t, i) => (
          <Instance
            key={`trunk-${i}`}
            position={[t.position[0], 0.7 * t.scale, t.position[2]]}
            rotation={[0, t.rotation, 0]}
            scale={[t.scale, t.scale, t.scale]}
          />
        ))}
      </Instances>

      {/* Main blob — large smooth icosahedron */}
      <Instances limit={trees.length} castShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial vertexColors roughness={0.85} />
        {trees.map((t, i) => {
          const c = LEAF_COLORS[Math.floor(t.tone * LEAF_COLORS.length)];
          return (
            <Instance
              key={`blob-a-${i}`}
              position={[t.position[0], 1.5 * t.scale + 0.3, t.position[2]]}
              rotation={[0, t.rotation, 0]}
              scale={[
                t.scale * 1.05,
                t.scale * 1.15,
                t.scale * 1.05,
              ]}
              color={c}
            />
          );
        })}
      </Instances>

      {/* Secondary blob — offset, slightly smaller */}
      <Instances limit={trees.length} castShadow>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial vertexColors roughness={0.85} />
        {trees.map((t, i) => {
          const c =
            LEAF_COLORS[(Math.floor(t.tone * LEAF_COLORS.length) + 1) %
              LEAF_COLORS.length];
          const dx = Math.cos(t.rotation * 2.3) * 0.4 * t.scale;
          const dz = Math.sin(t.rotation * 2.3) * 0.4 * t.scale;
          return (
            <Instance
              key={`blob-b-${i}`}
              position={[
                t.position[0] + dx,
                1.9 * t.scale + 0.4,
                t.position[2] + dz,
              ]}
              rotation={[0, t.rotation + 0.4, 0]}
              scale={[t.scale * 0.85, t.scale * 0.95, t.scale * 0.85]}
              color={c}
            />
          );
        })}
      </Instances>

      {/* Grass tufts — soft squashed spheres */}
      <Instances limit={grass.length}>
        <sphereGeometry args={[0.22, 8, 6]} />
        <meshStandardMaterial color={grassColor} roughness={1} />
        {grass.map((g, i) => (
          <Instance
            key={`grass-${i}`}
            position={[g.position[0], 0.12 * g.scale, g.position[2]]}
            rotation={[0, g.rotation, 0]}
            scale={[g.scale * 1.2, g.scale * 0.55, g.scale * 1.2]}
          />
        ))}
      </Instances>
    </group>
  );
}
