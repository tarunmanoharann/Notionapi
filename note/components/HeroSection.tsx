"use client";

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tagline = "Discover the best digital resources used by start-ups and companies, and get inspired.";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.0005;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      const baseColor = { r: 119, g: 78, b: 224 };
      const variation = Math.sin(time) * 15;

      const color1 = `rgb(${baseColor.r + variation}, ${baseColor.g + variation}, ${baseColor.b + variation})`;
      const color2 = `rgb(${baseColor.r - variation}, ${baseColor.g - variation}, ${baseColor.b - variation})`;

      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 text-center py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          The best resources &amp; tools used by top companies around the globe.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white h-20 animate-blink">
          {tagline}
        </p>
        <style jsx>{`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }

          .animate-blink {
            animation: blink 3s infinite; /* Adjust the duration here for a slower blink */
          }
        `}</style>
      </div>
    </section>
  );
}
