export default function ProjectCard({
  number,
  title,
  description,
  tags = [],
  image,
link,
}) {
  return (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "block",
    }}
  >
    <article
      className="soft-hover project-editorial-card"
      style={{
        background: "var(--color-bg-light)",

        borderRadius: "24px",

        padding: "16px",

        border: "1px solid rgba(0,0,0,0.06)",

        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",

        overflow: "hidden",

        transition: "all 0.35s ease",

        display: "flex",

        flexDirection: "column",

        aspectRatio: "1 / 1",

        transform:
  number === "01"
    ? "rotate(-1.8deg)"
    : number === "02"
    ? "rotate(1.2deg)"
    : number === "03"
    ? "rotate(-1deg)"
    : "rotate(1.6deg)",

        transformOrigin: "center",
      }}
    >

      {/* Top */}
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          marginBottom: "14px",
        }}
      >

        {/* Circle */}
        <div
          style={{
            width: "18px",
            height: "18px",

            borderRadius: "999px",

            border: "2px solid rgba(0,0,0,0.10)",

            background: "rgba(255,255,255,0.72)",
          }}
        />

        {/* Number */}
        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "12px",

            letterSpacing: "0.12em",

            color: "var(--color-ink-dim)",
          }}
        >
          NO. {number}
        </p>

      </div>

      {/* Image */}
      <div
        style={{
          height: "62%",

          borderRadius: "22px",

          overflow: "hidden",

          marginBottom: "18px",

          position: "relative",
        }}
      >

        <img
          src={image}
          alt={title}
          style={{
            width: "100%",

            height: "100%",

            objectFit: "cover",

            display: "block",

            transition: "transform 0.45s ease",
          }}
        />

      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",

          flexDirection: "column",

          flex: 1,
        }}
      >

        {/* Top Row */}
        <div
          style={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "flex-start",

            gap: "12px",

            marginBottom: "12px",
          }}
        >

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",

              fontSize: "20px",

              lineHeight: "1",

              fontWeight: 400,

              color: "var(--color-ink)",
            }}
          >
            {title}
          </h3>

          {/* Tags */}
          <div
            style={{
              display: "flex",

              flexWrap: "wrap",

              justifyContent: "flex-end",

              gap: "8px",
            }}
          >

            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 12px",

                  borderRadius: "999px",

                  background: "var(--color-bg-neutral-2)",

                  fontFamily: "var(--font-mono)",

                  fontSize: "12px",

                  letterSpacing: "0.08em",

                  color: "var(--color-ink-dim)",

                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",

            lineHeight: "1.7",

            color: "var(--color-ink-dim)",
          }}
        >
          {description}
        </p>

      </div>

        </article>
  </a>
);
}