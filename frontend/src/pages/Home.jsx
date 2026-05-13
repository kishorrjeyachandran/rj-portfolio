import {
  FolderGit2,
  Music4,
  Sparkles,
  ArrowUpRight,
  FileText,
} from "lucide-react";

import { Link } from "react-router-dom";

import Reveal from "../components/effects/Reveal";

export default function Home() {

  const mobile =
    window.innerWidth <= 768;

  return (
    <div
      style={{
        paddingTop:
          mobile
            ? "0px"
            : "8px",
      }}
    >

      {/* HERO */}
      <Reveal>
        <section
          style={{
            marginBottom:
              mobile
                ? "32px"
                : "56px",
          }}
        >

          <p
            style={{
              fontFamily:
                "var(--font-mono)",

              fontSize:
                mobile
                  ? "10px"
                  : "12px",

              textTransform:
                "uppercase",

              letterSpacing:
                "0.14em",

              color:
                "var(--color-ink-mute)",

              marginBottom:
                "20px",
            }}
          >
            Full Stack Developer
          </p>

          <h1
            style={{
              fontFamily:
                "var(--font-display)",

              fontSize:
                mobile
                  ? "52px"
                  : "92px",

              lineHeight:
                "0.9",

              fontWeight: 400,

              maxWidth:
                "900px",

              color:
                "var(--color-ink)",
            }}
          >
            Building
            <br />
            thoughtful
            <br />
            digital
            <br />
            experiences.
          </h1>

        </section>
      </Reveal>

      {/* LATEST LOG */}
      <Reveal delay={0.1}>
        <section
          style={{
            marginBottom:
              "34px",
          }}
        >

          <article
            className="editorial-surface soft-hover"

            style={{
              background:
                "var(--color-ink)",

              color:
                "var(--color-ink-inverted)",

              borderRadius:
                "22px",

              padding:
                mobile
                  ? "18px"
                  : "22px 24px",
            }}
          >

            {/* HEADER */}
            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "space-between",

                marginBottom:
                  "14px",
              }}
            >

              <div
                style={{
                  display: "flex",

                  alignItems:
                    "center",

                  gap: "10px",
                }}
              >

                <p
                  style={{
                    fontFamily:
                      "var(--font-mono)",

                    fontSize:
                      "12px",

                    textTransform:
                      "uppercase",

                    letterSpacing:
                      "0.12em",
                  }}
                >
                  Latest Log
                </p>

                <p
                  style={{
                    fontSize:
                      "12px",

                    color:
                      "var(--color-ink-mute)",
                  }}
                >
                  May 2026
                </p>

              </div>

              <Sparkles
                size={18}
              />

            </div>

            {/* BODY */}
            <p
              style={{
                fontSize:
                  mobile
                    ? "13px"
                    : "14px",

                lineHeight:
                  "1.9",

                color:
                  "rgba(255,255,255,0.76)",
              }}
            >
              Currently
              redesigning my
              portfolio and
              building modern
              full stack products
              with immersive
              interfaces and
              thoughtful
              interactions.
            </p>

          </article>

        </section>
      </Reveal>

      {/* BENTO */}
      <section
        style={{
          display: "grid",

          gridTemplateColumns:
            mobile
              ? "1fr"
              : "1.3fr 0.9fr",

          gap:
            mobile
              ? "18px"
              : "26px",

          marginBottom:
            "120px",
        }}
      >

        {/* LEFT */}
        <div
          style={{
            display: "grid",

            gap:
              mobile
                ? "18px"
                : "26px",
          }}
        >

          {/* FEATURED */}
          <Reveal delay={0.15}>
            <Link
              to="/projects"

              className="bento-card"

              style={{
                position:
                  "relative",

                overflow:
                  "hidden",

                padding:
                  mobile
                    ? "22px"
                    : "34px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.22)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",

                minHeight:
                  mobile
                    ? "220px"
                    : "340px",
              }}
            >

              <p className="bento-label">
                Featured Work
              </p>

              <h2
                className="bento-title"

                style={{
                  fontSize:
                    mobile
                      ? "42px"
                      : "68px",
                }}
              >
                Projects &
                <br />
                experiments.
              </h2>

              <div
                style={{
                  position:
                    "absolute",

                  right:
                    "30px",

                  bottom:
                    "30px",
                }}
              >
                <ArrowUpRight
                  size={
                    mobile
                      ? 28
                      : 34
                  }
                />
              </div>

            </Link>
          </Reveal>

          {/* SKILLS */}
          <Reveal delay={0.2}>
            <div
              className="bento-card"

              style={{
                padding:
                  mobile
                    ? "22px"
                    : "30px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.18)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",
              }}
            >

              <p className="bento-label">
                Stack
              </p>

              <div
                style={{
                  display:
                    "flex",

                  flexWrap:
                    "wrap",

                  gap: "12px",

                  marginTop:
                    "22px",
                }}
              >

                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Spring Boot",
                  "Supabase",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bento-pill"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </div>
          </Reveal>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "grid",

            gap:
              mobile
                ? "18px"
                : "26px",
          }}
        >

          {/* STATUS */}
          <Reveal delay={0.25}>
            <div
              className="bento-card"

              style={{
                padding:
                  mobile
                    ? "22px"
                    : "28px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.18)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",
              }}
            >

              <Sparkles
                size={24}
              />

              <h3
                style={{
                  marginTop:
                    "18px",

                  fontFamily:
                    "var(--font-display)",

                  fontSize:
                    mobile
                      ? "30px"
                      : "42px",

                  lineHeight:
                    "0.95",

                  fontWeight: 400,
                }}
              >
                Available
                <br />
                for work.
              </h3>

            </div>
          </Reveal>

          {/* GITHUB */}
          <Reveal delay={0.3}>
            <Link
              to="/github"

              className="bento-card"

              style={{
                padding:
                  mobile
                    ? "22px"
                    : "28px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.18)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",

                textDecoration:
                  "none",
              }}
            >

              <FolderGit2
                size={24}
              />

              <h3
                style={{
                  marginTop:
                    "18px",

                  fontFamily:
                    "var(--font-display)",

                  fontSize:
                    mobile
                      ? "30px"
                      : "40px",

                  lineHeight:
                    "0.95",

                  fontWeight: 400,
                }}
              >
                GitHub
                <br />
                activity.
              </h3>

            </Link>
          </Reveal>

          {/* MUSIC */}
          <Reveal delay={0.35}>
            <div
              className="bento-card"

              style={{
                padding:
                  mobile
                    ? "22px"
                    : "28px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.18)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",
              }}
            >

              <Music4
                size={24}
              />

              <h3
                style={{
                  marginTop:
                    "18px",

                  fontFamily:
                    "var(--font-display)",

                  fontSize:
                    mobile
                      ? "28px"
                      : "36px",

                  lineHeight:
                    "1",

                  fontWeight: 400,
                }}
              >
                Tamil
                <br />
                coding
                <br />
                vibes.
              </h3>

            </div>
          </Reveal>

          {/* RESUME */}
          <Reveal delay={0.4}>
            <Link
              to="/resume"

              className="bento-card"

              style={{
                padding:
                  mobile
                    ? "22px"
                    : "28px",

                borderRadius:
                  "32px",

                background:
                  "rgba(255,255,255,0.18)",

                backdropFilter:
                  "blur(18px)",

                border:
                  "1px solid rgba(255,255,255,0.14)",

                textDecoration:
                  "none",
              }}
            >

              <FileText
                size={24}
              />

              <h3
                style={{
                  marginTop:
                    "18px",

                  fontFamily:
                    "var(--font-display)",

                  fontSize:
                    mobile
                      ? "28px"
                      : "36px",

                  lineHeight:
                    "1",

                  fontWeight: 400,
                }}
              >
                Resume &
                <br />
                experience.
              </h3>

            </Link>
          </Reveal>

        </div>

      </section>

    </div>
  );
}