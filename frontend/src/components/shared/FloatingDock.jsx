import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Home,
  User,
  Wrench,
  FolderGit2,
  FileText,
} from "lucide-react";

import { useState } from "react";

export default function FloatingDock() {
  const location = useLocation();

  const [expanded, setExpanded] =
    useState(false);

  const items = [
    {
      icon: Home,
      label: "Home",
      path: "/",
    },
    {
      icon: User,
      label: "About",
      path: "/about",
    },
    {
      icon: Wrench,
      label: "Skills",
      path: "/skills",
    },
    {
      icon: FolderGit2,
      label: "GitHub",
      path: "/github",
    },
    {
      icon: FileText,
      label: "Resume",
      path: "/resume",
    },
  ];

  const activeItem =
    items.find(
      (item) =>
        item.path ===
        location.pathname
    ) || items[0];

  const visibleItems = expanded
    ? items
    : [activeItem];

  return (
    <div
      className="dock-container"
      onMouseEnter={() =>
        setExpanded(true)
      }
      onMouseLeave={() =>
        setExpanded(false)
      }
      style={{
        position: "fixed",

        top: "28px",

        right: "28px",

        zIndex: 9999,

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        gap: "10px",

        padding: "12px",

        borderRadius: "28px",

        background:
          "rgba(255,255,255,0.16)",

        backdropFilter: "blur(18px)",

        border:
          "1px solid rgba(255,255,255,0.16)",

        boxShadow:
          "0 10px 40px rgba(0,0,0,0.08)",

        transform: expanded
        ? "scale(1)"
        : "scale(0.92)",

        transition:
        "padding 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1), background 0.35s ease",
      }}
    >

      {visibleItems.map((item) => {
        const Icon = item.icon;

        const active =
          location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="dock-item"
            style={{
              position: "relative",

              width: expanded
              ? "44px"
              : "34px",
              
              height: expanded
              ? "44px"
              : "34px",

              borderRadius: "16px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              background: active
                ? "var(--color-ink)"
                : "rgba(255,255,255,0.22)",

              transition:
                "all 0.35s cubic-bezier(0.22,1,0.36,1)",

              textDecoration: "none",

              overflow: "hidden",

              backdropFilter:
                "blur(10px)",
            }}
          >

            <Icon
              size={expanded ? 18 : 14}
              color={
                active
                  ? "white"
                  : "#2d2329"
              }
            />

            {/* TOOLTIP */}
            <span
              className="dock-tooltip"
              style={{
                position: "absolute",

                right: "58px",

                top: "50%",

                transform:
                  "translateY(-50%) translateX(8px)",

                padding: "8px 12px",

                borderRadius: "999px",

                background:
                  "rgba(45,35,41,0.92)",

                color: "white",

                fontFamily:
                  "var(--font-mono)",

                fontSize: "10px",

                letterSpacing: "0.08em",

                opacity: 0,

                pointerEvents: "none",

                transition:
                  "all 0.28s ease",

                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </span>

          </Link>
        );
      })}

    </div>
  );
}