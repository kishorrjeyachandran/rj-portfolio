export default function About() {

  const mobile =
    window.innerWidth <= 768;

  return (
    <div>

      {/* ABOUT */}
      <section
        style={{
          maxWidth: "1180px",

          marginBottom:
            mobile
              ? "52px"
              : "70px",
        }}
      >

        {/* Label */}
        <p
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize:
              mobile
                ? "11px"
                : "12px",

            letterSpacing:
              "0.18em",

            textTransform:
              "uppercase",

            color:
              "var(--color-ink-mute)",

            marginBottom:
              mobile
                ? "18px"
                : "24px",
          }}
        >
          About Me
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily:
              "var(--font-display)",

            fontSize:
              mobile
                ? "56px"
                : "38px",

            lineHeight:
              mobile
                ? "0.9"
                : "0.95",

            fontWeight: 400,

            color:
              "var(--color-ink)",

            marginBottom:
              mobile
                ? "24px"
                : "32px",

            maxWidth:
              mobile
                ? "100%"
                : "580px",
          }}
        >
          Hi,
          <br />
          I’m Kishor.
        </h1>

        {/* Content */}
        <div
          style={{
            maxWidth:
              mobile
                ? "100%"
                : "980px",
          }}
        >

          <p
            style={{
              fontSize:
                mobile
                  ? "15px"
                  : "15px",

              lineHeight:
                mobile
                  ? "1.9"
                  : "1.75",

              color:
                "var(--color-ink-dim)",

              marginBottom:
                mobile
                  ? "18px"
                  : "20px",
            }}
          >
            I grew up in Tamil Nadu
            and am now exploring the
            world of full stack
            development and modern
            interface design.
          </p>

          <p
            style={{
              fontSize:
                mobile
                  ? "15px"
                  : "15px",

              lineHeight:
                mobile
                  ? "1.9"
                  : "1.75",

              color:
                "var(--color-ink-dim)",

              marginBottom:
                mobile
                  ? "18px"
                  : "20px",
            }}
          >
            What started as curiosity
            around websites slowly
            turned into a love for
            crafting immersive
            digital products that
            feel calm, thoughtful,
            and human.
          </p>

          <p
            style={{
              fontSize:
                mobile
                  ? "15px"
                  : "15px",

              lineHeight:
                mobile
                  ? "1.9"
                  : "1.75",

              color:
                "var(--color-ink-dim)",
            }}
          >
            Always happy to connect
            — whether it’s about
            development, design,
            projects, or just good
            conversations.
          </p>

        </div>

      </section>

      {/* IMAGE STRIP */}
      <section
        style={{
          marginBottom:
            mobile
              ? "60px"
              : "90px",
        }}
      >

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              mobile
                ? "1fr"
                : "1fr 2.1fr 1fr",

            gap:
              mobile
                ? "18px"
                : "24px",

            alignItems:
              "center",
          }}
        >

          {/* Left */}
          <ImageCard
            height={
              mobile
                ? "240px"
                : "330px"
            }
            image="/images/about-1.png"
            rotate={
              mobile
                ? "0deg"
                : "-3deg"
            }
            mobile={mobile}
          />

          {/* Center */}
          <ImageCard
            height={
              mobile
                ? "340px"
                : "360px"
            }
            image="/images/about-2.png"
            rotate={
              mobile
                ? "0deg"
                : "1.5deg"
            }
            mobile={mobile}
          />

          {/* Right */}
          <ImageCard
            height={
              mobile
                ? "240px"
                : "330px"
            }
            image="/images/about-3.jpeg"
            rotate={
              mobile
                ? "0deg"
                : "-2deg"
            }
            mobile={mobile}
          />

        </div>

      </section>

      {/* MY JOURNEY */}
      <section
        style={{
          marginBottom:
            mobile
              ? "80px"
              : "110px",
        }}
      >

        {/* Label */}
        <p
          style={{
            fontFamily:
              "var(--font-mono)",

            fontSize:
              mobile
                ? "11px"
                : "12px",

            letterSpacing:
              "0.18em",

            textTransform:
              "uppercase",

            color:
              "var(--color-ink-mute)",

            marginBottom:
              mobile
                ? "20px"
                : "24px",
          }}
        >
          My Journey
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              mobile
                ? "1fr"
                : "repeat(auto-fit, minmax(220px, 240px))",

            gap:
              mobile
                ? "18px"
                : "20px",
          }}
        >

          <InfoCard
            mobile={mobile}
            title="Schooling"
            description="Completed my schooling with strong interests in creativity, technology, and problem solving."
          />

          <InfoCard
            mobile={mobile}
            title="SKCET"
            description="Currently pursuing engineering while building modern full stack applications and immersive interfaces."
          />

          <InfoCard
            mobile={mobile}
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
  mobile,
}) {

  return (
    <div
      className="about-image-card"

      style={{
        height,

        borderRadius:
          mobile
            ? "28px"
            : "20px",

        overflow: "hidden",

        position: "relative",

        transform:
          `rotate(${rotate})`,

        transition:
          "all 0.45s ease",

        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)",

        cursor: "pointer",
      }}
    >

      {/* Image */}
      <img
        src={image}
        alt=""

        style={{
          width: "100%",

          height: "100%",

          objectFit: "cover",

          display: "block",

          transition:
            "transform 0.6s ease",
        }}
      />

      {/* Overlay */}
      <div
        className="about-image-overlay"

        style={{
          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), transparent 58%)",

          opacity:
            mobile
              ? 1
              : 0,

          transition:
            "opacity 0.35s ease",

          display: "flex",

          alignItems:
            "flex-end",

          padding:
            mobile
              ? "18px"
              : "22px",
        }}
      >

        {/* Caption */}
        <p
          style={{
            fontFamily:
              "var(--font-display)",

            fontSize:
              mobile
                ? "20px"
                : "24px",

            lineHeight:
              "1.1",

            color: "white",

            maxWidth:
              "80%",
          }}
        >
          {image.includes("about-1")
            ? "Late night UI experiments"
            : image.includes("about-2")
            ? "Building immersive digital experiences"
            : "Somewhere between code and creativity"}
        </p>

      </div>

    </div>
  );
}

/* JOURNEY CARD */

function InfoCard({
  title,
  description,
  mobile,
}) {

  return (
    <article
      className="editorial-surface soft-hover"

      style={{
        padding:
          mobile
            ? "20px"
            : "14px",

        borderRadius:
          mobile
            ? "24px"
            : "18px",

        maxWidth:
          mobile
            ? "100%"
            : "240px",
      }}
    >

      {/* TITLE */}
      <h3
        style={{
          fontFamily:
            "var(--font-display)",

          fontSize:
            mobile
              ? "30px"
              : "21px",

          lineHeight: "1",

          fontWeight: 400,

          marginBottom:
            mobile
              ? "14px"
              : "10px",

          color:
            "var(--color-ink)",
        }}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        style={{
          fontSize:
            mobile
              ? "14px"
              : "12px",

          lineHeight:
            mobile
              ? "1.8"
              : "1.7",

          color:
            "var(--color-ink-dim)",

          marginBottom:
            mobile
              ? "18px"
              : "14px",
        }}
      >
        {description}
      </p>

      {/* IMAGE */}
      <div
        style={{
          width: "100%",

          aspectRatio:
            mobile
              ? "16 / 9"
              : "1 / 1",

          borderRadius:
            mobile
              ? "18px"
              : "14px",

          overflow: "hidden",

          background:
            "linear-gradient(135deg, var(--color-pink-1), var(--color-bg-neutral))",
        }}
      />

    </article>
  );
}