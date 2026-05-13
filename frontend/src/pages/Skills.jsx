export default function Skills() {
  const rows = [
    {
      title: "Frontend",
      number: "01",
      description:
        "Crafting immersive interfaces with smooth interactions, thoughtful spacing, and cinematic visual systems.",
      skills: ["HTML", "CSS", "React", "JavaScript"],
    },
    {
      title: "Backend",
      number: "02",
      description:
        "Building scalable systems, APIs, authentication flows, and database-driven experiences.",
      skills: [
        "Java",
        "Node.js",
        "Spring Boot",
        "Supabase",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools",
      number: "03",
      description:
        "Exploring developer tooling, workflows, experimentation, and rapid product building.",
      skills: ["GitHub", "VS Code", "Flutter", "C++"],
    },
  ];

  const certificates = [
  {
    title: "Multi-Paradigm Programming with Modern C++",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:eb950210-d53d-40da-896d-9c55ea782951",
  },
  {
    title: "The Modern C++ Challenger",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:29d01202-7cd3-4b28-a4d7-f21b2ec51b49",
  },
  {
    title: "Project On HTML CSS - Online Resume Builder",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:e0b8be47-dc9a-4a86-9155-2406f40fa229",
  },
  {
    title: "Java Concepts",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:72bf5e30-c236-4beb-ba16-4c5ee26ecf04",
  },
  {
    title: "Software Design and Development",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:ea42a09a-d145-41c6-8258-438716a471ed",
  },
  {
    title: "Python for Data Science, AI & Development",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2e9175e4-6624-41ad-a03c-9f79527b247c",
  },
  {
    title: "SQL Tables",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:f33fc149-e5c8-481d-9fce-5b5800efc045",
  },
  {
    title: "Networking Basics",
    link: "https://drive.google.com/file/d/1wRA5zEEPD4IOYKAcuVNldEfgCR-08BAp/view",
  },
];

  return (
    <div>

      {/* HERO */}
      <section
        style={{
          marginBottom: "120px",
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "12px",

            letterSpacing: "0.18em",

            textTransform: "uppercase",

            color: "var(--color-ink-mute)",

            marginBottom: "22px",
          }}
        >
          Capabilities
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",

            fontSize: "38px",

            lineHeight: "0.86",

            fontWeight: 400,

            maxWidth: "920px",

            color: "var(--color-ink)",

            marginBottom: "34px",
          }}
        >
          Designing systems.
          <br />
          Building experiences.
          <br />
          Exploring endlessly.
        </h1>

        <p
          style={{
            maxWidth: "620px",

            fontSize: "14px",

            lineHeight: "1.9",

            color: "var(--color-ink-dim)",
          }}
        >
          A blend of frontend engineering, backend architecture,
          interaction design, and creative experimentation.
        </p>

      </section>

      {/* STACK ROWS */}
      <section
        style={{
          display: "flex",

          flexDirection: "column",

          gap: "34px",

          marginBottom: "120px",
        }}
      >

        {rows.map((row, index) => (
          <article
            key={row.title}
            className="soft-hover"
            style={{
              background:
                index % 2 === 0
                  ? "var(--color-bg-light)"
                  : "rgba(255,255,255,0.28)",

              backdropFilter: "blur(10px)",

              borderRadius: "36px",

              padding: "38px 42px",

              display: "grid",

              gridTemplateColumns: "220px 1fr",

              gap: "40px",

              transform:
                index === 0
                  ? "rotate(-1deg)"
                  : index === 1
                  ? "rotate(1deg)"
                  : "rotate(-0.6deg)",

              transition: "all 0.4s ease",
            }}
          >

            {/* LEFT */}
            <div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",

                  fontSize: "11px",

                  letterSpacing: "0.16em",

                  textTransform: "uppercase",

                  color: "var(--color-ink-mute)",

                  marginBottom: "18px",
                }}
              >
                {row.number}
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",

                  fontSize: "38px",

                  lineHeight: "0.95",

                  fontWeight: 400,

                  color: "var(--color-ink)",
                }}
              >
                {row.title}
              </h2>

            </div>

            {/* RIGHT */}
            <div>

              <p
                style={{
                  fontSize: "16px",

                  lineHeight: "1.9",

                  color: "var(--color-ink-dim)",

                  maxWidth: "620px",

                  marginBottom: "34px",
                }}
              >
                {row.description}
              </p>

              <div
                style={{
                  display: "flex",

                  flexWrap: "wrap",

                  gap: "14px",
                }}
              >

                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "14px 20px",

                      borderRadius: "999px",

                      background: "rgba(255,255,255,0.45)",

                      border:
                        "1px solid rgba(255,255,255,0.24)",

                      fontFamily: "var(--font-mono)",

                      fontSize: "13px",

                      letterSpacing: "0.05em",

                      color: "var(--color-ink)",
                    }}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </article>
        ))}

      </section>

      {/* CERTIFICATES */}
      <section>

        <div
          style={{
            marginBottom: "42px",
          }}
        >

          <p
            style={{
              fontFamily: "var(--font-mono)",

              fontSize: "12px",

              letterSpacing: "0.18em",

              textTransform: "uppercase",

              color: "var(--color-ink-mute)",

              marginBottom: "14px",
            }}
          >
            Certifications
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",

              fontSize: "28px",

              lineHeight: "0.92",

              fontWeight: 400,

              color: "var(--color-ink)",
            }}
          >
            Learning never stops.
          </h2>

        </div>

        <div
          style={{
            display: "grid",

            gap: "18px",
          }}
        >

          {certificates.map((certificate, index) => (
  <a
    key={certificate.title}
    href={certificate.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: "none",
      color: "inherit",
    }}
  >
            <article
              key={certificate.title}
              className="soft-hover"
              style={{
                padding: "26px 30px",

                borderRadius: "28px",

                background: "var(--color-bg-light)",

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                gap: "24px",

                flexWrap: "wrap",
              }}
            >

              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  gap: "22px",
                }}
              >

                <span
                  style={{
                    fontFamily: "var(--font-mono)",

                    fontSize: "12px",

                    color: "var(--color-ink-mute)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",

                    fontSize: "18px",

                    fontWeight: 400,

                    color: "var(--color-ink)",
                  }}
                >
                  {certificate.title}
                </h3>

              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",

                  fontSize: "11px",

                  letterSpacing: "0.14em",

                  textTransform: "uppercase",

                  color: "var(--color-ink-mute)",
                }}
              >
                Verified
              </span>

            </article>
            </a>
          ))}

        </div>

      </section>

    </div>
  );
}