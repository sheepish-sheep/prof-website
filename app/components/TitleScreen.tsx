'use client'

import { motion } from 'framer-motion'
import { Section } from '../page'

interface TitleScreenProps {
  onNavigate: (section: Section) => void
  onSaveLoad: () => void
}

export default function TitleScreen({ onNavigate, onSaveLoad }: TitleScreenProps) {
  const menuItems = [
    { label: 'Projects', section: 'projects' as Section, description: 'View my completed projects', action: 'navigate' },
    { label: 'Load', section: 'projects' as Section, description: 'Load a save state', action: 'saveLoad' },
    { label: 'Upcoming', section: 'upcoming' as Section, description: 'See what I\'m working on next', action: 'navigate' },
    { label: 'About', section: 'about' as Section, description: 'Learn more about me', action: 'navigate' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="vn-title">Bense's Website</h1>
      </motion.div>

      {/* Main Navigation - Large, Clean Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl"
      >
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
              onClick={() => {
                if (item.action === 'saveLoad') {
                  onSaveLoad()
                } else {
                  onNavigate(item.section)
                }
              }}
              className="vn-button p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300 min-h-[120px] flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.label === 'Projects' && '🚀'}
                {item.label === 'Load' && '💾'}
                {item.label === 'Upcoming' && '⏳'}
                {item.label === 'About' && '👤'}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{item.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Subtle Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-12 text-center text-gray-400"
      >
        <p className="text-sm">
          Click any option to begin your journey
        </p>
      </motion.div>
    </div>
  )
}
