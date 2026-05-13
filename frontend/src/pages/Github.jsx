import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function Github() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kishorrjeyachandran")
      .then((res) => res.json())
      .then((data) => setProfile(data));

    fetch(
      "https://api.github.com/users/kishorrjeyachandran/repos?sort=updated"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <div>

      {/* Heading */}
      <section
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
            marginBottom: "18px",
          }}
        >
          Github
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "38px",
            fontWeight: 400,
            color: "var(--color-ink)",
          }}
        >
          Open Source & Contributions
        </h1>

      </section>

      {/* Profile */}
      {profile && (
        <section
          className="editorial-surface"
          style={{
            padding: "24px",

            borderRadius: "24px",

            background: "var(--color-bg-light)",

            marginBottom: "36px",
          }}
        >

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "22px",

              flexWrap: "wrap",
            }}
          >

            {/* Avatar */}
            <img
              src={profile.avatar_url}
              alt=""
              style={{
                width: "92px",
                height: "92px",

                borderRadius: "999px",

                objectFit: "cover",
              }}
            />

            {/* Info */}
            <div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "30px",
                  fontWeight: 400,
                  marginBottom: "8px",
                }}
              >
                {profile.name}
              </h2>

              <p
                style={{
                  color: "var(--color-ink-dim)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                {profile.bio}
              </p>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                }}
              >

                <GithubPill
                  label="Followers"
                  value={profile.followers}
                />

                <GithubPill
                  label="Following"
                  value={profile.following}
                />

                <GithubPill
                  label="Repositories"
                  value={profile.public_repos}
                />

              </div>

            </div>

          </div>

        </section>
      )}

      {/* Contributions */}
      <section
        className="editorial-surface"
        style={{
          padding: "24px",

          paddingTop: "12px",

          overflow: "visible",

          borderRadius: "24px",

          background: "var(--color-bg-light)",

          overflowX: "auto",

          marginBottom: "42px",
        }}
      >

        <GitHubCalendar
  username="kishorrjeyachandran"
  blockSize={14}
  blockMargin={5}
  fontSize={14}
  showWeekdayLabels
/>

      </section>

      {/* Repository Grid */}
      <section>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",

            gap: "24px",
          }}
        >

          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >

              <article
                className="soft-hover"
                style={{
                  background: "var(--color-bg-light)",

                  borderRadius: "22px",

                  padding: "20px",

                  minHeight: "220px",

                  transform:
                    repo.id % 2 === 0
                      ? "rotate(-1deg)"
                      : "rotate(1deg)",

                  transition: "all 0.35s ease",
                }}
              >

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-mute)",
                    marginBottom: "18px",
                  }}
                >
                  Repository
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 400,
                    marginBottom: "14px",
                  }}
                >
                  {repo.name}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--color-ink-dim)",
                    marginBottom: "20px",
                  }}
                >
                  {repo.description ||
                    "No description available."}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >

                  <GithubTag>
                    {repo.language || "Code"}
                  </GithubTag>

                  <GithubTag>
                    ★ {repo.stargazers_count}
                  </GithubTag>

                </div>

              </article>

            </a>
          ))}

        </div>

      </section>

    </div>
  );
}

/* Pill */

function GithubPill({ label, value }) {
  return (
    <div
      style={{
        padding: "10px 16px",

        borderRadius: "999px",

        background: "var(--color-bg-neutral-2)",
      }}
    >

      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
        }}
      >
        {label}: {value}
      </span>

    </div>
  );
}

/* Tag */

function GithubTag({ children }) {
  return (
    <span
      style={{
        padding: "7px 12px",

        borderRadius: "999px",

        background: "var(--color-bg-neutral-2)",

        fontFamily: "var(--font-mono)",

        fontSize: "11px",
      }}
    >
      {children}
    </span>
  );
}