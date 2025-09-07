'use client'

import { motion } from 'framer-motion'
import { Section } from '../page'

interface AboutSectionProps {
  onNavigate: (section: Section) => void
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "TailwindCSS", "Next.js"] },
    { category: "Backend", items: ["Python", "Java", "FastAPI", "Supabase"] },
    { category: "AI Tools", items: ["LLMs", "Reinforcement Learning Algorithms"] },
    { category: "Hardware", items: ["Battlebots"] },
    { category: "Other", items: ["Git"] }
  ]


  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <button
            onClick={() => onNavigate('title')}
            className="vn-button-secondary"
          >
            ← Back to Menu
          </button>
          <h1 className="vn-title text-3xl">About Me</h1>
          <div className="w-32"></div> {/* Spacer for centering */}
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="vn-textbox mb-8"
        >
          <h2 className="vn-subtitle mb-6 text-4xl font-bold bg-gradient-to-r from-vn-text to-vn-light bg-clip-text text-transparent">
            Hello, I'm Bensen
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-vn-accent/20 rounded-xl p-6 border border-vn-border/30 backdrop-blur-sm">
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-vn-text mr-3">🍜</span>
                  <span className="font-medium">Wageslave at my parents' Chinese restaurant</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vn-text mr-3">🐉</span>
                  <span className="font-medium">YuGiOh Blue-Eyes Brick Dragon player (before the new structure deck)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vn-text mr-3">🤖</span>
                  <span className="font-medium">I build funny simulations and experiments using ML</span>
                </li>
                <li className="flex items-center">
                  <span className="text-vn-text mr-3">⚔️</span>
                  <span className="font-medium">I build battlebots with a team and sometimes they survive</span>
                </li>
              </ul>
              </div>
            </div>
          </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="vn-textbox mb-8"
        >
          <h2 className="vn-subtitle mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-vn-text mb-3">{skillGroup.category}</h3>
                                 <div className="space-y-2">
                   {skillGroup.items.map((skill, skillIndex) => (
                     <div
                       key={skillIndex}
                       className="bg-vn-secondary/30 text-vn-soft px-4 py-3 rounded-xl text-sm border border-vn-border/30 backdrop-blur-sm hover:bg-vn-secondary/50 transition-all duration-200"
                     >
                       {skill}
                     </div>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </motion.div>


        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="vn-textbox text-center"
        >
          <h2 className="vn-subtitle mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-6">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just have a chat about technology!
          </p>
          <div className="mb-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="vn-button-secondary inline-block"
            >
              📄 View Resume
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="vn-button"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/bensen-wang-a06499265/"
              target="_blank"
              rel="noopener noreferrer"
              className="vn-button-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sheepish-sheep?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="vn-button-secondary"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
