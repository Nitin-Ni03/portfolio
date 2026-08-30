import { useEffect, useRef, useState } from "react";
import { skills } from "../data/Data";

const SkillsSphere = () => {
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);
  
  // Extract skill names from all categories
  const skillNames = [
    ...skills.languages.map((s) => s.name),
    ...skills.frameworks.map((s) => s.name),
    ...skills.databases.map((s) => s.name),
    ...skills.tools.slice(0, 4).map((s) => s.name), // pick top tools
    ...skills.concepts.slice(0, 3).map((s) => s.name),
    ...skills.design.slice(0, 3).map((s) => s.name),
  ];

  const radius = 180; // Sphere radius
  const depth = 220; // Perspective depth parameter

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Generate tags with coordinates evenly distributed on a sphere
    const N = skillNames.length;
    const tempItems = [];

    for (let i = 0; i < N; i++) {
      const theta = Math.acos(-1 + (2 * i) / N);
      const phi = Math.sqrt(N * Math.PI) * theta;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      // Random color matching our theme: orange, violet, sky-blue, white
      const colors = ["text-orange-400 border-orange-500/20 bg-orange-500/5", "text-violet-400 border-violet-500/20 bg-violet-500/5", "text-sky-400 border-sky-500/20 bg-sky-500/5", "text-slate-300 border-slate-700 bg-slate-900/40"];
      const themeColor = colors[i % colors.length];

      tempItems.push({
        text: skillNames[i],
        x,
        y,
        z,
        color: themeColor,
      });
    }

    setItems(tempItems);

    let mouseX = 0;
    let mouseY = 0;
    let autoRotateX = 0.005; // Auto rotate speed
    let autoRotateY = 0.005;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Calculate cursor deviation from center of sphere
      mouseX = (e.clientX - cx) * 0.05;
      mouseY = (e.clientY - cy) * 0.05;
    };

    container.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const updateCoordinates = () => {
      // Set rotation speeds based on mouse (with fallback to auto rotate)
      const currentRotateX = Math.abs(mouseX) > 0.1 ? mouseY * 0.001 : autoRotateX;
      const currentRotateY = Math.abs(mouseY) > 0.1 ? mouseX * 0.001 : autoRotateY;

      setItems((prevItems) =>
        prevItems.map((item) => {
          // Rotate X
          const cosX = Math.cos(currentRotateX);
          const sinX = Math.sin(currentRotateX);
          const y1 = item.y * cosX - item.z * sinX;
          const z1 = item.y * sinX + item.z * cosX;

          // Rotate Y
          const cosY = Math.cos(currentRotateY);
          const sinY = Math.sin(currentRotateY);
          const x2 = item.x * cosY + z1 * sinY;
          const z2 = -item.x * sinY + z1 * cosY;

          return { ...item, x: x2, y: y1, z: z2 };
        })
      );

      // Dampen mouse offset gradually to revert to slow auto rotation
      mouseX *= 0.95;
      mouseY *= 0.95;

      animationFrame = requestAnimationFrame(updateCoordinates);
    };

    animationFrame = requestAnimationFrame(updateCoordinates);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center cursor-grab select-none active:cursor-grabbing mx-auto overflow-visible"
    >
      <div className="absolute w-28 h-28 rounded-full bg-violet-600/10 blur-xl animate-pulse" />
      <div className="absolute w-20 h-20 rounded-full bg-orange-500/10 blur-lg animate-pulse" style={{ animationDelay: "2s" }} />

      {items.map((item, idx) => {
        // Perspective projection formula
        const scale = depth / (depth - item.z);
        const alpha = (item.z + radius) / (2 * radius) * 0.6 + 0.4; // Fade background items
        
        const style = {
          position: "absolute",
          transform: `translate3d(${item.x}px, ${item.y}px, 0) scale(${scale})`,
          opacity: alpha,
          zIndex: Math.floor(scale * 100),
          transition: "transform 0.1s linear, opacity 0.1s linear",
        };

        return (
          <span
            key={idx}
            style={style}
            className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-semibold tracking-wide shadow-md whitespace-nowrap ${item.color}`}
          >
            {item.text}
          </span>
        );
      })}
    </div>
  );
};

export default SkillsSphere;
