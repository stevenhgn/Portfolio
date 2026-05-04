"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/UI/LoadingScreen";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function Home() {
  return (
    <main>
      <Scene />
    </main>
  );
}
