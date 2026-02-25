"use client";

import { motion, useInView } from "framer-motion";

import { useMemo, useRef } from "react";
import { ANIMATION_VARIANTS } from "./animationData";

// Reusable scroll animation component
export function ScrollAnimation({
  children,
  variant = "fadeUp",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: keyof typeof ANIMATION_VARIANTS;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const variants = useMemo(() => {
    const baseVariant = ANIMATION_VARIANTS[variant];

    return {
      ...baseVariant,
      visible: {
        ...baseVariant.visible,
        transition: {
          ...baseVariant.visible.transition,
          delay,
        },
      },
    };
  }, [variant, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
