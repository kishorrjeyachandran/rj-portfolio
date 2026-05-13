export default function Footer() {

  const mobile =
    window.innerWidth <= 768;

  return (
    <footer
      style={{
        background:
          "var(--color-ink)",

        marginTop: "0",

        padding: mobile
          ? "52px 24px"
          : "70px 60px",

        overflow: "hidden",

        position: "relative",
      }}
    >

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",

          top: "-120px",

          left: "10%",

          width: mobile
            ? "260px"
            : "500px",

          height: mobile
            ? "260px"
            : "500px",

          borderRadius:
            "999px",

          background:
            "radial-gradient(rgba(255,255,255,0.08), transparent 70%)",

          filter:
            "blur(20px)",

          opacity: 0.6,

          pointerEvents:
            "none",
        }}
      />

      {/* Layout */}
      <div
        style={{
          position: "relative",

          zIndex: 2,

          display: "grid",

          gridTemplateColumns:
            mobile
              ? "1fr"
              : "1.2fr 0.7fr 0.7fr",

          gap: mobile
            ? "42px"
            : "40px",

          alignItems:
            "start",
        }}
      >

        {/* LEFT */}
        <div>

          <h2
            style={{
              fontFamily:
                "var(--font-display)",

              fontSize:
                mobile
                  ? "18px"
                  : "28px",

              lineHeight:
                "0.95",

              fontWeight:
                400,

              color:
                "white",

              maxWidth:
                "620px",
            }}
          >

            <span
              style={{
                display:
                  "block",
              }}
            >
              Still building.
            </span>

            <span
              style={{
                display:
                  "block",

                marginLeft:
                  mobile
                    ? "18px"
                    : "42px",
              }}
            >
              Still exploring.
            </span>

            <span
              style={{
                display:
                  "block",

                marginLeft:
                  mobile
                    ? "8px"
                    : "12px",
              }}
            >
              Still obsessed
              with creating.
            </span>

          </h2>

        </div>

        {/* CENTER */}
        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: "2px",
          }}
        >

          <FooterLink
            label="EMAIL"
            href="mailto:rjkishorrmd@gmail.com"
            mobile={mobile}
          />

          <FooterLink
            label="LINKEDIN"
            href="https://linkedin.com/in/kishorrj"
            mobile={mobile}
          />

          <FooterLink
            label="GITHUB"
            href="https://github.com/kishorrjeyachandran"
            mobile={mobile}
          />

          <FooterLink
            label="X"
            href="https://x.com"
            mobile={mobile}
          />

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: "2px",
          }}
        >

          <FooterNav
            label="HOME"
            mobile={mobile}
          />

          <FooterNav
            label="ABOUT ME"
            active
            mobile={mobile}
          />

          <FooterNav
            label="PROJECTS"
            mobile={mobile}
          />

          <FooterNav
            label="GITHUB"
            mobile={mobile}
          />

          <FooterNav
            label="SKILLS"
            mobile={mobile}
          />

          <div
            style={{
              marginTop:
                mobile
                  ? "20px"
                  : "28px",
            }}
          >

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,

                  behavior:
                    "smooth",
                })
              }

              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize:
                  mobile
                    ? "12px"
                    : "14px",

                letterSpacing:
                  "0.12em",

                color:
                  "rgba(255,255,255,0.72)",

                background:
                  "none",

                border:
                  "none",

                cursor:
                  "pointer",

                padding: 0,
              }}
            >
              ✦ BACK TO TOP
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

/* LINK */

function FooterLink({
  label,
  href,
  mobile,
}) {

  return (
    <a
      href={href}

      target="_blank"

      rel="noopener noreferrer"

      style={{
        textDecoration:
          "none",

        fontFamily:
          "var(--font-mono)",

        fontSize:
          mobile
            ? "15px"
            : "18px",

        letterSpacing:
          "0.06em",

        color:
          "rgba(255,255,255,0.82)",

        transition:
          "opacity 0.25s ease",
      }}
    >
      {label}
    </a>
  );
}

/* NAV */

function FooterNav({
  label,
  active,
  mobile,
}) {

  return (
    <p
      style={{
        fontFamily:
          "var(--font-mono)",

        fontSize:
          mobile
            ? "15px"
            : "18px",

        letterSpacing:
          "0.06em",

        color: active
          ? "white"
          : "rgba(255,255,255,0.55)",

        margin: 0,

        cursor:
          "pointer",
      }}
    >
      {label}
    </p>
  );
}