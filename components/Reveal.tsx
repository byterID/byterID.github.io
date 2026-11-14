"use client";

import { motion, useReducedMotion } from "framer-motion";

const hidden = { opacity: 0, filter: "blur(10px)" };
const shown = { opacity: 1, filter: "blur(0px)" };

/**
 * Fades an element in from opacity 0 + blur, as in the reference.
 * With prefers-reduced-motion there is no animation: globals.css forces
 * [data-reveal] visible, and the transition here has zero duration.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      data-reveal=""
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
