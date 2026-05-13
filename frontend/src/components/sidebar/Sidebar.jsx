import ExploreCard from "./ExploreCard";

import { useEffect } from "react";

export default function Sidebar({
  menuOpen,
  setMenuOpen,
}) {

  /* LIVE CLOCK */
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const time =
        now.toLocaleTimeString(
          "en-IN",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );

      const clock =
        document.getElementById(
          "live-clock"
        );

      if (clock) {
        clock.innerText = time;
      }
    };

    updateClock();

    const interval =
      setInterval(
        updateClock,
        1000
      );

    return () =>
      clearInterval(
        interval
      );
  }, []);

  return (
    <aside
      className="sidebar-scroll"
      style={{
        width: "300px",

        minHeight: "100vh",

        overflowY: "auto",

        background:
          "var(--color-bg-light)",

        borderRight:
          "1px solid rgba(45,35,41,0.05)",

        position: "sticky",

        top: 0,

        transition:
          "transform 0.45s cubic-bezier(0.22,1,0.36,1)",

        transform:
          window.innerWidth <=
          768
            ? menuOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : "translateX(0)",

        zIndex: 300,
      }}
    >

      {/* INNER */}
      <div
        style={{
          width: "250px",

          margin: "0 auto",

          paddingTop: "52px",

          paddingBottom:
            "42px",

          display: "flex",

          flexDirection:
            "column",

          justifyContent:
            "space-between",

          minHeight: "100vh",
        }}
      >

        {/* TOP */}
        <div>

          {/* LOGO */}
          <div
            style={{
              height: "72px",

              marginBottom:
                "24px",

              display: "flex",

              alignItems:
                "center",
            }}
          >

            <div
              style={{
                width: "34px",

                height: "34px",

                borderRadius:
                  "14px",

                background:
                  "var(--color-pink-1)",
              }}
            />

          </div>

          {/* IDENTITY */}
          <div
            style={{
              marginBottom:
                "44px",
            }}
          >

            <h1
              style={{
                fontFamily:
                  "var(--font-display)",

                fontSize: "38px",

                lineHeight:
                  "0.95",

                color:
                  "var(--color-ink)",

                marginBottom:
                  "14px",

                fontWeight: 400,
              }}
            >
              Kishor
            </h1>

            <p
              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize: "13px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.12em",

                color:
                  "var(--color-ink-mute)",

                marginBottom:
                  "28px",
              }}
            >
              Full Stack Developer
            </p>

            <div
              style={{
                display: "flex",

                flexDirection:
                  "column",

                gap: "18px",
              }}
            >

              <p
                style={{
                  fontSize: "15px",

                  lineHeight:
                    "1.7",

                  color:
                    "var(--color-ink-dim)",
                }}
              >
                I build modern
                full stack
                applications
                with immersive
                interfaces and
                thoughtful user
                experiences.
              </p>

              <p
                style={{
                  fontSize: "15px",

                  lineHeight:
                    "1.7",

                  color:
                    "var(--color-ink-dim)",
                }}
              >
                Currently
                building
                projects
                focused on
                UI/UX,
                scalable
                systems, and
                creative web
                interactions.
              </p>

            </div>

          </div>

          {/* EXPLORE */}
          <div
            style={{
              marginBottom:
                "24px",

              display: "flex",

              justifyContent:
                "center",
            }}
          >

            <ExploreCard />

          </div>

          {/* LINKS */}
          <div>

            <p
              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize: "11px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.18em",

                color:
                  "var(--color-ink)",

                marginBottom:
                  "14px",
              }}
            >
              Find Me At
            </p>

            <div
              style={{
                display: "flex",

                flexWrap:
                  "wrap",

                gap: "10px",
              }}
            >

              {/* EMAIL */}
              <a
                href="mailto:rjkishorrmd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize:
                    "11px",

                  letterSpacing:
                    "0.12em",

                  textTransform:
                    "uppercase",

                  color:
                    "var(--color-ink-dim)",

                  textDecoration:
                    "none",

                  transition:
                    "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color =
                    "var(--color-ink)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    "var(--color-ink-dim)")
                }
              >
                Email
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/kishorrjeyachandran"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize:
                    "11px",

                  letterSpacing:
                    "0.12em",

                  textTransform:
                    "uppercase",

                  color:
                    "var(--color-ink-dim)",

                  textDecoration:
                    "none",

                  transition:
                    "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color =
                    "var(--color-ink)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    "var(--color-ink-dim)")
                }
              >
                GitHub
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/kishorrj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize:
                    "11px",

                  letterSpacing:
                    "0.12em",

                  textTransform:
                    "uppercase",

                  color:
                    "var(--color-ink-dim)",

                  textDecoration:
                    "none",

                  transition:
                    "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color =
                    "var(--color-ink)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    "var(--color-ink-dim)")
                }
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div>

          {/* CLOCK */}
          <div
            style={{
              marginTop:
                "18px",

              marginBottom:
                "18px",
            }}
          >

            <p
              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize: "10px",

                textTransform:
                  "uppercase",

                letterSpacing:
                  "0.16em",

                color:
                  "var(--color-ink-mute)",

                marginBottom:
                  "6px",
              }}
            >
              Local Time
            </p>

            <p
              id="live-clock"
              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize: "18px",

                fontWeight: 500,

                letterSpacing:
                  "-0.03em",

                color:
                  "var(--color-ink-mute)",

                lineHeight: 1,
              }}
            >
              --:--
            </p>

          </div>

          {/* STATUS */}
          <p
            style={{
              fontFamily:
                "var(--font-mono)",

              fontSize: "10px",

              textTransform:
                "uppercase",

              letterSpacing:
                "0.14em",

              color:
                "var(--color-ink-mute)",
            }}
          >
            ● All Systems
            Operational
          </p>

        </div>

      </div>

    </aside>
  );
}