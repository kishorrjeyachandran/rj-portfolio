import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/effects/PageTransition";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/shared/Footer";
import MusicPlayer from "../components/shared/MusicPlayer";
import CustomCursor from "../components/effects/CustomCursor";
import Starfield from "../components/effects/Starfield";
import MouseGlow from "../components/effects/MouseGlow";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <Starfield />
      <MouseGlow />
      <CustomCursor />
      <MusicPlayer />

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

    background: "rgba(246,238,241,0.82)",

    backdropFilter: "blur(18px)",

    display: "none",

    alignItems: "center",

    justifyContent: "space-between",

    zIndex: 200,
  }}
>

  <h2
    style={{
      fontFamily: "var(--font-display)",

      fontSize: "34px",

      fontWeight: 400,
    }}
  >
    Kishor
  </h2>

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    style={{
      fontFamily: "var(--font-mono)",

      fontSize: "13px",

      letterSpacing: "0.12em",

      color: "var(--color-ink)",
    }}
  >
    MENU
  </button>

</div>

      {/* PAGE */}
      <div
        style={{
          display: "flex",

          alignItems: "stretch",

          minHeight: "100vh",
        }}
      >

        {/* SIDEBAR */}
        <Sidebar
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
/>

        {/* MAIN SIDE */}
        <div
          style={{
            flex: 1,

            minWidth: 0,

            display: "flex",

            flexDirection: "column",
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

  <PageTransition key={location.pathname}>
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