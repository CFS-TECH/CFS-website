"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Database, Shield, Cloud, Zap } from "lucide-react";

const icons = [Code2, Cpu, Globe, Database, Shield, Cloud, Zap];

const FloatingIconsSection = () => {
  const [randomIcons, setRandomIcons] = useState([]);

  useEffect(() => {
    // Generate 15-20 random icon instances
    const generated = Array.from({ length: icons.length }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      // Random position (percentage)
      top: Math.random() * 90 + "%",
      left: Math.random() * 90 + "%",
      // Random animation duration
      duration: Math.random() * 10 + 10,
      // Random delay
      delay: Math.random() * 5,
      // Random size
      size: Math.random() * 20 + 20,
    }));
    setRandomIcons(generated);
  }, []);

  return (
    <section className="relative w-full h-[500px]  overflow-hidden ">
      {/* Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full"></div>

      {/* Floating Icons Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {randomIcons.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 1, 1], // Fading in and out
              y: [0, -40, 0], // Floating up and down
              x: [0, 20, 0], // Slight side drift
              scale: [1, 1.5, 2],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
            }}
            className="text-blue-950"
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FloatingIconsSection;
