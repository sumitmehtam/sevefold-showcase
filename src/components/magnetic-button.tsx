"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

import { Button } from "@/components/ui/button";

type MagneticButtonProps = ComponentPropsWithoutRef<typeof Button>;

export function MagneticButton({ children, onMouseMove, onMouseLeave, ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18 });
  const springY = useSpring(y, { stiffness: 160, damping: 18 });

  function handleMove(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
    onMouseMove?.(event);
  }

  function handleLeave(event: MouseEvent<HTMLButtonElement>) {
    x.set(0);
    y.set(0);
    onMouseLeave?.(event);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-flex">
      <Button onMouseMove={handleMove} onMouseLeave={handleLeave} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
