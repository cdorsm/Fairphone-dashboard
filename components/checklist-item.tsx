interface ChecklistItemProps {
  label: string
  description: string
  completed: boolean
  priority?: "high" | "medium" | "low"
}

export function ChecklistItem({ label, description, completed, priority }: ChecklistItemProps) {
  const priorityColors = {
    high: "border-red-700",
    medium: "border-yellow-700",
    low: "border-slate-700",
  }

  return (
    <div
      className={`flex gap-3 p-3 bg-slate-800 border rounded-lg ${completed ? "border-green-700" : priorityColors[priority || "low"]}`}
    >
      <div className="flex-shrink-0 mt-1">
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${completed ? "bg-green-600 border-green-500" : "border-slate-600"}`}
        >
          {completed && <span className="text-white text-xs">✓</span>}
        </div>
      </div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${completed ? "text-slate-400 line-through" : "text-white"}`}>{label}</p>
        <p className="text-xs text-slate-400 mt-1">{description}</p>
      </div>
    </div>
  )
}
