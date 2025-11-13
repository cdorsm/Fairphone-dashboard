"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface GuidanceContextType {
  activeTour: string | null
  startTour: (pageId: string) => void
  endTour: () => void
  dismissedGuides: Set<string>
  dismissGuide: (guideId: string) => void
  showGuidance: boolean
  setShowGuidance: (show: boolean) => void
}

const GuidanceContext = createContext<GuidanceContextType | undefined>(undefined)

export function GuidanceProvider({ children }: { children: ReactNode }) {
  const [activeTour, setActiveTour] = useState<string | null>(null)
  const [dismissedGuides, setDismissedGuides] = useState(new Set<string>())
  const [showGuidance, setShowGuidance] = useState(true)

  const startTour = (pageId: string) => {
    setActiveTour(pageId)
  }

  const endTour = () => {
    setActiveTour(null)
  }

  const dismissGuide = (guideId: string) => {
    setDismissedGuides((prev) => new Set(prev).add(guideId))
  }

  return (
    <GuidanceContext.Provider
      value={{
        activeTour,
        startTour,
        endTour,
        dismissedGuides,
        dismissGuide,
        showGuidance,
        setShowGuidance,
      }}
    >
      {children}
    </GuidanceContext.Provider>
  )
}

export function useGuidance() {
  const context = useContext(GuidanceContext)
  if (!context) {
    throw new Error("useGuidance must be used within GuidanceProvider")
  }
  return context
}
