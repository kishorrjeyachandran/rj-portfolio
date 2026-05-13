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

  /* SAFE MOBILE CHECK */
  const mobile =
    typeof window !==
      "undefined" &&
    window.innerWidth <= 768;

  /* ========================= */
  /* MOBILE SIDEBAR */
  /* ========================= */

  if (mobile) {

    return (
      <aside
        style={{
          position: "fixed",

          top: 0,

          left: 0,

          width: "78vw",

          maxWidth: "340px",

          height: "100vh",

          background:
            "var(--color-bg-light)",

          zIndex: 400,

          overflowY: "auto",

          transform:
            menuOpen
              ? "translateX(0)"
              : "translateX(-100%)",

          transition:
            "transform 0.45s cubic-bezier(0.22,1,0.36,1)",

          boxShadow:
            "20px 0 60px rgba(0,0,0,0.12)",
        }}
      >

        <div
          style={{
            padding:
              "34px 26px 42px",

            minHeight:
              "100vh",

            boxSizing:
              "border-box",

            display: "flex",

            flexDirection:
              "column",

            justifyContent:
              "space-between",
          }}
        >

          {/* TOP */}
          <div>

            {/* CLOSE */}
            <div
              style={{
                display: "flex",

                justifyContent:
                  "flex-end",

                marginBottom:
                  "26px",
              }}
            >

              <button
                onClick={() =>
                  setMenuOpen(false)
                }

                style={{
                  border: "none",

                  background:
                    "none",

                  fontSize: "34px",

                  lineHeight: 1,

                  cursor: "pointer",

                  color:
                    "var(--color-ink)",
                }}
              >
                ×
              </button>

            </div>

            {/* LOGO */}
            <img
              src="/images/logo.png"

              alt="Logo"

              style={{
                width: "52px",

                height: "52px",

                objectFit:
                  "cover",

                borderRadius:
                  "16px",

                marginBottom:
                  "28px",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            {/* NAME */}
            <h1
              style={{
                fontFamily:
                  "var(--font-display)",

                fontSize: "52px",

                lineHeight:
                  "0.9",

                fontWeight: 400,

                color:
                  "var(--color-ink)",

                marginBottom:
                  "14px",
              }}
            >
              Kishor
            </h1>

            {/* ROLE */}
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
                  "var(--color-ink-mute)",

                marginBottom:
                  "34px",
              }}
            >
              Full Stack Developer
            </p>

            {/* DESCRIPTION */}
            <div
              style={{
                display: "flex",

                flexDirection:
                  "column",

                gap: "24px",

                marginBottom:
                  "42px",
              }}
            >

              <p
                style={{
                  fontSize: "15px",

                  lineHeight:
                    "1.9",

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
                    "1.9",

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

            {/* EXPLORE */}
            <ExploreCard />

          </div>

          {/* BOTTOM */}
          <div
            style={{
              marginTop:
                "44px",
            }}
          >

            {/* FIND ME */}
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
                  "16px",
              }}
            >
              Find Me At
            </p>

            <div
              style={{
                display: "flex",

                flexWrap:
                  "wrap",

                gap: "12px",

                marginBottom:
                  "34px",
              }}
            >

              <a
                href="mailto:rjkishorrmd@gmail.com"

                target="_blank"

                rel="noopener noreferrer"

                style={{
                  textDecoration:
                    "none",

                  fontFamily:
                    "var(--font-mono)",

                  fontSize: "12px",

                  color:
                    "var(--color-ink-dim)",
                }}
              >
                Email
              </a>

              <a
                href="https://linkedin.com/in/kishorrj"

                target="_blank"

                rel="noopener noreferrer"

                style={{
                  textDecoration:
                    "none",

                  fontFamily:
                    "var(--font-mono)",

                  fontSize: "12px",

                  color:
                    "var(--color-ink-dim)",
                }}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/kishorrjeyachandran"

                target="_blank"

                rel="noopener noreferrer"

                style={{
                  textDecoration:
                    "none",

                  fontFamily:
                    "var(--font-mono)",

                  fontSize: "12px",

                  color:
                    "var(--color-ink-dim)",
                }}
              >
                GitHub
              </a>

            </div>

            {/* CLOCK */}
            <div
              style={{
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
                    "0.14em",

                  color:
                    "var(--color-ink-mute)",

                  marginBottom:
                    "8px",
                }}
              >
                Local Time
              </p>

              <p
                id="live-clock"

                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize: "20px",

                  color:
                    "var(--color-ink)",

                  lineHeight: 1,
                }}
              >
                --:--
              </p>

            </div>

          </div>

        </div>

      </aside>
    );
  }

  /* ========================= */
  /* DESKTOP SIDEBAR */
  /* ========================= */

  return (
    <aside
      className="sidebar-scroll"

      style={{
        width: "300px",

        minWidth: "300px",

        minHeight: "100vh",

        overflowY: "auto",

        background:
          "var(--color-bg-light)",

        borderRight:
          "1px solid rgba(45,35,41,0.05)",

        position: "sticky",

        top: 0,

        zIndex: 300,
      }}
    >

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

            <img
              src="/images/logo.png"

              alt="Kishor Logo"

              style={{
                width: "42px",

                height: "42px",

                objectFit:
                  "cover",

                borderRadius:
                  "14px",

                boxShadow:
                  "0 6px 18px rgba(0,0,0,0.08)",
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

            {/* DESCRIPTION */}
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

        </div>

        {/* BOTTOM */}
        <div>

          {/* FIND ME */}
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

              marginBottom:
                "24px",
            }}
          >

            <a
              href="mailto:rjkishorrmd@gmail.com"

              target="_blank"

              rel="noopener noreferrer"

              style={{
                textDecoration:
                  "none",

                fontFamily:
                  "var(--font-mono)",

                fontSize: "11px",

                color:
                  "var(--color-ink-dim)",
              }}
            >
              Email
            </a>

            <a
              href="https://github.com/kishorrjeyachandran"

              target="_blank"

              rel="noopener noreferrer"

              style={{
                textDecoration:
                  "none",

                fontFamily:
                  "var(--font-mono)",

                fontSize: "11px",

                color:
                  "var(--color-ink-dim)",
              }}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kishorrj"

              target="_blank"

              rel="noopener noreferrer"

              style={{
                textDecoration:
                  "none",

                fontFamily:
                  "var(--font-mono)",

                fontSize: "11px",

                color:
                  "var(--color-ink-dim)",
              }}
            >
              LinkedIn
            </a>

          </div>

          {/* CLOCK */}
          <div
            style={{
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
                  "0.14em",

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
            ● All Systems Operational
          </p>

        </div>

      </div>

    </aside>
  );
}