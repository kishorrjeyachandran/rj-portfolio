import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

export default function CommandPalette() {
  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const items = [
    {
      label: "Home",
      action: () => navigate("/"),
    },
    {
      label: "About",
      action: () =>
        navigate("/about"),
    },
    {
      label: "Skills",
      action: () =>
        navigate("/skills"),
    },
    {
      label: "GitHub",
      action: () =>
        navigate("/github"),
    },
    {
      label: "Resume",
      action: () =>
        navigate("/resume"),
    },
  ];

  useEffect(() => {
    const handleKey = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();

        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, []);

  if (!open) return null;

  return (
    <div
      onClick={() =>
        setOpen(false)
      }
      style={{
        position: "fixed",

        inset: 0,

        background:
          "rgba(20,20,20,0.24)",

        backdropFilter:
          "blur(12px)",

        zIndex: 99999,

        display: "flex",

        alignItems: "flex-start",

        justifyContent: "center",

        paddingTop: "120px",
      }}
    >

      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        style={{
          width: "620px",

          background:
            "rgba(255,255,255,0.82)",

          backdropFilter:
            "blur(20px)",

          borderRadius: "32px",

          padding: "18px",

          boxShadow:
            "0 20px 80px rgba(0,0,0,0.12)",
        }}
      >

        {/* SEARCH BAR */}
        <div
          style={{
            padding: "18px 20px",

            borderRadius: "22px",

            background:
              "rgba(255,255,255,0.42)",

            fontFamily:
              "var(--font-mono)",

            fontSize: "13px",

            color:
              "var(--color-ink-mute)",

            marginBottom: "16px",
          }}
        >
          Search portfolio...
        </div>

        {/* ITEMS */}
        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: "10px",
          }}
        >

          {items.map((item) => (
            <button
              key={item.label}

              onClick={() => {
                item.action();

                setOpen(false);
              }}

              style={{
                padding:
                  "18px 20px",

                borderRadius:
                  "20px",

                background:
                  "transparent",

                textAlign:
                  "left",

                fontFamily:
                  "var(--font-display)",

                fontSize: "28px",

                color:
                  "var(--color-ink)",

                transition:
                  "all 0.3s ease",

                cursor:
                  "pointer",
              }}

              className="command-item"
            >
              {item.label}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}