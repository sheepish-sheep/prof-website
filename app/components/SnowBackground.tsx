'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function SnowBackground() {
  const [screenHeight, setScreenHeight] = useState(800) // Default fallback height
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set the actual screen height on client side
    setScreenHeight(window.innerHeight)
    setIsClient(true)
  }, [])

  // Memoize particles to prevent recreation on every render
  const snowParticles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 6, // 6-16px (slightly smaller for performance)
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 12, // 12-20 seconds
      x: Math.random() * 100, // Random horizontal position
      opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0 opacity
      color: Math.random() > 0.5 ? 'blue' : 'purple', // Random blue or purple
      drift: Math.random() * 40 - 20, // Reduced drift for performance
    })), []
  )

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Optimized falling snow particles */}
      {snowParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: '-20px',
            background: particle.color === 'blue' 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(96, 165, 250, 0.6) 50%, rgba(147, 197, 253, 0.4) 100%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(167, 139, 250, 0.6) 50%, rgba(196, 181, 253, 0.4) 100%)',
            boxShadow: particle.color === 'blue'
              ? '0 0 15px rgba(59, 130, 246, 0.5)'
              : '0 0 15px rgba(139, 92, 246, 0.5)',
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, screenHeight + 30], // Go fully off screen
            x: [0, particle.drift],
            rotate: [0, 360], // Reduced rotation for performance
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Optimized floating orbs - fewer and simpler */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${40 + i * 10}px`, // Fixed sizes for better performance
            height: `${40 + i * 10}px`,
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.2) 100%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(167, 139, 250, 0.2) 100%)',
            boxShadow: i % 2 === 0
              ? '0 0 20px rgba(59, 130, 246, 0.3)'
              : '0 0 20px rgba(139, 92, 246, 0.3)',
            opacity: 0.25,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Reduced sparkles for performance */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${10 + i * 10}%`,
            background: i % 3 === 0 
              ? 'rgba(59, 130, 246, 0.7)' 
              : i % 3 === 1 
              ? 'rgba(96, 165, 250, 0.7)'
              : 'rgba(139, 92, 246, 0.6)',
            boxShadow: i % 3 === 0
              ? '0 0 8px rgba(59, 130, 246, 0.5)'
              : i % 3 === 1
              ? '0 0 8px rgba(96, 165, 250, 0.5)'
              : '0 0 8px rgba(139, 92, 246, 0.5)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
