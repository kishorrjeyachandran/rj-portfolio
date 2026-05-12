export default function About() {
  return (
    <div>

      {/* ABOUT */}
      <section
        style={{
          maxWidth: "1180px",
          marginBottom: "70px",
        }}
      >

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-ink-mute)",
            marginBottom: "24px",
          }}
        >
          About Me
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "38px",
            lineHeight: "0.95",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "32px",
          }}
        >
          Hi, I’m Kishor!
        </h1>

        {/* Content */}
        <div
          style={{
            maxWidth: "980px",
          }}
        >

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "var(--color-ink-dim)",
              marginBottom: "20px",
            }}
          >
            I grew up in Tamil Nadu and am now exploring the world of full stack
            development and modern interface design. What started as curiosity
            around websites slowly turned into a love for crafting immersive
            digital products that feel calm, thoughtful, and human.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "var(--color-ink-dim)",
              marginBottom: "20px",
            }}
          >
            When I’m not building projects, you’ll probably find me redesigning
            UI ideas, experimenting with animations, listening to Tamil songs
            late at night, or trying to survive being trapped in SKCET for
            another semester :)
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "var(--color-ink-dim)",
            }}
          >
            Always happy to connect — whether it’s about development, design,
            projects, or just good conversations.
          </p>

        </div>

      </section>

      {/* IMAGE STRIP */}
      {/* IMAGE STRIP */}
<section
  style={{
    marginBottom: "90px",
  }}
>

  <div
    style={{
      display: "grid",

      gridTemplateColumns: "1fr 2.1fr 1fr",

      gap: "24px",

      alignItems: "center",
    }}
  >

    {/* Left */}
    <ImageCard
      height="330px"
      image="/images/about-1.jpg"
      rotate="-3deg"
    />

    {/* Center */}
    <ImageCard
      height="360px"
      image="/images/about-2.jpg"
      rotate="1.5deg"
    />

    {/* Right */}
    <ImageCard
      height="330px"
      image="/images/about-3.jpg"
      rotate="-2deg"
    />

  </div>

</section>

      {/* MY JOURNEY */}
      <section
        style={{
          marginBottom: "110px",
        }}
      >

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-ink-mute)",
            marginBottom: "24px",
          }}
        >
          My Journey
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 240px))",
            gap: "20px",
          }}
        >

          <InfoCard
            title="Schooling"
            description="Completed my schooling with strong interests in creativity, technology, and problem solving."
          />

          <InfoCard
            title="SKCET"
            description="Currently pursuing engineering while building modern full stack applications and immersive interfaces."
          />

          <InfoCard
            title="Full Stack"
            description="Focused on React, Node.js, MongoDB, Framer Motion, and editorial-inspired web experiences."
          />

        </div>

      </section>

    </div>
  );
}

/* IMAGE CARD */

function ImageCard({
  image,
  height,
  rotate = "0deg",
}) {
  return (
    <div
      className="soft-hover"
      style={{
        height,

        borderRadius: "20px",

        overflow: "hidden",

        position: "relative",

        transform: `rotate(${rotate})`,

        transition: "transform 0.35s ease",

        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >

      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

    </div>
  );
}

/* JOURNEY CARD */

function InfoCard({
  title,
  description,
}) {
  return (
    <article
      className="editorial-surface soft-hover"
      style={{
        padding: "14px",
        borderRadius: "18px",
        maxWidth: "240px",
      }}
    >

      {/* TITLE */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "21px",
          lineHeight: "1",
          fontWeight: 400,
          marginBottom: "10px",
          color: "var(--color-ink)",
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        style={{
          fontSize: "12px",
          lineHeight: "1.7",
          color: "var(--color-ink-dim)",
          marginBottom: "14px",
        }}
      >
        {description}
      </p>

      {/* IMAGE */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: "14px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, var(--color-pink-1), var(--color-bg-neutral))",
        }}
      />

    </article>
  );
}