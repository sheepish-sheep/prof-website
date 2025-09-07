'use client'

import { motion } from 'framer-motion'

export default function FloatingBackground() {
  // Falling elements with different speeds and delays
  const fallingElements = [
    { id: 1, type: 'leaf', size: 'w-4 h-4', delay: 0, duration: 15, x: '10%' },
    { id: 2, type: 'blossom', size: 'w-6 h-6', delay: 2, duration: 20, x: '25%' },
    { id: 3, type: 'leaf', size: 'w-3 h-3', delay: 4, duration: 18, x: '40%' },
    { id: 4, type: 'blossom', size: 'w-5 h-5', delay: 1, duration: 16, x: '55%' },
    { id: 5, type: 'leaf', size: 'w-4 h-4', delay: 3, duration: 22, x: '70%' },
    { id: 6, type: 'blossom', size: 'w-7 h-7', delay: 5, duration: 25, x: '85%' },
    { id: 7, type: 'leaf', size: 'w-3 h-3', delay: 1.5, duration: 14, x: '15%' },
    { id: 8, type: 'blossom', size: 'w-5 h-5', delay: 3.5, duration: 19, x: '35%' },
    { id: 9, type: 'leaf', size: 'w-4 h-4', delay: 2.5, duration: 17, x: '60%' },
    { id: 10, type: 'blossom', size: 'w-6 h-6', delay: 4.5, duration: 21, x: '80%' },
    { id: 11, type: 'leaf', size: 'w-3 h-3', delay: 0.5, duration: 13, x: '45%' },
    { id: 12, type: 'blossom', size: 'w-5 h-5', delay: 2.8, duration: 16, x: '65%' },
    { id: 13, type: 'leaf', size: 'w-4 h-4', delay: 6, duration: 18, x: '20%' },
    { id: 14, type: 'blossom', size: 'w-6 h-6', delay: 7, duration: 23, x: '50%' },
    { id: 15, type: 'leaf', size: 'w-3 h-3', delay: 8, duration: 15, x: '75%' },
  ]

  const getElementStyle = (type: string) => {
    if (type === 'leaf') {
      return {
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5) 0%, rgba(96, 165, 250, 0.4) 100%)',
        borderRadius: '50% 0% 50% 0%',
        transform: 'rotate(45deg)',
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
      }
    } else {
      return {
        background: 'linear-gradient(45deg, rgba(96, 165, 250, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(147, 197, 253, 0.5) 100%)',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(96, 165, 250, 0.4)',
      }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Enhanced gradient overlay with blue undertones */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 60%), 
                         radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.3) 0%, transparent 60%),
                         radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.2) 0%, transparent 60%),
                         radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 70% 30%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)`,
            backgroundSize: '800px 800px, 1000px 1000px, 600px 600px, 500px 500px, 400px 400px'
          }}
        />
      </div>

      {/* Falling leaves and blossoms */}
      {fallingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} opacity-80`}
          style={{
            left: element.x,
            ...getElementStyle(element.type)
          }}
          animate={{
            y: ['-100vh', '100vh'],
            rotate: [0, 720],
            x: [0, Math.random() * 30 - 15],
            scale: [1, 0.8, 1.1, 0.9],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}

      {/* Gentle floating orbs with blue tones */}
      <motion.div
        className="absolute w-40 h-40 rounded-full opacity-30"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.2) 100%)',
          left: '10%',
          top: '30%',
        }}
        animate={{
          y: [-40, 40, -40],
          x: [-30, 30, -30],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-25"
        style={{
          background: 'linear-gradient(45deg, rgba(96, 165, 250, 0.4) 0%, rgba(147, 197, 253, 0.3) 100%)',
          right: '15%',
          top: '60%',
        }}
        animate={{
          y: [30, -30, 30],
          x: [20, -20, 20],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute w-28 h-28 rounded-full opacity-35"
        style={{
          background: 'linear-gradient(45deg, rgba(147, 197, 253, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(191, 219, 254, 0.2) 100%)',
          left: '60%',
          top: '20%',
        }}
        animate={{
          y: [-35, 35, -35],
          x: [-25, 25, -25],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Additional smaller orbs */}
      <motion.div
        className="absolute w-20 h-20 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.15) 100%)',
          left: '80%',
          top: '40%',
        }}
        animate={{
          y: [25, -25, 25],
          x: [15, -15, 15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12,
        }}
      />

      {/* Enhanced sparkles with blue and purple colors */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 
              ? 'rgba(59, 130, 246, 0.7)' 
              : i % 3 === 1 
              ? 'rgba(96, 165, 250, 0.7)'
              : 'rgba(139, 92, 246, 0.6)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6,
          }}
        />
      ))}
    </div>
  )
}
