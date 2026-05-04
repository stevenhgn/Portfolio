"use client";

import { useEffect, useRef } from "react";
import type { JoystickManager, JoystickOutputData } from "nipplejs";
import { useWorldStore } from "@/stores/useWorldStore";
import { ROOM_DEFINITIONS } from "@/lib/constants";

export default function MobileControls() {
  const setMobileInput = useWorldStore((s) => s.setMobileInput);
  const setTelescopeMode = useWorldStore((s) => s.setTelescopeMode);
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let manager: JoystickManager | null = null;
    let cancelled = false;

    (async () => {
      const mod = await import("nipplejs");
      const nipplejs = (mod as unknown as { default: typeof mod }).default ?? mod;
      if (cancelled || !zoneRef.current) return;
      manager = nipplejs.create({
        zone: zoneRef.current,
        mode: "static",
        position: { left: "70px", bottom: "70px" },
        color: "#f5c45e",
        size: 110,
        restOpacity: 0.6,
      });
      manager.on("move", (_evt: unknown, data: JoystickOutputData) => {
        if (!data?.vector) return;
        const x = data.vector.x;
        const y = data.vector.y;
        setMobileInput({
          forward: y > 0 ? Math.min(1, y) : 0,
          back: y < 0 ? Math.min(1, -y) : 0,
          right: x > 0 ? Math.min(1, x) : 0,
          left: x < 0 ? Math.min(1, -x) : 0,
        });
      });
      manager.on("end", () => {
        setMobileInput({ forward: 0, back: 0, left: 0, right: 0 });
      });
    })();

    return () => {
      cancelled = true;
      manager?.destroy();
      setMobileInput({ forward: 0, back: 0, left: 0, right: 0 });
    };
  }, [setMobileInput]);

  const onInteract = () => {
    const { telescopeMode, nearTelescope } = useWorldStore.getState();
    if (telescopeMode === "viewing") {
      setTelescopeMode("unzooming");
      return;
    }
    if (telescopeMode !== "idle" || !nearTelescope) return;
    if (ROOM_DEFINITIONS[nearTelescope].available) setTelescopeMode("zooming");
  };

  return (
    <>
      <div
        ref={zoneRef}
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: 180,
          height: 180,
          zIndex: 20,
          pointerEvents: "auto",
          touchAction: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          right: 24,
          bottom: 32,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 20,
        }}
      >
        <button
          type="button"
          onClick={onInteract}
          style={{
            width: 76,
            height: 76,
            borderRadius: "50%",
            border: "1px solid rgba(245,196,94,0.6)",
            background: "rgba(11,13,18,0.65)",
            color: "var(--accent)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.4,
            touchAction: "manipulation",
            backdropFilter: "blur(6px)",
          }}
        >
          Look
        </button>
      </div>
    </>
  );
}
