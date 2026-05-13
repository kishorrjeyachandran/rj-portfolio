```jsx
import { Outlet, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import CommandPalette from "../components/shared/CommandPalette";

import PageTransition from "../components/effects/PageTransition";

import NoiseOverlay from "../components/effects/NoiseOverlay";

import Sidebar from "../components/sidebar/Sidebar";

import FloatingDock from "../components/shared/FloatingDock";

import Footer from "../components/shared/Footer";

import MusicPlayer from "../components/shared/MusicPlayer";

import CustomCursor from "../components/effects/CustomCursor";

import Starfield from "../components/effects/Starfield";

import MouseGlow from "../components/effects/MouseGlow";

import Loader from "../components/effects/Loader";

export default function MainLayout() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  /* PAGE TITLES */
  useEffect(() => {
    const titles = {
      "/": "Kishor",

      "/about":
        "About Me — Kishor",

      "/skills":
        "Skills — Kishor",

      "/projects":
        "Projects — Kishor",

      "/github":
        "GitHub — Kishor",

      "/resume":
        "Resume — Kishor",
    };

    document.title =
      titles[location.pathname] ||
      "Kishor";
  }, [location.pathname]);

  /* LOADER */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Starfield />

      <MouseGlow />

      <NoiseOverlay />

      <CustomCursor />

      <MusicPlayer />

      <FloatingDock />

      <CommandPalette />

      {/* MOBILE TOPBAR */}
      <div
        className="mobile-topbar"
        style={{
          position: "fixed",

          top: 0,

          left: 0,

          right: 0,

          height: "72px",

          padding: "0 24px",

          background:
            "rgba(246,238,241,0.82)",

          backdropFilter:
            "blur(18px)",

          display: "none",

          alignItems: "center",

          justifyContent:
            "space-between",

          zIndex: 200,
        }}
      >

        {/* LOGO */}
        <h2
          style={{
            fontFamily:
              "var(--font-display)",

            fontSize: "34px",

            fontWeight: 400,

            color:
              "var(--color-ink)",
          }}
        >
          Kishor
        </h2>

        {/* MENU */}
        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }

          style={{
            border: "none",

            background: "none",

            fontFamily:
              "var(--font-mono)",

            fontSize: "16px",

            cursor: "pointer",

            color:
              "var(--color-ink)",
          }}
        >
          ☰
        </button>

      </div>

      {/* PAGE */}
      <div
        style={{
          minHeight: "100vh",

          position: "relative",
        }}
      >

        {/* MOBILE OVERLAY */}
        {
          menuOpen &&
          window.innerWidth <=
            768 && (
            <div
              onClick={() =>
                setMenuOpen(
                  false
                )
              }

              style={{
                position:
                  "fixed",

                inset: 0,

                background:
                  "rgba(0,0,0,0.16)",

                backdropFilter:
                  "blur(6px)",

                zIndex: 250,
              }}
            />
          )
        }

        {/* SIDEBAR */}
        <Sidebar
          menuOpen={menuOpen}
          setMenuOpen={
            setMenuOpen
          }
        />

        {/* MAIN SIDE */}
        <div
          style={{
            width: "100%",

            minWidth: 0,

            display: "flex",

            flexDirection:
              "column",
          }}
        >

          {/* CONTENT */}
          <main
            className="main-content"
            style={{
              flex: 1,

              minWidth: 0,
            }}
          >

            <AnimatePresence mode="wait">

              <PageTransition
                key={
                  location.pathname
                }
              >
                <Outlet />
              </PageTransition>

            </AnimatePresence>

          </main>

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </>
  );
}
```
