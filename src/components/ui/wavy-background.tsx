"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface WavyBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  colors?: [string, string];
  waveHeight?: number;
  waveOpacity?: number;
}

export const WavyBackground = ({
  className,
  children,
  colors = ["#0f0c29", "#302b63"],
  waveHeight = 40,
  waveOpacity = 0.2,
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = waveOpacity;
      ctx.fillStyle = colors[0];

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i <= canvas.width; i++) {
        ctx.lineTo(
          i,
          canvas.height / 2 + Math.sin(i * 0.02 + Date.now() * 0.002) * waveHeight,
        );
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      ctx.globalAlpha = 1;
      requestAnimationFrame(drawWave);
    };

    resizeCanvas();
    drawWave();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [colors, waveHeight, waveOpacity]);

  return (
    <div className={cn("relative h-screen w-full overflow-hidden", className)}>
      <motion.canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full w-full"
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};
