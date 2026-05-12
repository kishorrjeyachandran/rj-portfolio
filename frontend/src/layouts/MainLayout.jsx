import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--color-bg)",
      }}
    >

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main
        className="main-content"
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >

        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >

          <Outlet />

        </div>

      </main>

    </div>
  );
}