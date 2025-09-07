'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SaveSlot {
  id: number
  projectIndex: number
  projectTitle: string
  timestamp: string
  hasData: boolean
  section: 'projects' | 'upcoming'
}

interface SaveLoadModalProps {
  onClose: () => void
  onLoadProject: (projectIndex: number) => void
  onLoadUpcoming: (upcomingIndex: number) => void
  currentProjectIndex: number
  currentUpcomingIndex: number
  currentSection: 'projects' | 'upcoming'
}

export default function SaveLoadModal({ onClose, onLoadProject, onLoadUpcoming, currentProjectIndex, currentUpcomingIndex, currentSection }: SaveLoadModalProps) {
  const [activeTab, setActiveTab] = useState<'save' | 'load'>('save')
  const [saveSlots, setSaveSlots] = useState<SaveSlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)

  // Initialize save slots
  useEffect(() => {
    const slots: SaveSlot[] = Array.from({ length: 9 }, (_, index) => {
      const savedData = localStorage.getItem(`vn-portfolio-save-${index}`)
      if (savedData) {
        const data = JSON.parse(savedData)
        return {
          id: index,
          projectIndex: data.projectIndex,
          projectTitle: data.projectTitle,
          timestamp: data.timestamp,
          hasData: true,
          section: data.section || 'projects' // Default to projects for backward compatibility
        }
      }
      return {
        id: index,
        projectIndex: 0,
        projectTitle: '',
        timestamp: '',
        hasData: false,
        section: 'projects' as const
      }
    })
    setSaveSlots(slots)
  }, [])

  const handleSave = (slotId: number) => {
    const currentIndex = currentSection === 'projects' ? currentProjectIndex : currentUpcomingIndex
    const saveData = {
      projectIndex: currentIndex,
      projectTitle: currentSection === 'projects' ? `Project ${currentIndex + 1}` : `Upcoming Project ${currentIndex + 1}`,
      timestamp: new Date().toLocaleString(),
      savedAt: Date.now(),
      section: currentSection
    }
    
    localStorage.setItem(`vn-portfolio-save-${slotId}`, JSON.stringify(saveData))
    
    // Update the save slots state
    setSaveSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? {
            ...slot,
            projectIndex: saveData.projectIndex,
            projectTitle: saveData.projectTitle,
            timestamp: saveData.timestamp,
            hasData: true
          }
        : slot
    ))
    
    // Show success message (you could add a toast notification here)
    alert(`Project saved to slot ${slotId + 1}!`)
  }

  const handleLoad = (slotId: number) => {
    const slot = saveSlots[slotId]
    if (slot && slot.hasData) {
      if (slot.section === 'projects') {
        onLoadProject(slot.projectIndex)
      } else {
        onLoadUpcoming(slot.projectIndex)
      }
    }
  }

  const handleDelete = (slotId: number) => {
    localStorage.removeItem(`vn-portfolio-save-${slotId}`)
    setSaveSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? {
            ...slot,
            projectIndex: 0,
            projectTitle: '',
            timestamp: '',
            hasData: false
          }
        : slot
    ))
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all save slots? This action cannot be undone.')) {
      // Clear all localStorage items
      for (let i = 0; i < 9; i++) {
        localStorage.removeItem(`vn-portfolio-save-${i}`)
      }
      
      // Reset all save slots
      setSaveSlots(prev => prev.map(slot => ({
        ...slot,
        projectIndex: 0,
        projectTitle: '',
        timestamp: '',
        hasData: false
      })))
      
      alert('All save slots have been cleared!')
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="vn-textbox max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="vn-subtitle">Save / Load System</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('save')}
                             className={`px-6 py-3 rounded-xl transition-all backdrop-blur-sm ${
                 activeTab === 'save' 
                   ? 'bg-vn-text text-white shadow-lg' 
                   : 'bg-vn-secondary/30 text-vn-soft hover:bg-vn-secondary/50 border border-vn-border/30'
               }`}
            >
              Save
            </button>
            <button
              onClick={() => setActiveTab('load')}
                             className={`px-6 py-3 rounded-xl transition-all backdrop-blur-sm ${
                 activeTab === 'load' 
                   ? 'bg-vn-text text-white shadow-lg' 
                   : 'bg-vn-secondary/30 text-vn-soft hover:bg-vn-secondary/50 border border-vn-border/30'
               }`}
            >
              Load
            </button>
          </div>

          {/* Save/Load Content */}
          {activeTab === 'save' ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">Save Current Project</h3>
              <p className="text-gray-300 mb-6">
                Choose a slot to save your current progress. You can save up to 9 different project states.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {saveSlots.map((slot) => (
                  <div
                    key={slot.id}
                                         className={`border-2 rounded-xl p-4 cursor-pointer transition-all backdrop-blur-sm ${
                       selectedSlot === slot.id
                         ? 'border-vn-text/40 bg-vn-text/5 shadow-lg'
                         : 'border-vn-border/30 hover:border-vn-text/30 hover:bg-vn-accent/20'
                     }`}
                    onClick={() => setSelectedSlot(slot.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-vn-text mb-2">
                        {slot.id + 1}
                      </div>
                      {slot.hasData ? (
                        <div>
                          <div className="text-sm text-gray-300 mb-1">
                            {slot.projectTitle}
                          </div>
                          <div className="text-xs text-gray-400">
                            {slot.timestamp}
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Empty Slot
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => selectedSlot !== null && handleSave(selectedSlot)}
                  disabled={selectedSlot === null}
                  className={`vn-button ${selectedSlot === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Save to Slot {selectedSlot !== null ? selectedSlot + 1 : ''}
                </button>
                {selectedSlot !== null && saveSlots[selectedSlot].hasData && (
                  <button
                    onClick={() => selectedSlot !== null && handleDelete(selectedSlot)}
                    className="vn-button-secondary bg-red-600 hover:bg-red-700"
                  >
                    Delete Slot
                  </button>
                )}
              </div>
              
              {/* Clear All Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClearAll}
                  className="vn-button-secondary bg-red-800 hover:bg-red-900 text-red-200 hover:text-white"
                >
                  🗑️ Clear All Saves
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Load Saved Project</h3>
              <p className="text-gray-300 mb-6">
                Select a saved slot to load a previously saved project state.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {saveSlots.map((slot) => (
                  <div
                    key={slot.id}
                                         className={`border-2 rounded-xl p-4 transition-all backdrop-blur-sm ${
                       slot.hasData
                         ? 'border-vn-border/30 hover:border-vn-text/30 hover:bg-vn-accent/20 cursor-pointer'
                         : 'border-gray-600/30 opacity-50 cursor-not-allowed'
                     }`}
                    onClick={() => slot.hasData && handleLoad(slot.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-vn-text mb-2">
                        {slot.id + 1}
                      </div>
                      {slot.hasData ? (
                        <div>
                          <div className="text-sm text-gray-300 mb-1">
                            {slot.projectTitle}
                          </div>
                          <div className="text-xs text-gray-400">
                            {slot.timestamp}
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">
                          No Data
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Clear All Button for Load section */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleClearAll}
                  className="vn-button-secondary bg-red-800 hover:bg-red-900 text-red-200 hover:text-white"
                >
                  🗑️ Clear All Saves
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
