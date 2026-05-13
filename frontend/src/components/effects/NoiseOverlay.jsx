export default function NoiseOverlay() {
  return (
    <div
      style={{
        position: "fixed",

        inset: 0,

        backgroundImage:
          "url('/textures/noise.jpg')",

        opacity: 0.045,

        pointerEvents: "none",

        zIndex: 9999,

        mixBlendMode: "multiply",
      }}
    />
  );
}