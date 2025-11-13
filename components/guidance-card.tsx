"use client"

import { X, HelpCircle, CheckCircle2, AlertCircle } from "lucide-react"
import { useGuidance } from "@/components/context/guidance-context"

interface GuidanceCardProps {
  id: string
  title: string
  description: string
  tips: string[]
  actionText?: string
  onAction?: () => void
  type?: "info" | "warning" | "success"
  dismissible?: boolean
}

export function GuidanceCard({
  id,
  title,
  description,
  tips,
  actionText,
  onAction,
  type = "info",
  dismissible = true,
}: GuidanceCardProps) {
  const { dismissGuide, dismissedGuides } = useGuidance()

  if (dismissedGuides.has(id)) {
    return null
  }

  const bgColor =
    type === "warning"
      ? "bg-amber-600/20 border-amber-600/50"
      : type === "success"
        ? "bg-green-600/20 border-green-600/50"
        : "bg-blue-600/20 border-blue-600/50"

  const iconColor = type === "warning" ? "text-amber-400" : type === "success" ? "text-green-400" : "text-blue-400"

  const Icon = type === "warning" ? AlertCircle : type === "success" ? CheckCircle2 : HelpCircle

  return (
    <div className={`rounded-lg border ${bgColor} p-4 mb-4`} role="region" aria-label={`Guidance: ${title}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-slate-300 text-sm mb-3">{description}</p>
            <ul className="space-y-1 mb-3">
              {tips.map((tip, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            {actionText && onAction && (
              <button
                onClick={onAction}
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                {actionText} →
              </button>
            )}
          </div>
        </div>
        {dismissible && (
          <button
            onClick={() => dismissGuide(id)}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Dismiss guidance"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
