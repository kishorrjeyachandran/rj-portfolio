import ProjectCard from "../components/projects/ProjectCard";
import { useState } from "react";

export default function Projects() {

  const [collapsed, setCollapsed] =
    useState(false);

  const mobile =
    window.innerWidth <= 768;

  return (
    <div>

      {/* Latest Log */}
      <section
        style={{
          marginBottom:
            mobile
              ? "32px"
              : "54px",
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
              mobile
                ? "30px"
                : "18px",

            padding:
              mobile
                ? "24px"
                : "18px 20px",

            overflow:
              "hidden",
          }}
        >

          {/* Header */}
          <div
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }

            style={{
              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "space-between",

              cursor: "pointer",

              userSelect:
                "none",
            }}
          >

            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                gap:
                  mobile
                    ? "12px"
                    : "10px",
              }}
            >

              <p
                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize:
                    mobile
                      ? "11px"
                      : "15px",

                  textTransform:
                    "uppercase",

                  letterSpacing:
                    "0.14em",
                }}
              >
                Latest Log
              </p>

              <p
                style={{
                  fontSize:
                    mobile
                      ? "12px"
                      : "14px",

                  color:
                    "rgba(255,255,255,0.6)",
                }}
              >
                May 2026
              </p>

            </div>

            {/* Chevron */}
            <span
              style={{
                opacity: 0.7,

                fontSize:
                  mobile
                    ? "18px"
                    : "16px",

                transform:
                  collapsed
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",

                transition:
                  "transform 0.28s ease",
              }}
            >
              ⌄
            </span>

          </div>

          {/* Body */}
          <div
            style={{
              maxHeight:
                collapsed
                  ? "0px"
                  : "200px",

              opacity:
                collapsed
                  ? 0
                  : 1,

              overflow:
                "hidden",

              transition:
                "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >

            <p
              style={{
                fontSize:
                  mobile
                    ? "15px"
                    : "14px",

                lineHeight:
                  mobile
                    ? "1.9"
                    : "1.9",

                color:
                  "rgba(255,255,255,0.78)",

                marginTop:
                  mobile
                    ? "18px"
                    : "14px",
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

        </article>

      </section>

      {/* Projects */}
      <section>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              mobile
                ? "1fr"
                : "repeat(2, minmax(0, 1fr))",

            gap:
              mobile
                ? "24px"
                : "32px",

            alignItems:
              "start",
          }}
        >

          <ProjectCard
            mobile={mobile}
            number="01"
            title="ThoughtNest"
            description="A modern journaling and productivity platform focused on elegant writing experiences and organization."
            tags={[
              "INTERNSHIP",
              "SHIPPED",
            ]}
            image="/images/project-1.png"
            link="https://thought-nest-blush.vercel.app/"
          />

          <ProjectCard
            mobile={mobile}
            number="02"
            title="Cartify"
            description="A premium shopping experience with authentication, cart management, and immersive UI."
            tags={[
              "INTERNSHIP",
              "SHIPPED",
            ]}
            image="/images/project-2.png"
            link="https://cartify-project-eta.vercel.app/"
          />

          <ProjectCard
            mobile={mobile}
            number="03"
            title="Tickd"
            description="A cinematic task management experience built with smooth animations and immersive interactions."
            tags={[
              "INTERNSHIP",
              "SHIPPED",
            ]}
            image="/images/project-3.png"
            link="https://tickd-iota.vercel.app/"
          />

          <ProjectCard
            mobile={mobile}
            number="04"
            title="CareerGen"
            description="An AI-powered career platform focused on resume building, career guidance, and smart professional growth tools."
            tags={[
              "SIDE PROJECT",
              "LIVE",
            ]}
            image="/images/project-4.png"
            link="https://career-gen-frontend.vercel.app/"
          />

          <ProjectCard
            mobile={mobile}
            number="05"
            title="Connect"
            description="A modern communication and collaboration platform designed for seamless interaction, networking, and real-time engagement."
            tags={[
              "SIDE PROJECT",
              "AI",
            ]}
            image="/images/project-5.png"
            link="https://connect-agri-roots.lovable.app/"
          />

        </div>

      </section>

    </div>
  );
}