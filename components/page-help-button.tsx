"use client"

import { useState } from "react"
import { HelpCircle, X } from "lucide-react"

interface PageHelpButtonProps {
  pageId: string
  sections: Array<{
    heading: string
    content: string
  }>
}

export function PageHelpButton({ pageId, sections }: PageHelpButtonProps) {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Show help"
        title="Quick guide for this page"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      {showHelp && (
        <div className="fixed bottom-20 right-6 bg-slate-900 border border-slate-800 rounded-lg shadow-xl z-40 max-w-sm">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-semibold text-white">Page Guide</h3>
            <button onClick={() => setShowHelp(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-green-400 text-sm mb-1">{section.heading}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
