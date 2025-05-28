import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check screen width
    const isMobile = window.innerWidth <= 640; // Tailwind's "sm" breakpoint is 640px
    if (isMobile) {
      setShowCursor(false);
      return;
    }

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (dotRef.current && circleRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${
          clientY - 4
        }px)`;
        circleRef.current.style.transform = `translate(${clientX - 12}px, ${
          clientY - 12
        }px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!showCursor) return null;

  return (
    <>
      {/* Circle */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-black dark:border-white z-[9999] transition-transform duration-300 ease-out"
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-black dark:bg-white z-[9999]"
      />
    </>
  );
};

export default CustomCursor;
