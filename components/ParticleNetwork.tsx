'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 50;
const MAX_CONNECTION_DIST = 150;
const SPEED = 0.3;
const EMERALD = '16, 185, 129';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function createParticle(width: number, height: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * SPEED,
    vy: Math.sin(angle) * SPEED,
    radius: randomBetween(0.5, 2.5),
    opacity: randomBetween(0.05, 0.35),
  };
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particles.length === 0) {
        particles = Array.from({ length: PARTICLE_COUNT }, () =>
          createParticle(canvas.width, canvas.height)
        );
      }
    };

    const wrapParticle = (p: Particle) => {
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        wrapParticle(p);
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_CONNECTION_DIST) {
            const alpha = 0.03 * (1 - dist / MAX_CONNECTION_DIST);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${EMERALD}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${EMERALD}, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
