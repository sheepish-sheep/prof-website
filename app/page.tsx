'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TitleScreen from './components/TitleScreen'
import ProjectsSection from './components/ProjectsSection'
import UpcomingSection from './components/UpcomingSection'
import AboutSection from './components/AboutSection'
import SaveLoadModal from './components/SaveLoadModal'
import SnowBackground from './components/SnowBackground'

export type Section = 'title' | 'projects' | 'upcoming' | 'about'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('title')
  const [showSaveLoad, setShowSaveLoad] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0)

  const handleNavigation = (section: Section) => {
    setCurrentSection(section)
  }

  const handleSaveLoad = () => {
    setShowSaveLoad(true)
  }

  const handleCloseSaveLoad = () => {
    setShowSaveLoad(false)
  }

  const handleLoadProject = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentSection('projects')
    setShowSaveLoad(false)
  }

  const handleLoadUpcoming = (upcomingIndex: number) => {
    setCurrentUpcomingIndex(upcomingIndex)
    setCurrentSection('upcoming')
    setShowSaveLoad(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-vn-bg via-vn-bg-light to-vn-accent-light relative overflow-hidden">
      {/* Snow-like falling spheres */}
      <SnowBackground />
      <AnimatePresence mode="wait">
        {currentSection === 'title' && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TitleScreen onNavigate={handleNavigation} onSaveLoad={handleSaveLoad} />
          </motion.div>
        )}

        {currentSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectsSection
              currentIndex={currentProjectIndex}
              onIndexChange={setCurrentProjectIndex}
              onNavigate={handleNavigation}
              onSaveLoad={handleSaveLoad}
            />
          </motion.div>
        )}

        {currentSection === 'upcoming' && (
          <motion.div
            key="upcoming"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <UpcomingSection 
              onNavigate={handleNavigation} 
              onSaveLoad={handleSaveLoad}
              currentIndex={currentUpcomingIndex}
              onIndexChange={setCurrentUpcomingIndex}
            />
          </motion.div>
        )}

        {currentSection === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AboutSection onNavigate={handleNavigation} />
          </motion.div>
        )}
      </AnimatePresence>

      {showSaveLoad && (
        <SaveLoadModal
          onClose={handleCloseSaveLoad}
          onLoadProject={handleLoadProject}
          onLoadUpcoming={handleLoadUpcoming}
          currentProjectIndex={currentProjectIndex}
          currentUpcomingIndex={currentUpcomingIndex}
          currentSection={currentSection === 'projects' ? 'projects' : 'upcoming'}
        />
      )}
    </main>
  )
}
