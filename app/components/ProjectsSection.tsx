'use client'

import { motion } from 'framer-motion'
import { Section } from '../page'

interface Project {
  id: number
  title: string
  description: string
  githubUrl: string
  technologies: string[]
  status: 'completed' | 'in-progress'
  imageUrl?: string
  imageAlt?: string
}

interface ProjectsSectionProps {
  currentIndex: number
  onIndexChange: (index: number) => void
  onNavigate: (section: Section) => void
  onSaveLoad: () => void
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Virus Simulation",
    description: "A LM simulation of an ultra-quickly evolving virus",
    githubUrl: "https://github.com/sheepish-sheep/Virus-Simulation",
    technologies: ["Python", "Machine Learning", "Pygame", "Matplotlib"],
    status: "completed",
    imageUrl: "/assets/Virus Sim.png",
    imageAlt: "Visualization of virus evolution simulation"
  },
  {
    id: 2,
    title: "Theory Bot",
    description: "AI theory exploration system",
    githubUrl: "https://github.com/sheepish-sheep/Theory-Bot",
    technologies: ["FastAPI", "Python", "LLMs", "TailwindCSS", "HTML"],
    status: "completed",
    imageUrl: "/assets/Theory bot.png",
    imageAlt: "Theory Bot AI system interface"
  },
  {
    id: 3,
    title: "Roami",
    description: "AI roadtrip assistant",
    githubUrl: "https://devpost.com/software/roami",
    technologies: ["LLMs", "Moondream"],
    status: "completed",
    imageUrl: "/assets/Roami.jpg",
    imageAlt: "Roami AI travel assistant interface"
  },
  {
    id: 4,
    title: "Romaji Lyrics Finder",
    description: "A single-file application that creates a popup interface for scraping romaji (romanized Japanese) lyrics from anime songs with optional AI verification",
    githubUrl: "https://github.com/sheepish-sheep/Romaji-Lyrics-Finder",
    technologies: ["Python", "Web Scraping", "GUI", "OpenAI API"],
    status: "completed",
    imageUrl: "/assets/Romaji-Lyrics-Finder.png",
    imageAlt: "Romaji Lyrics Finder application interface"
  },
  {
    id: 5,
    title: "Website",
    description: "Hobby website",
    githubUrl: "https://bensenwang.dev/",
    technologies: ["HTML", "Javascript", "CSS"],
    status: "completed",
    imageUrl: "/assets/Website.png",
    imageAlt: "Screenshot of Bensen's portfolio website"
  }
]

export default function ProjectsSection({ 
  currentIndex, 
  onIndexChange, 
  onNavigate, 
  onSaveLoad 
}: ProjectsSectionProps) {
  const currentProject = projects[currentIndex]

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      onIndexChange(currentIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Top Row - Back Button and Save/Load */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => onNavigate('title')}
              className="vn-button-secondary px-6 py-3"
            >
              ← Back to Menu
            </button>
            <div className="flex space-x-3">
              <button
                onClick={onSaveLoad}
                className="vn-button-secondary px-6 py-3"
              >
                Save
              </button>
              <button
                onClick={onSaveLoad}
                className="vn-button-secondary px-6 py-3"
              >
                Load
              </button>
            </div>
          </div>
          
          {/* Title Row - Centered */}
          <div className="text-center">
            <h1 className="vn-title text-6xl">Projects</h1>
          </div>
        </motion.div>

        {/* Project Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="vn-textbox mb-8"
        >
          {/* Project Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="vn-subtitle text-3xl mb-2">{currentProject.title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-vn-text to-vn-light rounded-full"></div>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentProject.status === 'completed' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {currentProject.status}
            </span>
          </div>
          
          {/* Project Description */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentProject.description}
            </p>
          </div>

          {/* Project Image */}
          {currentProject.imageUrl && (
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden border border-vn-border/30 bg-vn-secondary/10 p-6">
                <img
                  src={currentProject.imageUrl}
                  alt={currentProject.imageAlt || `${currentProject.title} project screenshot`}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-center text-gray-400 py-12 text-lg">Image coming soon...</div>';
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-vn-text text-center">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {currentProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-vn-secondary/30 text-vn-soft px-4 py-2 rounded-full text-sm border border-vn-border/30 backdrop-blur-sm hover:bg-vn-secondary/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vn-button inline-block px-8 py-4 text-lg"
            >
              {currentProject.githubUrl.includes('devpost.com') ? 'View on DevPost →' : 
               currentProject.githubUrl.includes('bensenwang.dev') ? 'View Live Site →' : 'View on GitHub →'}
            </a>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="mt-8">
          {/* Project Counter */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-vn-accent/20 px-6 py-3 rounded-full border border-vn-border/30">
              <span className="text-vn-text font-semibold text-lg">Project {currentIndex + 1}</span>
              <span className="text-gray-400">of</span>
              <span className="text-vn-soft font-semibold text-lg">{projects.length}</span>
            </div>
          </div>

          {/* Navigation Row - Inline with content */}
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`vn-button-secondary px-6 py-3 transition-all duration-200 ${
                currentIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              className={`vn-button-secondary px-6 py-3 transition-all duration-200 ${
                currentIndex === projects.length - 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
