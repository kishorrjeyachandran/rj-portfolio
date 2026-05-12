import ExploreCard from "./ExploreCard";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "340px",
        minHeight: "100vh",
        background: "var(--color-bg-light)",
        borderRight: "1px solid rgba(45,35,41,0.05)",
        position: "sticky",
        top: 0,
      }}
    >

      {/* Inner Editorial Column */}
      <div
        style={{
          width: "250px",
          margin: "0 auto",
          paddingTop: "52px",
          paddingBottom: "42px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          minHeight: "100vh",
        }}
      >

        {/* Top */}
        <div>

          {/* Logo Space */}
          <div
            style={{
              height: "72px",
              marginBottom: "24px",

              display: "flex",
              alignItems: "center",
            }}
          >

            <div
              style={{
                width: "34px",
                height: "34px",

                borderRadius: "14px",

                background: "var(--color-pink-1)",
              }}
            />

          </div>

          {/* Identity */}
          <div
            style={{
              marginBottom: "44px",
            }}
          >

            <h1
              style={{
                fontFamily: "var(--font-display)",

                fontSize: "38px",

                lineHeight: "0.95",

                color: "var(--color-ink)",

                marginBottom: "14px",

                fontWeight: 400,
              }}
            >
              Kishor
            </h1>

            <p
              style={{
                fontFamily: "var(--font-mono)",

                fontSize: "11px",

                textTransform: "uppercase",

                letterSpacing: "0.18em",

                color: "var(--color-ink-mute)",

                marginBottom: "28px",
              }}
            >
              Full Stack Developer
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: "18px",
              }}
            >

              <p
                style={{
                  fontSize: "14px",

                  lineHeight: "1.9",

                  color: "var(--color-ink-dim)",
                }}
              >
                I build modern full stack applications with immersive interfaces and thoughtful user experiences.
              </p>

              <p
                style={{
                  fontSize: "14px",

                  lineHeight: "1.9",

                  color: "var(--color-ink-dim)",
                }}
              >
                Currently building projects focused on UI/UX, scalable systems, and creative web interactions.
              </p>

            </div>

          </div>

          {/* Explore */}
          <div
            style={{
              marginBottom: "44px",

              display: "flex",
              justifyContent: "center",
            }}
          >

            <ExploreCard />

          </div>

          {/* Links */}
          <div>

            <p
              style={{
                fontFamily: "var(--font-mono)",

                fontSize: "11px",

                textTransform: "uppercase",

                letterSpacing: "0.18em",

                color: "var(--color-ink)",

                marginBottom: "14px",
              }}
            >
              Find Me At
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: "8px",
              }}
            >

              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "var(--color-ink-dim)",
                }}
              >
                Email
              </a>

              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "var(--color-ink-dim)",
                }}
              >
                GitHub
              </a>

              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "var(--color-ink-dim)",
                }}
              >
                LinkedIn
              </a>

              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "var(--color-ink-dim)",
                }}
              >
                X
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div>

          <p
            style={{
              fontFamily: "var(--font-mono)",

              fontSize: "11px",

              textTransform: "uppercase",

              letterSpacing: "0.14em",

              color: "var(--color-ink-mute)",

              marginBottom: "8px",
            }}
          >
            10:24:32 PM
          </p>

          <p
            style={{
              fontFamily: "var(--font-mono)",

              fontSize: "11px",

              textTransform: "uppercase",

              letterSpacing: "0.14em",

              color: "var(--color-ink-mute)",
            }}
          >
            ● All Systems Operational
          </p>

        </div>

      </div>

    </aside>
  );
}