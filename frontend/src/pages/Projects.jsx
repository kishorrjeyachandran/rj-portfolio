import ProjectCard from "../components/projects/ProjectCard";
import { useState } from "react";
export default function Projects() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>

      {/* Latest Log */}
<section
  style={{
    marginBottom: "54px",
  }}
>

  <article
    className="editorial-surface soft-hover"
    style={{
      background: "var(--color-ink)",

      color: "var(--color-ink-inverted)",

      borderRadius: "18px",

      padding: "18px 20px",

      overflow: "hidden",
    }}
  >

    {/* Header */}
    <div
      onClick={() => setCollapsed(!collapsed)}
      style={{
        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        cursor: "pointer",

        userSelect: "none",
      }}
    >

      <div
        style={{
          display: "flex",

          alignItems: "center",

          gap: "10px",
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "15px",

            textTransform: "uppercase",

            letterSpacing: "0.14em",
          }}
        >
          Latest Log
        </p>

        <p
          style={{
            fontSize: "14px",

            color: "rgba(255,255,255,0.6)",
          }}
        >
          May 2026
        </p>

      </div>

      {/* Chevron */}
      <span
        style={{
          opacity: 0.7,

          transform: collapsed
            ? "rotate(-90deg)"
            : "rotate(0deg)",

          transition: "transform 0.28s ease",
        }}
      >
        ⌄
      </span>

    </div>

    {/* Body */}
    <div
      style={{
        maxHeight: collapsed ? "0px" : "200px",

        opacity: collapsed ? 0 : 1,

        overflow: "hidden",

        transition:
          "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >

      <p
        style={{
          fontSize: "14px",

          lineHeight: "1.9",

          color: "rgba(255,255,255,0.78)",

          marginTop: "14px",
        }}
      >
        Currently redesigning my portfolio while building immersive
        full stack experiences and experimenting with
        editorial-inspired interfaces.
      </p>

    </div>

  </article>

</section>

      {/* Heading */}
      <section
        style={{
          marginBottom: "48px",
        }}
      >

      </section>

      {/* Projects Grid */}
      <section>

        <div
  style={{
    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "32px",

    alignItems: "start",
  }}
>

          <ProjectCard
            number="01"
            title="ThoughtNest"
            description="A modern journaling and productivity platform focused on elegant writing experiences and organization."
            tags={["INTERNSHIP", "SHIPPED"]}
            image="/images/project-1.png"
            link="https://thought-nest-blush.vercel.app/"
          />

          <ProjectCard
            number="02"
            title="Cartify"
            description="A premium shopping experience with authentication, cart management, and immersive UI."
            tags={["INTERNSHIP", "SHIPPED"]}
            image="/images/project-2.png"
            link="https://cartify-project-eta.vercel.app/"
          />

          <ProjectCard
            number="03"
            title="Tickd"
            description="A cinematic task management experience built with smooth animations and immersive interactions."
            tags={["INTERNSHIP", "SHIPPED"]}
            image="/images/project-3.png"
            link="https://tickd-iota.vercel.app/"
          />

          <ProjectCard
  number="04"
  title="CareerGen"
  description="An AI-powered career platform focused on resume building, career guidance, and smart professional growth tools."
  tags={["SIDE PROJECT", "LIVE"]}
  image="/images/project-4.png"
  link="https://career-gen-frontend.vercel.app/"
/>

<ProjectCard
  number="05"
  title="Connect"
  description="A modern communication and collaboration platform designed for seamless interaction, networking, and real-time engagement."
  tags={["SIDE PROJECT", "AI"]}
  image="/images/project-5.png"
  link="https://connect-agri-roots.lovable.app/"
/>


        </div>

      </section>

    </div>
  );
}