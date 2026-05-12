export default function About() {
  return (
    <div>

      {/* Intro */}
      <section
        style={{
          marginBottom: "80px",
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "var(--color-ink-mute)",
            marginBottom: "20px",
          }}
        >
          About Me
        </p>


        <div
          style={{
            maxWidth: "760px",
          }}
        >

          <p
            style={{
              fontSize: "16px",
              lineHeight: "2",
              color: "var(--color-ink-dim)",
              marginBottom: "28px",
            }}
          >
            Hi, I’m Kishor! I grew up in Tamil Nadu and now spend most of my time building immersive full stack experiences and experimenting with thoughtful interface design.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "2",
              color: "var(--color-ink-dim)",
              marginBottom: "28px",
            }}
          >
            What started as curiosity around websites slowly turned into a love for crafting digital products that feel calm, modern, and human.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "2",
              color: "var(--color-ink-dim)",
            }}
          >
            When I’m not building projects, you’ll probably find me redesigning UI ideas, listening to Tamil songs late at night, or trying to survive being trapped in SKCET for another semester :)
          </p>

        </div>

      </section>

      {/* Image Strip */}
      <section
        style={{
          marginBottom: "90px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2.2fr 1fr",
            gap: "24px",
          }}
        >

          <ImageCard height="420px" />
          <ImageCard height="420px" />
          <ImageCard height="420px" />

        </div>

      </section>

      {/* Communities */}
      <section
        style={{
          marginBottom: "110px",
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "var(--color-ink-mute)",
            marginBottom: "26px",
          }}
        >
          My Journey
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 260px))",
            gap: "22px",
          }}
        >

          <InfoCard
            title="Schooling"
            description="Completed my schooling with a strong interest in technology, creativity, and problem solving — which later led me into full stack development and interface design."
          />

          <InfoCard
            title="SKCET"
            description="Currently pursuing my degree at Sri Krishna College of Engineering and Technology while building modern web applications, UI systems, and immersive digital experiences."
          />

          <InfoCard
            title="Full Stack Journey"
            description="Focused on React, Node.js, MongoDB, Framer Motion, and crafting modern editorial-inspired interfaces that combine engineering with visual storytelling."
          />

        </div>

      </section>

    </div>
  );
}

/* -------------------------------- */

function ImageCard({ height }) {
  return (
    <div
      className="editorial-surface soft-hover"
      style={{
        height,
        borderRadius: "22px",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, var(--color-pink-1), var(--color-bg-neutral))",
      }}
    />
  );
}

/* -------------------------------- */

function InfoCard({
  title,
  description,
}) {
  return (
    <article
      className="editorial-surface soft-hover"
      style={{
        padding: "18px",

        borderRadius: "20px",

        maxWidth: "260px",

        background: "rgba(255,255,255,0.18)",
      }}
    >

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",

          fontSize: "32px",

          lineHeight: 1,

          fontWeight: 400,

          marginBottom: "14px",

          color: "var(--color-ink)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",

          lineHeight: "1.9",

          color: "var(--color-ink-dim)",

          marginBottom: "18px",
        }}
      >
        {description}
      </p>

      {/* 9:16 Image */}
      <div
        style={{
          width: "100%",

          aspectRatio: "1 / 1",

          borderRadius: "18px",

          overflow: "hidden",

          background:
            "linear-gradient(135deg, var(--color-pink-1), var(--color-bg-neutral))",

          position: "relative",
        }}
      >

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(to top, rgba(0,0,0,0.18), transparent)",

            pointerEvents: "none",
          }}
        />

      </div>

    </article>
  );
}