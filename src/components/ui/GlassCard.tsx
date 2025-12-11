"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover3D = false,
}: GlassCardProps) {
  if (hover3D) {
    return (
      <motion.div
        className={`glass-card glass-card-hover ${className}`}
        whileHover={{
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`glass-card glass-card-hover ${className}`}>{children}</div>
  );
}