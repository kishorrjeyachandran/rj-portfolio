export default function Home() {
  return (
    <div
      style={{
        paddingTop: "8px",
      }}
    >

      {/* Latest Log */}
      <section
        style={{
          marginBottom: "56px",
        }}
      >

        <article  className="editorial-surface soft-hover"
          style={{
            background: "var(--color-ink)",

            color: "var(--color-ink-inverted)",

            borderRadius: "16px",

            padding: "18px 20px",
          }}
        >

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              marginBottom: "14px",
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

                  fontSize: "12px",

                  textTransform: "uppercase",

                  letterSpacing: "0.12em",
                }}
              >
                Latest Log
              </p>

              <p
                style={{
                  fontSize: "12px",

                  color: "var(--color-ink-mute)",
                }}
              >
                May 2026
              </p>

            </div>

            <span
              style={{
                opacity: 0.7,
              }}
            >
              ⌄
            </span>

          </div>

          {/* Body */}
          <p
            style={{
              fontSize: "14px",

              lineHeight: "1.9",

              color: "rgba(255,255,255,0.76)",
            }}
          >
            Currently redesigning my portfolio and building modern full stack products with immersive interfaces and thoughtful interactions.
          </p>

        </article>

      </section>

      {/* Featured Work */}
      <section
        style={{
          marginBottom: "110px",
        }}
      >

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            marginBottom: "34px",
          }}
        >

          <h2
            style={{
              fontFamily: "var(--font-display)",

              fontSize: "44px",

              lineHeight: 1,

              fontWeight: 400,
            }}
          >
            Featured Work
          </h2>

          <p
            style={{
              fontFamily: "var(--font-mono)",

              fontSize: "11px",

              textTransform: "uppercase",

              letterSpacing: "0.14em",

              color: "var(--color-ink-mute)",
            }}
          >
            Selected Projects
          </p>

        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",

            gap: "30px",
          }}
        >

          <ProjectCard
            number="01"
            title="ThoughtNest"
            status="Shipped"
            description="A modern journaling and productivity platform focused on elegant writing experiences."
          />

          <ProjectCard
            number="02"
            title="Cartify"
            status="In Progress"
            description="A premium shopping experience with authentication, cart management, and immersive UI."
          />

        </div>

      </section>



    </div>
  );
}

/* ---------------------------------------------------- */

function ProjectCard({
  number,
  title,
  status,
  description,
}) {
  return (
    <article
      className="project-card editorial-surface soft-hover"
      style={{
        background: "var(--color-bg-light)",

        borderRadius: "16px",

        padding: "16px",

        position: "relative",

        overflow: "hidden",

        boxShadow:
          "0 2px 12px rgba(40,20,30,0.04)",

        transition:
          "transform var(--duration-base) var(--ease-out-soft)",
      }}
    >

      {/* Top */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          marginBottom: "14px",

          position: "relative",
          zIndex: 2,
        }}
      >

        <div
          style={{
            width: "13px",
            height: "13px",

            borderRadius: "999px",

            background: "var(--color-bg)",

            boxShadow:
              "inset 0 1px 2px rgba(0,0,0,0.15)",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "11px",

            textTransform: "uppercase",

            color: "var(--color-ink-mute)",
          }}
        >
          No. {number}
        </p>

      </div>

      {/* Image */}
      <div
        style={{
          height: "228px",

          borderRadius: "12px",

          marginBottom: "16px",

          overflow: "hidden",

          position: "relative",
        }}
      >

        <div
          className="project-media"
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(135deg, var(--color-pink) 0%, var(--color-pink-1) 100%)",

            transition:
              "transform var(--duration-slow) var(--ease-out-soft)",
          }}
        />

        <div
          className="project-sheen"
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%)",

            backgroundSize: "220% 100%",

            backgroundPosition: "130% 0",

            opacity: 0,

            transition:
              "opacity var(--duration-base) var(--ease-out-soft), background-position var(--duration-slow) var(--ease-out-soft)",
          }}
        />

      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            gap: "16px",

            marginBottom: "10px",
          }}
        >

          <h3
            style={{
              fontFamily: "var(--font-display)",

              fontSize: "28px",

              lineHeight: 1,

              fontWeight: 400,
            }}
          >
            {title}
          </h3>

          <span
            style={{
              fontFamily: "var(--font-mono)",

              fontSize: "10px",

              textTransform: "uppercase",

              color: "var(--color-ink-mute)",
            }}
          >
            {status}
          </span>

        </div>

        <p
          style={{
            fontSize: "13px",

            lineHeight: "1.8",

            color: "var(--color-ink-dim)",
          }}
        >
          {description}
        </p>

      </div>

    </article>
  );
}