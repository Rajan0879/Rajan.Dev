import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse vs touch)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsFinePointer(true);
    } else {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".hover-target") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Central Red Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-red-500 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 700,
          mass: 0.1,
        }}
      />

      {/* Trailing Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-red-500/60"
        style={{
          boxShadow: isHovered
            ? "0 0 20px 2px rgba(239, 68, 68, 0.4), inset 0 0 10px rgba(239, 68, 68, 0.2)"
            : "0 0 8px rgba(239, 68, 68, 0.2)",
          backgroundColor: isHovered ? "rgba(239, 68, 68, 0.12)" : "transparent",
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? "rgba(239, 68, 68, 0.9)" : "rgba(239, 68, 68, 0.5)",
        }}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 320,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CustomCursor;
