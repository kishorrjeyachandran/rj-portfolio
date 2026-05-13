import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

export default function Reveal({
  children,
  y = 40,
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,

      {
        opacity: 0,
        y,
      },

      {
        opacity: 1,
        y: 0,

        duration: 1.2,

        delay,

        ease:
          "power3.out",
      }
    );
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}