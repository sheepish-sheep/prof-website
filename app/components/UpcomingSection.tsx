'use client'

import { motion } from 'framer-motion'
import { Section } from '../page'

interface UpcomingProject {
  id: number
  title: string
  description: string
  progress: number
  estimatedCompletion: string
  technologies: string[]
  status: 'planning' | 'in-progress' | 'testing'
  githubUrl: string
}

interface UpcomingSectionProps {
  onNavigate: (section: Section) => void
  onSaveLoad: () => void
  currentIndex: number
  onIndexChange: (index: number) => void
}

// Future projects data
const upcomingProjects: UpcomingProject[] = [
  {
    id: 1,
    title: "Drawing Assistant",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["Python", "LLMs", "OpenAI API"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/drawing-assistant-repo"
  },
  {
    id: 2,
    title: "Sidequest App",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/sidequest-app-repo"
  },
  {
    id: 3,
    title: "Agent Art Gallery",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["Python", "LLMs", "FastAPI"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/agent-art-gallery-repo"
  },
  {
    id: 4,
    title: "YuGiOh Assistant",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["Python", "LLMs", "Web Scraping"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/yugioh-assistant-repo"
  },
  {
    id: 5,
    title: "AI TABS",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["Python", "LLMs", "Machine Learning"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/ai-tabs-repo"
  },
  {
    id: 6,
    title: "Neural Net Fighting Game",
    description: "Coming soon...",
    progress: 0,
    estimatedCompletion: "TBD",
    technologies: ["Python", "Reinforcement Learning Algorithms", "Neural Networks"],
    status: "planning",
    githubUrl: "https://github.com/sheepish-sheep/neural-net-fighting-game-repo"
  }
]

export default function UpcomingSection({ onNavigate, onSaveLoad, currentIndex, onIndexChange }: UpcomingSectionProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-500'
      case 'in-progress': return 'bg-blue-500'
      case 'testing': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'planning': return 'Planning'
      case 'in-progress': return 'In Progress'
      case 'testing': return 'Testing'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
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
          <h1 className="vn-title text-3xl">Upcoming Projects</h1>
          <button
            onClick={onSaveLoad}
            className="vn-button"
          >
            💾 Save/Load
          </button>
        </motion.div>

        {/* Current Project Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="vn-textbox p-8 max-w-4xl mx-auto"
        >
          {(() => {
            const project = upcomingProjects[currentIndex]
            return (
              <>
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-vn-text mb-2">{project.title}</h2>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Project {currentIndex + 1} of {upcomingProjects.length}</div>
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold">Estimated:</span> {project.estimatedCompletion}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-vn-text">Development Progress</h3>
                    <span className="text-2xl font-bold text-vn-text">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-vn-secondary/20 rounded-full h-4 border border-vn-border/20">
                    <motion.div
                      className="h-4 rounded-full transition-all duration-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      style={{ 
                        background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
                      }}
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-vn-text mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-vn-secondary/30 text-vn-soft px-4 py-2 rounded-full text-sm border border-vn-border/30 hover:bg-vn-secondary/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="mb-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vn-button inline-block"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-vn-border/30">
                  <button
                    onClick={() => onIndexChange(currentIndex > 0 ? currentIndex - 1 : upcomingProjects.length - 1)}
                    className="vn-button-secondary"
                    disabled={upcomingProjects.length <= 1}
                  >
                    ← Previous
                  </button>
                  
                  <div className="flex space-x-2">
                    {upcomingProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => onIndexChange(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentIndex 
                            ? 'bg-vn-text' 
                            : 'bg-vn-border/50 hover:bg-vn-border'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onIndexChange(currentIndex < upcomingProjects.length - 1 ? currentIndex + 1 : 0)}
                    className="vn-button-secondary"
                    disabled={upcomingProjects.length <= 1}
                  >
                    Next →
                  </button>
                </div>
              </>
            )
          })()}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 vn-textbox"
        >
          <h3 className="vn-subtitle mb-4">Stay Tuned!</h3>
          <p className="text-gray-300">
            These projects are currently in development. Follow my progress and get notified when they're ready for release.
            Each project represents a new learning opportunity and a step forward in my development journey.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
