import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  scale: number;
  targetScale: number;
}

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.3;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: Star[] = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 4,
        opacity: Math.random() * 0.9 + 0.3,
        scale: 1,
        targetScale: Math.random() * 0.8 + 0.5
      });
    }



    const drawStar = (star: Star) => {
      ctx.save();
      ctx.translate(star.x, star.y);
      ctx.scale(star.scale, star.scale);

      ctx.beginPath();
      ctx.arc(0, 0, star.size * 1.5, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, star.size * 1.5);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Центральная точка
      ctx.beginPath();
      ctx.arc(0, 0, star.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();

      // Лучики (4 луча)
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(-star.size, 0);
        ctx.lineTo(star.size, 0);
        ctx.lineWidth = star.size * 0.1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.7})`;
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.scale += (star.targetScale - star.scale) * 0.07;

        if (Math.abs(star.scale - star.targetScale) < 0.02) {
          star.targetScale = Math.random() * 0.5 + 0.8;
        }

        drawStar(star);
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '30%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default Stars;