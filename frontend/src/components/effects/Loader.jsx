import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 0,
      }}

      transition={{
        delay: 2.2,
        duration: 0.8,
      }}

      style={{
        position: "fixed",

        inset: 0,

        background:
          "radial-gradient(circle at top left, rgba(221,181,193,0.28), transparent 40%), linear-gradient(135deg, #f6eef1 0%, #ecdde2 55%, #e7d5db 100%)",

        overflow: "hidden",

        zIndex: 99999,

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        pointerEvents: "none",
      }}
    >

      {/* TOP RIGHT GLOW */}
      <div
        style={{
          position: "absolute",

          width: "520px",

          height: "520px",

          borderRadius: "999px",

          background:
            "radial-gradient(rgba(191,90,122,0.16), transparent 70%)",

          filter: "blur(40px)",

          top: "-120px",

          right: "-120px",
        }}
      />

      {/* BOTTOM LEFT GLOW */}
      <div
        style={{
          position: "absolute",

          width: "420px",

          height: "420px",

          borderRadius: "999px",

          background:
            "radial-gradient(rgba(255,255,255,0.28), transparent 70%)",

          filter: "blur(30px)",

          bottom: "-100px",

          left: "-80px",
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}

        style={{
          position: "relative",

          zIndex: 2,
        }}
      >

        {/* NAME */}
        <h1
          style={{
            fontFamily: "var(--font-display)",

            fontSize: "92px",

            fontWeight: 400,

            color: "var(--color-ink)",

            lineHeight: "0.9",

            textAlign: "center",

            marginBottom: "14px",
          }}
        >
          Kishor
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "12px",

            letterSpacing: "0.18em",

            textTransform: "uppercase",

            color: "var(--color-ink-mute)",

            textAlign: "center",
          }}
        >
          Full Stack Developer
        </p>

      </motion.div>

    </motion.div>
  );
}