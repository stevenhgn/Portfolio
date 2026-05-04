"use client";

import { useEffect } from "react";
import { useWorldStore } from "@/stores/useWorldStore";
import { WORKPLACES } from "@/content/workplaces";
import type { RoomId } from "@/lib/constants";

const ROOM_TITLES: Record<RoomId, string> = {
  workplaces: "Where I've worked",
  projects: "Things I've built",
  hobbies: "Off-the-clock",
};

export default function TelescopeContent() {
  const telescopeMode = useWorldStore((s) => s.telescopeMode);
  const room = useWorldStore((s) => s.nearTelescope ?? s.activeRoom);
  const setTelescopeMode = useWorldStore((s) => s.setTelescopeMode);

  useEffect(() => {
    if (telescopeMode !== "viewing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTelescopeMode("unzooming");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [telescopeMode, setTelescopeMode]);

  if (telescopeMode !== "viewing" || !room) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        zIndex: 30,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: "min(720px, 92vw)",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "28px 28px 24px",
          background: "rgba(11, 13, 18, 0.85)",
          border: "1px solid rgba(245, 196, 94, 0.4)",
          borderRadius: 16,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 22,
              letterSpacing: 0.4,
              color: "var(--accent)",
            }}
          >
            {ROOM_TITLES[room]}
          </h2>
          <button
            type="button"
            onClick={() => setTelescopeMode("unzooming")}
            style={{
              background: "transparent",
              border: "1px solid rgba(232,236,241,0.3)",
              color: "var(--fg)",
              padding: "6px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Esc / Back
          </button>
        </div>

        {room === "workplaces" ? (
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {WORKPLACES.map((w) => (
              <li
                key={w.company + w.start}
                style={{
                  borderLeft: "2px solid rgba(245, 196, 94, 0.5)",
                  paddingLeft: 14,
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.6 }}>
                  {w.start} – {w.end}
                </div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                  {w.role} · {w.company}
                </div>
                <p style={{ margin: "6px 0 8px", fontSize: 14, opacity: 0.85 }}>
                  {w.blurb}
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    fontSize: 13,
                    opacity: 0.8,
                  }}
                >
                  {w.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        ) : (
          <p style={{ margin: 0, opacity: 0.7 }}>Coming soon.</p>
        )}
      </div>
    </div>
  );
}
