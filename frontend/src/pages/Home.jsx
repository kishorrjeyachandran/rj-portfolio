import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import Reveal from "../components/effects/Reveal";

export default function Home() {

  const mobile =
    window.innerWidth <= 768;

  const projects = [
    {
      number: "01",

      title: "ThoughtNest",

      tag: "Internship",

      description:
        "A modern journaling platform with immersive writing experience.",

      image:
        "/images/projects/thoughtnest.jpg",
    },

    {
      number: "02",

      title: "Cartify",

      tag: "Shipped",

      description:
        "A premium shopping experience with cinematic product interactions.",

      image:
        "/images/projects/cartify.jpg",
    },

    {
      number: "03",

      title: "Tickd",

      tag: "Productivity",

      description:
        "A cinematic task management platform focused on simplicity.",

      image:
        "/images/projects/tickd.jpg",
    },

    {
      number: "04",

      title: "CareerGen",

      tag: "Side Project",

      description:
        "An AI-powered career assistant for students and developers.",

      image:
        "/images/projects/careergen.jpg",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
      }}
    >

      {/* MOBILE HERO */}
      {mobile && (
        <section
          style={{
            marginBottom: "30px",
          }}
        >

          <p
            style={{
              fontFamily:
                "var(--font-mono)",

              fontSize: "11px",

              letterSpacing:
                "0.14em",

              textTransform:
                "uppercase",

              color:
                "var(--color-ink-mute)",

              marginBottom: "18px",
            }}
          >
            Full Stack Developer
          </p>

          <h1
            style={{
              fontFamily:
                "var(--font-display)",

              fontSize: "68px",

              lineHeight: "0.88",

              fontWeight: 400,

              color:
                "var(--color-ink)",

              marginBottom: "18px",
            }}
          >
            Kishor
          </h1>

          <p
            style={{
              fontSize: "15px",

              lineHeight: "1.9",

              color:
                "var(--color-ink-dim)",

              maxWidth: "95%",
            }}
          >
            Building immersive
            full stack digital
            experiences with
            editorial-inspired
            interfaces.
          </p>

        </section>
      )}

      {/* DESKTOP HERO */}
      {!mobile && (
        <section
          style={{
            marginBottom: "56px",
          }}
        >

          <h1
            style={{
              fontFamily:
                "var(--font-display)",

              fontSize: "92px",

              lineHeight: "0.9",

              fontWeight: 400,

              maxWidth: "920px",

              color:
                "var(--color-ink)",
            }}
          >
            Building
            thoughtful
            digital
            experiences.
          </h1>

        </section>
      )}

      {/* LATEST LOG */}
      <Reveal>
        <section
          style={{
            marginBottom:
              mobile
                ? "28px"
                : "44px",
          }}
        >

          <div
            style={{
              background:
                "var(--color-ink)",

              borderRadius:
                mobile
                  ? "32px"
                  : "34px",

              padding:
                mobile
                  ? "26px"
                  : "30px",

              color: "white",

              position:
                "relative",

              overflow:
                "hidden",
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
                  "24px",
              }}
            >

              <div
                style={{
                  display: "flex",

                  alignItems:
                    "center",

                  gap: "14px",
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
                      "0.14em",

                    textTransform:
                      "uppercase",
                  }}
                >
                  Latest Log
                </p>

                <p
                  style={{
                    fontSize:
                      mobile
                        ? "12px"
                        : "13px",

                    opacity: 0.6,
                  }}
                >
                  May 2026
                </p>

              </div>

              <Sparkles
                size={
                  mobile
                    ? 18
                    : 22
                }
              />

            </div>

            {/* BODY */}
            <p
              style={{
                fontSize:
                  mobile
                    ? "18px"
                    : "20px",

                lineHeight:
                  "1.9",

                color:
                  "rgba(255,255,255,0.82)",

                maxWidth:
                  mobile
                    ? "100%"
                    : "85%",
              }}
            >
              Currently
              redesigning my
              portfolio while
              building immersive
              full stack
              experiences and
              experimenting with
              editorial-inspired
              interfaces.
            </p>

          </div>

        </section>
      </Reveal>

      {/* PROJECTS */}
      <section
        style={{
          display: "flex",

          flexDirection:
            "column",

          gap:
            mobile
              ? "24px"
              : "34px",

          marginBottom:
            mobile
              ? "80px"
              : "100px",
        }}
      >

        {projects.map(
          (project, index) => (
            <Reveal
              key={project.title}

              delay={
                index * 0.08
              }
            >

              <Link
                to="/projects"

                style={{
                  textDecoration:
                    "none",
                }}
              >

                <article
                  className="project-card"

                  style={{
                    background:
                      "rgba(255,255,255,0.22)",

                    backdropFilter:
                      "blur(18px)",

                    border:
                      "1px solid rgba(255,255,255,0.14)",

                    borderRadius:
                      mobile
                        ? "34px"
                        : "36px",

                    overflow:
                      "hidden",

                    transition:
                      "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >

                  {/* IMAGE */}
                  <div
                    style={{
                      width: "100%",

                      height:
                        mobile
                          ? "260px"
                          : "320px",

                      overflow:
                        "hidden",

                      position:
                        "relative",
                    }}
                  >

                    <img
                      src={
                        project.image
                      }

                      alt={
                        project.title
                      }

                      style={{
                        width:
                          "100%",

                        height:
                          "100%",

                        objectFit:
                          "cover",

                        transition:
                          "transform 0.6s ease",
                      }}
                    />

                    {/* NUMBER */}
                    <div
                      style={{
                        position:
                          "absolute",

                        top:
                          "18px",

                        right:
                          "18px",

                        background:
                          "rgba(255,255,255,0.88)",

                        padding:
                          mobile
                            ? "10px 14px"
                            : "10px 16px",

                        borderRadius:
                          "999px",

                        fontFamily:
                          "var(--font-mono)",

                        fontSize:
                          mobile
                            ? "11px"
                            : "12px",

                        letterSpacing:
                          "0.12em",

                        color:
                          "var(--color-ink)",
                      }}
                    >
                      NO.
                      {" "}
                      {
                        project.number
                      }
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div
                    style={{
                      padding:
                        mobile
                          ? "24px"
                          : "30px",
                    }}
                  >

                    {/* TOP */}
                    <div
                      style={{
                        display: "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        marginBottom:
                          "18px",
                      }}
                    >

                      <h2
                        style={{
                          fontFamily:
                            "var(--font-display)",

                          fontSize:
                            mobile
                              ? "48px"
                              : "54px",

                          lineHeight:
                            "0.92",

                          fontWeight:
                            400,

                          color:
                            "var(--color-ink)",
                        }}
                      >
                        {
                          project.title
                        }
                      </h2>

                      <ArrowUpRight
                        size={
                          mobile
                            ? 24
                            : 30
                        }

                        color="#2d2329"
                      />

                    </div>

                    {/* TAG */}
                    <div
                      style={{
                        display:
                          "inline-flex",

                        padding:
                          "10px 16px",

                        borderRadius:
                          "999px",

                        background:
                          "rgba(221,181,193,0.38)",

                        fontFamily:
                          "var(--font-mono)",

                        fontSize:
                          "11px",

                        letterSpacing:
                          "0.12em",

                        textTransform:
                          "uppercase",

                        marginBottom:
                          "18px",

                        color:
                          "var(--color-ink)",
                      }}
                    >
                      {
                        project.tag
                      }
                    </div>

                    {/* DESC */}
                    <p
                      style={{
                        fontSize:
                          mobile
                            ? "15px"
                            : "17px",

                        lineHeight:
                          "1.9",

                        color:
                          "var(--color-ink-dim)",

                        maxWidth:
                          mobile
                            ? "100%"
                            : "90%",
                      }}
                    >
                      {
                        project.description
                      }
                    </p>

                  </div>

                </article>

              </Link>

            </Reveal>
          )
        )}

      </section>

    </div>
  );
}