export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",

        marginTop: "0",

        padding: "70px 60px",

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

          width: "500px",

          height: "500px",

          borderRadius: "999px",

          background:
            "radial-gradient(rgba(255,255,255,0.08), transparent 70%)",

          filter: "blur(20px)",

          opacity: 0.6,

          pointerEvents: "none",
        }}
      />

      {/* Layout */}
      <div
        style={{
          position: "relative",

          zIndex: 2,

          display: "grid",

          gridTemplateColumns: "1.2fr 0.7fr 0.7fr",

          gap: "40px",
          
          alignItems: "start",
        }}
      >

        {/* LEFT */}
        <div>

          <h2
            style={{
              fontFamily: "var(--font-display)",

              fontSize: "28px",

              lineHeight: "0.95",

              fontWeight: 400,

              color: "white",

              maxWidth: "620px",
            }}
          >
            <span
  style={{
    display: "block",
  }}
>
  Still building.
</span>

<span
  style={{
    display: "block",

    marginLeft: "42px",
  }}
>
  Still exploring.
</span>

<span
  style={{
    display: "block",

    marginLeft: "12px",
  }}
>
  Still obsessed with creating.
</span>
          </h2>

        </div>

        {/* CENTER */}
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "2px",
          }}
        >

          <FooterLink
            label="EMAIL"
            href="mailto:rjkishorrmd@gmail.com"
          />

          <FooterLink
            label="LINKEDIN"
            href="https://linkedin.com/in/kishorrj"
          />

          <FooterLink
            label="GITHUB"
            href="https://github.com/kishorrjeyachandran"
          />

          <FooterLink
            label="X"
            href="https://x.com"
          />

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "2px",
          }}
        >

          <FooterNav label="HOME" />
          <FooterNav label="ABOUT ME" active />
          <FooterNav label="PROJECTS" />
          <FooterNav label="GITHUB" />
          <FooterNav label="SKILLS" />

          <div
            style={{
              marginTop: "28px",
            }}
          >

            <button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    fontFamily: "var(--font-mono)",

    fontSize: "14px",

    letterSpacing: "0.12em",

    color: "rgba(255,255,255,0.72)",

    background: "none",

    border: "none",

    cursor: "pointer",

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
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",

        fontFamily: "var(--font-mono)",

        fontSize: "18px",

        letterSpacing: "0.06em",

        color: "rgba(255,255,255,0.82)",

        transition: "opacity 0.25s ease",
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
}) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",

        fontSize: "18px",

        letterSpacing: "0.06em",

        color: active
          ? "white"
          : "rgba(255,255,255,0.55)",

        margin: 0,

        cursor: "pointer",
      }}
    >
      {label}
    </p>
  );
}