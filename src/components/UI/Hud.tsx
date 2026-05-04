"use client";

import { useEffect } from "react";
import { useWorldStore } from "@/stores/useWorldStore";
import { ROOM_DEFINITIONS } from "@/lib/constants";

type Props = { isTouch: boolean };

export default function Hud({ isTouch }: Props) {
  const activeRoom = useWorldStore((s) => s.activeRoom);
  const nearTelescope = useWorldStore((s) => s.nearTelescope);
  const telescopeMode = useWorldStore((s) => s.telescopeMode);
  const setTelescopeMode = useWorldStore((s) => s.setTelescopeMode);

  useEffect(() => {
    if (isTouch) return;
    if (telescopeMode !== "idle") return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "e" || e.key === "E" || e.key === "Enter") && nearTelescope) {
        const def = ROOM_DEFINITIONS[nearTelescope];
        if (def?.available) setTelescopeMode("zooming");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nearTelescope, telescopeMode, setTelescopeMode, isTouch]);

  const showPrompt =
    telescopeMode === "idle" && nearTelescope !== null && !isTouch;
  const def = nearTelescope ? ROOM_DEFINITIONS[nearTelescope] : null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          padding: "8px 14px",
          background: "rgba(11,13,18,0.55)",
          border: "1px solid rgba(232,236,241,0.15)",
          borderRadius: 999,
          fontSize: 13,
          letterSpacing: 0.4,
        }}
      >
        {activeRoom
          ? `Inside · ${ROOM_DEFINITIONS[activeRoom].label}`
          : "Hub · choose a room"}
      </div>

      {!isTouch && telescopeMode === "idle" && (
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            padding: "8px 14px",
            background: "rgba(11,13,18,0.55)",
            border: "1px solid rgba(232,236,241,0.15)",
            borderRadius: 12,
            fontSize: 12,
            opacity: 0.85,
            lineHeight: 1.5,
          }}
        >
          <div>Move · WASD / Arrows</div>
          <div>Look through telescope · E</div>
          <div>Exit · Esc</div>
        </div>
      )}

      {showPrompt && def && (
        <div
          style={{
            position: "absolute",
            bottom: "26%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 18px",
            background: "rgba(11,13,18,0.8)",
            border: `1px solid ${def.accent}`,
            borderRadius: 12,
            fontSize: 14,
            letterSpacing: 0.4,
            boxShadow: `0 0 24px ${def.accent}33`,
          }}
        >
          {def.available
            ? `Press E to look — ${def.label}`
            : `${def.label} · coming soon`}
        </div>
      )}
    </div>
  );
}
