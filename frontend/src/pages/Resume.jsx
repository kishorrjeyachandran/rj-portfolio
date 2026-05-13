export default function Resume() {

  const mobile =
    window.innerWidth <= 768;

  return (
    <div>

      {/* HERO */}
      <section
        style={{
          marginBottom:
            mobile
              ? "34px"
              : "52px",
        }}
      >

        <p
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize:
              mobile
                ? "11px"
                : "12px",

            letterSpacing:
              "0.18em",

            textTransform:
              "uppercase",

            color:
              "var(--color-ink-mute)",

            marginBottom:
              mobile
                ? "16px"
                : "18px",
          }}
        >
          Resume
        </p>

        <h1
          style={{
            fontFamily:
              "var(--font-display)",

            fontSize:
              mobile
                ? "58px"
                : "42px",

            lineHeight:
              mobile
                ? "0.88"
                : "0.9",

            fontWeight: 400,

            color:
              "var(--color-ink)",

            marginBottom:
              mobile
                ? "22px"
                : "24px",

            maxWidth:
              mobile
                ? "100%"
                : "720px",
          }}
        >
          Experience,
          <br />
          projects &
          <br />
          technical journey.
        </h1>

        <p
          style={{
            fontSize:
              mobile
                ? "15px"
                : "15px",

            lineHeight:
              mobile
                ? "1.9"
                : "1.8",

            color:
              "var(--color-ink-dim)",

            marginBottom:
              mobile
                ? "26px"
                : "30px",

            maxWidth:
              mobile
                ? "100%"
                : "620px",
          }}
        >
          A curated overview of
          my technical journey,
          full stack projects,
          development experience,
          and creative exploration.
        </p>

        <a
          href="/resume/Kishor-Resume.pdf"

          download

          className="soft-hover"

          style={{
            display:
              "inline-flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            width:
              mobile
                ? "100%"
                : "auto",

            gap: "10px",

            padding:
              mobile
                ? "18px 22px"
                : "14px 22px",

            borderRadius:
              "999px",

            background:
              "var(--color-ink)",

            color: "white",

            textDecoration:
              "none",

            fontFamily:
              "var(--font-mono)",

            fontSize:
              mobile
                ? "11px"
                : "12px",

            letterSpacing:
              "0.08em",

            transition:
              "all 0.35s ease",
          }}
        >
          Download Resume
        </a>

      </section>

      {/* PDF VIEWER */}
      <section
        style={{
          background:
            "rgba(255,255,255,0.28)",

          backdropFilter:
            "blur(12px)",

          borderRadius:
            mobile
              ? "30px"
              : "32px",

          padding:
            mobile
              ? "16px"
              : "24px",

          overflow:
            "hidden",

          boxShadow:
            "0 12px 40px rgba(0,0,0,0.06)",
        }}
      >

        {/* MOBILE PREVIEW NOTE */}
        {mobile && (
          <div
            style={{
              marginBottom:
                "18px",

              padding:
                "16px 18px",

              borderRadius:
                "22px",

              background:
                "rgba(255,255,255,0.38)",
            }}
          >

            <p
              style={{
                fontSize: "14px",

                lineHeight: "1.8",

                color:
                  "var(--color-ink-dim)",
              }}
            >
              For the best viewing
              experience, download
              the resume PDF using
              the button above.
            </p>

          </div>
        )}

        <iframe
          src="/resume/Kishor-Resume.pdf"

          title="Resume"

          style={{
            width: "100%",

            height:
              mobile
                ? "520px"
                : "1000px",

            border: "none",

            borderRadius:
              mobile
                ? "22px"
                : "18px",

            background:
              "white",
          }}
        />

      </section>

    </div>
  );
}