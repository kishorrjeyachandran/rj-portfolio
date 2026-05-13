export default function Resume() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          marginBottom: "52px",
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "12px",

            letterSpacing: "0.18em",

            textTransform: "uppercase",

            color: "var(--color-ink-mute)",

            marginBottom: "18px",
          }}
        >
          Resume
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",

            fontSize: "42px",

            lineHeight: "0.9",

            fontWeight: 400,

            color: "var(--color-ink)",

            marginBottom: "24px",
          }}
        >
          Experience,
          <br />
          projects &
          <br />
          technical journey.
        </h1>

        <a
          href="/resume/Kishor-Resume.pdf"
          download
          className="soft-hover"
          style={{
            display: "inline-flex",

            alignItems: "center",

            gap: "10px",

            padding: "14px 22px",

            borderRadius: "999px",

            background: "var(--color-ink)",

            color: "white",

            fontFamily: "var(--font-mono)",

            fontSize: "12px",

            letterSpacing: "0.08em",
          }}
        >
          Download Resume
        </a>

      </section>

      {/* PDF VIEWER */}
      <section
        style={{
          background: "rgba(255,255,255,0.28)",

          backdropFilter: "blur(12px)",

          borderRadius: "32px",

          padding: "24px",

          overflow: "hidden",

          boxShadow:
            "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >

        <iframe
          src="/resume/Kishor-Resume.pdf"
          title="Resume"
          style={{
            width: "100%",

            height: "1000px",

            border: "none",

            borderRadius: "18px",

            background: "white",
          }}
        />

      </section>

    </div>
  );
}