import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      style={{
        position: "fixed",

        left: position.x,

        top: position.y,

        width: "420px",

        height: "420px",

        borderRadius: "999px",

        background:
          "radial-gradient(rgba(191,90,122,0.13), transparent 70%)",

        transform: "translate(-50%, -50%)",

        pointerEvents: "none",

        zIndex: -1,

        filter: "blur(45px)",

        transition:
          "left 0.15s linear, top 0.15s linear",
      }}
    />
  );
}