import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ThreeDCard = ({ children, className = "", maxTilt = 15 }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), {
    damping: 20,
    stiffness: 150,
  });

  // Motion values for spotlight glow overlay
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse positions from 0 to 1
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);

    // Glow position in pixels relative to card
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Reset tilt to center
    x.set(0.5);
    y.set(0.5);
    glowOpacity.set(0);
  };

  const glowStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    borderRadius: "inherit",
    zIndex: 3,
    background: useTransform(
      [glowX, glowY],
      ([gx, gy]) => `radial-gradient(circle 180px at ${gx}px ${gy}px, rgba(249, 115, 22, 0.12) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 80%)`
    ),
    opacity: glowOpacity,
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md transition-all duration-300 ${
        hovered ? "border-slate-700 shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)]" : ""
      } ${className}`}
    >
      {/* Dynamic Cursor Light Glow */}
      <motion.div style={glowStyle} />

      {/* Children Wrapper with preserve-3d context */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ThreeDCard;
