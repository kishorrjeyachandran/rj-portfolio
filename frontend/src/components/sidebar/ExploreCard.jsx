import ExploreItem from "./ExploreItem";

export default function ExploreCard() {
  return (
    <div
      style={{
        width: "220px",

        background: "var(--color-bg-neutral-2)",

        borderRadius: "22px",

        padding: "18px",

        boxShadow:
          "0 2px 12px rgba(40,20,30,0.04)",
      }}
    >

      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-mono)",

          fontSize: "11px",

          textTransform: "uppercase",

          letterSpacing: "0.16em",

          marginBottom: "18px",

          color: "var(--color-ink)",
        }}
      >
        Explore
      </p>

      {/* Items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          gap: "8px",
        }}
      >

        <ExploreItem
          number="01."
          label="Projects"
          to="/"
        />

        <ExploreItem
          number="02."
          label="About Me"
          to="/about"
        />

        <ExploreItem
          number="03."
          label="Skills"
          to="/skills"
        />

        <ExploreItem
  number="04."
  label="GitHub"
  to="/github"
/>

        <ExploreItem
          number="05."
          label="Education"
          to="/education"
        />

      </div>

    </div>
  );
}