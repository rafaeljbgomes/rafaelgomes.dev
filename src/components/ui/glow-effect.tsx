"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowEffect({
  children,
  className,
  glowColor,
  ...props
}: GlowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn("group/glow relative", className)}
      style={{
        ...props.style,
        ...(glowColor ? { "--glow-color": glowColor } : {}),
      } as React.CSSProperties}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 select-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--glow-color, rgba(23, 76, 127, 0.045)), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}
