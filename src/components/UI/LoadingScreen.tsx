"use client";

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        color: "var(--fg)",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "3px solid rgba(245,196,94,0.2)",
          borderTopColor: "var(--accent)",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <div style={{ fontSize: 13, letterSpacing: 1.2, opacity: 0.7 }}>
        BUILDING WORLD
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
