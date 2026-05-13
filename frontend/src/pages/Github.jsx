import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function Github() {

  const mobile =
    window.innerWidth <= 768;

  const [profile, setProfile] =
    useState(null);

  const [repos, setRepos] =
    useState([]);

  useEffect(() => {

    fetch(
      "https://api.github.com/users/kishorrjeyachandran"
    )
      .then((res) => res.json())
      .then((data) =>
        setProfile(data)
      );

    fetch(
      "https://api.github.com/users/kishorrjeyachandran/repos?sort=updated"
    )
      .then((res) => res.json())
      .then((data) =>
        setRepos(
          data.slice(0, 6)
        )
      );

  }, []);

  return (
    <div>

      {/* HEADING */}
      <section
        style={{
          marginBottom:
            mobile
              ? "34px"
              : "42px",
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
              "0.18em",

            textTransform:
              "uppercase",

            color:
              "var(--color-ink-mute)",

            marginBottom:
              mobile
                ? "16px"
                : "18px",
          }}
        >
          Github
        </p>

        <h1
          style={{
            fontFamily:
              "var(--font-display)",

            fontSize:
              mobile
                ? "46px"
                : "38px",

            lineHeight:
              mobile
                ? "0.92"
                : "1",

            fontWeight: 400,

            color:
              "var(--color-ink)",

            maxWidth:
              mobile
                ? "100%"
                : "720px",
          }}
        >
          Open Source
          <br />
          & Contributions
        </h1>

      </section>

      {/* PROFILE */}
      {profile && (
        <section
          className="editorial-surface"

          style={{
            padding:
              mobile
                ? "22px"
                : "24px",

            borderRadius:
              mobile
                ? "28px"
                : "24px",

            background:
              "var(--color-bg-light)",

            marginBottom:
              mobile
                ? "28px"
                : "36px",
          }}
        >

          <div
            style={{
              display: "flex",

              flexDirection:
                mobile
                  ? "column"
                  : "row",

              alignItems:
                mobile
                  ? "flex-start"
                  : "center",

              gap:
                mobile
                  ? "22px"
                  : "22px",
            }}
          >

            {/* AVATAR */}
            <img
              src={
                profile.avatar_url
              }

              alt=""

              style={{
                width:
                  mobile
                    ? "110px"
                    : "92px",

                height:
                  mobile
                    ? "110px"
                    : "92px",

                borderRadius:
                  "999px",

                objectFit:
                  "cover",
              }}
            />

            {/* INFO */}
            <div>

              <h2
                style={{
                  fontFamily:
                    "var(--font-display)",

                  fontSize:
                    mobile
                      ? "38px"
                      : "30px",

                  fontWeight:
                    400,

                  marginBottom:
                    "10px",
                }}
              >
                {profile.name}
              </h2>

              <p
                style={{
                  color:
                    "var(--color-ink-dim)",

                  lineHeight:
                    mobile
                      ? "1.9"
                      : "1.7",

                  fontSize:
                    mobile
                      ? "14px"
                      : "15px",

                  marginBottom:
                    "18px",

                  maxWidth:
                    "640px",
                }}
              >
                {profile.bio}
              </p>

              {/* STATS */}
              <div
                style={{
                  display:
                    "grid",

                  gridTemplateColumns:
                    mobile
                      ? "1fr 1fr"
                      : "repeat(3,auto)",

                  gap:
                    mobile
                      ? "12px"
                      : "18px",
                }}
              >

                <GithubPill
                  mobile={mobile}
                  label="Followers"
                  value={
                    profile.followers
                  }
                />

                <GithubPill
                  mobile={mobile}
                  label="Following"
                  value={
                    profile.following
                  }
                />

                <GithubPill
                  mobile={mobile}
                  label="Repositories"
                  value={
                    profile.public_repos
                  }
                />

              </div>

            </div>

          </div>

        </section>
      )}

      {/* CONTRIBUTIONS */}
      <section
        className="editorial-surface"

        style={{
          padding:
            mobile
              ? "18px"
              : "24px",

          paddingTop:
            mobile
              ? "8px"
              : "12px",

          overflow:
            "visible",

          borderRadius:
            mobile
              ? "28px"
              : "24px",

          background:
            "var(--color-bg-light)",

          overflowX:
            "auto",

          marginBottom:
            mobile
              ? "34px"
              : "42px",
        }}
      >

        <GitHubCalendar
          username="kishorrjeyachandran"

          blockSize={
            mobile
              ? 10
              : 14
          }

          blockMargin={
            mobile
              ? 4
              : 5
          }

          fontSize={
            mobile
              ? 11
              : 14
          }

          showWeekdayLabels={
            !mobile
          }
        />

      </section>

      {/* REPOSITORIES */}
      <section>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              mobile
                ? "1fr"
                : "repeat(auto-fit, minmax(280px, 1fr))",

            gap:
              mobile
                ? "18px"
                : "24px",
          }}
        >

          {repos.map((repo) => (

            <a
              key={repo.id}

              href={
                repo.html_url
              }

              target="_blank"

              rel="noopener noreferrer"

              style={{
                textDecoration:
                  "none",

                color:
                  "inherit",
              }}
            >

              <article
                className="soft-hover"

                style={{
                  background:
                    "var(--color-bg-light)",

                  borderRadius:
                    mobile
                      ? "28px"
                      : "22px",

                  padding:
                    mobile
                      ? "22px"
                      : "20px",

                  minHeight:
                    mobile
                      ? "auto"
                      : "220px",

                  transform:
                    mobile
                      ? "rotate(0deg)"
                      : repo.id % 2 === 0
                      ? "rotate(-1deg)"
                      : "rotate(1deg)",

                  transition:
                    "all 0.35s ease",
                }}
              >

                <p
                  style={{
                    fontFamily:
                      "var(--font-mono)",

                    fontSize:
                      "11px",

                    letterSpacing:
                      "0.14em",

                    textTransform:
                      "uppercase",

                    color:
                      "var(--color-ink-mute)",

                    marginBottom:
                      "18px",
                  }}
                >
                  Repository
                </p>

                <h3
                  style={{
                    fontFamily:
                      "var(--font-display)",

                    fontSize:
                      mobile
                        ? "36px"
                        : "28px",

                    lineHeight:
                      "0.95",

                    fontWeight:
                      400,

                    marginBottom:
                      "14px",
                  }}
                >
                  {repo.name}
                </h3>

                <p
                  style={{
                    fontSize:
                      mobile
                        ? "14px"
                        : "14px",

                    lineHeight:
                      mobile
                        ? "1.9"
                        : "1.7",

                    color:
                      "var(--color-ink-dim)",

                    marginBottom:
                      "20px",
                  }}
                >
                  {repo.description ||
                    "No description available."}
                </p>

                <div
                  style={{
                    display:
                      "flex",

                    gap: "10px",

                    flexWrap:
                      "wrap",
                  }}
                >

                  <GithubTag
                    mobile={mobile}
                  >
                    {repo.language ||
                      "Code"}
                  </GithubTag>

                  <GithubTag
                    mobile={mobile}
                  >
                    ★{" "}
                    {
                      repo.stargazers_count
                    }
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

/* PILL */

function GithubPill({
  label,
  value,
  mobile,
}) {

  return (
    <div
      style={{
        padding:
          mobile
            ? "12px 14px"
            : "10px 16px",

        borderRadius:
          "999px",

        background:
          "var(--color-bg-neutral-2)",
      }}
    >

      <span
        style={{
          fontFamily:
            "var(--font-mono)",

          fontSize:
            mobile
              ? "11px"
              : "12px",

          letterSpacing:
            "0.08em",
        }}
      >
        {label}: {value}
      </span>

    </div>
  );
}

/* TAG */

function GithubTag({
  children,
  mobile,
}) {

  return (
    <span
      style={{
        padding:
          mobile
            ? "8px 13px"
            : "7px 12px",

        borderRadius:
          "999px",

        background:
          "var(--color-bg-neutral-2)",

        fontFamily:
          "var(--font-mono)",

        fontSize:
          mobile
            ? "10px"
            : "11px",
      }}
    >
      {children}
    </span>
  );
}