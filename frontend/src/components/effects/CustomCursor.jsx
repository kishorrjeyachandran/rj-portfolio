import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll(
      "a, button, .soft-hover"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        style={{
          position: "fixed",

          left: position.x,

          top: position.y,

          width: isHovering ? "42px" : "18px",

          height: isHovering ? "42px" : "18px",

          borderRadius: "999px",

          background: "rgba(191,90,122,0.16)",

          border: "1px solid rgba(191,90,122,0.28)",

          transform: "translate(-50%, -50%)",

          transition:
            "width 0.25s ease, height 0.25s ease, background 0.25s ease",

          pointerEvents: "none",

          zIndex: 9999,

          backdropFilter: "blur(4px)",
        }}
      />

      {/* Dot */}
      <div
        style={{
          position: "fixed",

          left: position.x,

          top: position.y,

          width: "5px",

          height: "5px",

          borderRadius: "999px",

          background: "var(--color-ink)",

          transform: "translate(-50%, -50%)",

          pointerEvents: "none",

          zIndex: 10000,
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "fixed",

          left: position.x,

          top: position.y,

          width: isHovering ? "130px" : "80px",

          height: isHovering ? "130px" : "80px",

          borderRadius: "999px",

          background:
            "radial-gradient(rgba(191,90,122,0.12), transparent 70%)",

          transform: "translate(-50%, -50%)",

          transition:
            "width 0.35s ease, height 0.35s ease",

          pointerEvents: "none",

          zIndex: 9998,

          filter: "blur(18px)",
        }}
      />
    </>
  );
}