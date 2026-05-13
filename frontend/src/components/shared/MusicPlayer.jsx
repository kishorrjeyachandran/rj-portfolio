import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const playerRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  const [currentSong, setCurrentSong] =
    useState(0);

  const [position, setPosition] =
    useState({
      x: 340,
      y: window.innerHeight - 220,
    });

  const [dragging, setDragging] =
    useState(false);

  const [expanded, setExpanded] =
    useState(false);

  const offset = useRef({
    x: 0,
    y: 0,
  });

  const playlist = [
    {
      title: "Ordinary Person",
      artist: "Anirudh",
      file: "/music/song-1.mp3",
    },
    {
      title: "Hayyoda",
      artist: "Anirudh",
      file: "/music/song-2.mp3",
    },
    {
      title: "The Life of Ram",
      artist: "Pradeep Kumar",
      file: "/music/song-3.mp3",
    },
    {
      title:
        "Thenmadurai Vaigai Nadhi",
      artist: "Ilaiyaraaja",
      file: "/music/song-4.mp3",
    },
  ];

  const song =
    playlist[currentSong];

  /* DRAGGING */
  useEffect(() => {
    if (!dragging) return;

    const move = (e) => {
      setPosition({
        x:
          e.clientX -
          offset.current.x,

        y:
          e.clientY -
          offset.current.y,
      });
    };

    const stop = () => {
      setDragging(false);
    };

    window.addEventListener(
      "mousemove",
      move
    );

    window.addEventListener(
      "mouseup",
      stop
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseup",
        stop
      );
    };
  }, [dragging]);

  /* AUTO PLAY NEXT */
  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const toggleMusic = () => {
    if (!audioRef.current)
      return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const nextSong = () => {
    setCurrentSong((prev) =>
      prev ===
      playlist.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSong = () => {
    setCurrentSong((prev) =>
      prev === 0
        ? playlist.length - 1
        : prev - 1
    );
  };

  const startDragging = (
    e
  ) => {
    const rect =
      playerRef.current.getBoundingClientRect();

    offset.current = {
      x:
        e.clientX -
        rect.left,

      y:
        e.clientY -
        rect.top,
    };

    setDragging(true);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={song.file}
        onEnded={nextSong}
      />

      <div
        ref={playerRef}
        className="soft-hover"

        onMouseEnter={() =>
          setExpanded(true)
        }

        onMouseLeave={() =>
          setExpanded(false)
        }

        onMouseDown={
          startDragging
        }

        style={{
          position: "fixed",

          left: position.x,

          top: position.y,

          zIndex: 9999,

          width: expanded
            ? "280px"
            : "54px",

          height: expanded
            ? "auto"
            : "54px",

          padding: expanded
            ? "20px"
            : "0px",

          borderRadius: "28px",

          background:
            "rgba(255,255,255,0.22)",

          backdropFilter:
            "blur(18px)",

          border:
            "1px solid rgba(255,255,255,0.18)",

          boxShadow:
            "0 10px 40px rgba(0,0,0,0.08)",

          cursor: dragging
            ? "grabbing"
            : "grab",

          userSelect: "none",

          overflow: "hidden",

          display: "flex",

          alignItems: "center",

          justifyContent:
            "center",

          transition:
            "all 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >

        {expanded ? (
          <div
            style={{
              width: "100%",
            }}
          >

            {/* LABEL */}
            <p
              style={{
                fontFamily:
                  "var(--font-mono)",

                fontSize: "10px",

                letterSpacing:
                  "0.14em",

                textTransform:
                  "uppercase",

                color:
                  "var(--color-ink-mute)",

                marginBottom:
                  "10px",
              }}
            >
              Now Playing
            </p>

            {/* SONG */}
            <h3
              style={{
                fontFamily:
                  "var(--font-display)",

                fontSize: "30px",

                fontWeight: 400,

                color:
                  "var(--color-ink)",

                marginBottom:
                  "4px",

                lineHeight:
                  "1",
              }}
            >
              {song.title}
            </h3>

            <p
              style={{
                fontSize: "14px",

                color:
                  "var(--color-ink-dim)",

                marginBottom:
                  "22px",
              }}
            >
              {song.artist}
            </p>

            {/* CONTROLS */}
            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                gap: "10px",
              }}
            >

              <button
                onClick={
                  prevSong
                }
                style={
                  controlStyle
                }
              >
                ←
              </button>

              <button
                onClick={
                  toggleMusic
                }
                style={{
                  ...controlStyle,

                  background:
                    "var(--color-ink)",

                  color:
                    "white",

                  padding:
                    "12px 22px",
                }}
              >
                {playing
                  ? "Pause"
                  : "Play"}
              </button>

              <button
                onClick={
                  nextSong
                }
                style={
                  controlStyle
                }
              >
                →
              </button>

            </div>

          </div>
        ) : (
          /* MINI MODE */
          <div
            style={{
              width: "100%",

              height: "100%",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",
            }}
          >

            <div
              style={{
                width: "14px",

                height: "14px",

                borderRadius:
                  "999px",

                background:
                  "var(--color-ink)",

                boxShadow:
                  "0 0 18px rgba(191,90,122,0.35)",
              }}
            />

          </div>
        )}

      </div>
    </>
  );
}

const controlStyle = {
  border: "none",

  borderRadius: "999px",

  padding: "12px 16px",

  background:
    "rgba(255,255,255,0.4)",

  backdropFilter:
    "blur(10px)",

  fontFamily:
    "var(--font-mono)",

  fontSize: "12px",

  cursor: "pointer",

  color: "var(--color-ink)",
};