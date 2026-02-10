"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 12 + Math.random() * 24,
      opacity: 0.3 + Math.random() * 0.4,
    }))
    setHearts(initialHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity, 0.5);
          }
          90% {
            opacity: var(--opacity, 0.5);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}
