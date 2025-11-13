"use client"

import { BookOpen } from "lucide-react"

interface PageGuideProps {
  title: string
  description: string
  steps: Array<{
    number: number
    title: string
    description: string
  }>
}

export function PageGuide({ title, description, steps }: PageGuideProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-slate-300 mb-4">{description}</p>
          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-medium text-white mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
