"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import HubWorld from "./World/HubWorld";
import Player, { type PlayerHandle } from "./Player/Player";
import TelescopeCamera from "./Telescope/TelescopeCamera";
import TelescopeContent from "./Telescope/TelescopeContent";
import Hud from "./UI/Hud";
import MobileControls from "./UI/MobileControls";
import { useIsTouch } from "@/lib/useIsTouch";
import { useWorldStore } from "@/stores/useWorldStore";

export default function Scene() {
  const isTouch = useIsTouch();
  const playerRef = useRef<PlayerHandle>(null);
  const telescopeMode = useWorldStore((s) => s.telescopeMode);
  const inTelescope =
    telescopeMode === "zooming" ||
    telescopeMode === "viewing" ||
    telescopeMode === "unzooming";

  return (
    <>
      <Canvas
        shadows={!isTouch}
        dpr={isTouch ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 8, 14], fov: 55, near: 0.1, far: 200 }}
        gl={{ antialias: !isTouch, powerPreference: "high-performance" }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color("#0b0d12");
          scene.fog = new THREE.Fog("#0b0d12", 28, 80);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[18, 22, 10]}
            intensity={1.1}
            castShadow={!isTouch}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-left={-30}
            shadow-camera-right={30}
            shadow-camera-top={30}
            shadow-camera-bottom={-30}
          />
          <hemisphereLight args={["#a7c1d8", "#3a3a2a", 0.35]} />
          <Sky distance={450000} sunPosition={[18, 12, 10]} turbidity={6} rayleigh={1.5} />
          <Environment preset="sunset" environmentIntensity={0.25} />

          <Physics gravity={[0, -20, 0]}>
            <HubWorld />
            <Player start={[0, 1.2, 6]} ref={playerRef} isTouch={isTouch} />
          </Physics>

          <TelescopeCamera playerRef={playerRef} />

          {inTelescope && (
            <EffectComposer>
              <DepthOfField focusDistance={0.02} focalLength={0.05} bokehScale={3} />
              <Bloom intensity={0.6} luminanceThreshold={0.6} mipmapBlur />
              <Vignette eskil={false} offset={0.2} darkness={0.8} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>

      <Hud isTouch={isTouch} />
      {isTouch && telescopeMode === "idle" && <MobileControls />}
      <TelescopeContent />
    </>
  );
}
