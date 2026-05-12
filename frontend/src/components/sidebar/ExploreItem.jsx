import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExploreItem({
  number,
  label,
  to,
}) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{
            x: 3,
          }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "11px 13px",

            borderRadius: "13px",

            background: isActive
              ? "rgba(255,255,255,0.48)"
              : "transparent",

            color: isActive
              ? "var(--color-ink)"
              : "var(--color-ink-dim)",

            fontSize: "13px",

            cursor: "pointer",

            transition:
              "background var(--duration-base) var(--ease-out-soft), color var(--duration-base) var(--ease-out-soft)",
          }}
        >

          {/* Left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "8px",
            }}
          >

            <span
              style={{
                fontFamily: "var(--font-mono)",

                fontSize: "12px",
              }}
            >
              {number}
            </span>

            <span>{label}</span>

          </div>

          {/* Arrow */}
          <motion.span
            whileHover={{
              x: 2,
            }}
            transition={{
              duration: 0.18,
            }}
            style={{
              fontSize: "12px",

              opacity: isActive ? 1 : 0.6,
            }}
          >
            →
          </motion.span>

        </motion.div>
      )}
    </NavLink>
  );
}