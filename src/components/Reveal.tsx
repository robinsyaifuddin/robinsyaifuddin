"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  cascade?: boolean;
}

// Cubic bezier physics: smooth snap and soft settle without robotic bounce
const TACTILE_EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 18,
  duration = 0.45,
  className = "",
  ...props
}: RevealProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
        margin: "0px 0px -20px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: TACTILE_EASE,
      }}
      style={{ willChange: "opacity, transform" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
