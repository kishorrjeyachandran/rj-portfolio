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

  /* HIDE ON MOBILE */
  if (window.innerWidth <= 768)
    return null;

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

        padding: expanded
          ? "12px"
          : "8px",

        borderRadius: "28px",

        background:
          "rgba(255,255,255,0.16)",

        backdropFilter:
          "blur(18px)",

        border:
          "1px solid rgba(255,255,255,0.16)",

        boxShadow:
          "0 10px 40px rgba(0,0,0,0.08)",

        transition:
          "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >

      {visibleItems.map((item) => {

        const Icon = item.icon;

        const active =
          location.pathname ===
          item.path;

        return (
          <Link
            key={item.path}

            to={item.path}

            className="dock-item"

            style={{
              width: expanded
                ? "44px"
                : "34px",

              height: expanded
                ? "44px"
                : "34px",

              borderRadius: "18px",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              background: active
                ? "var(--color-ink)"
                : "rgba(255,255,255,0.22)",

              transition:
                "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >

            <Icon
              size={
                expanded
                  ? 18
                  : 14
              }

              color={
                active
                  ? "white"
                  : "#2d2329"
              }
            />

          </Link>
        );
      })}

    </div>
  );
}