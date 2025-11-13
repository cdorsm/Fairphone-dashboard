interface TimelineItemProps {
  number: number
  label: string
  description: string
  status?: "completed" | "in-progress" | "pending"
}

export function TimelineItem({ number, label, description, status }: TimelineItemProps) {
  const statusColors = {
    completed: "bg-green-600 text-white",
    "in-progress": "bg-blue-600 text-white",
    pending: "bg-slate-700 text-slate-300",
  }

  return (
    <div className="flex gap-4 items-start">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${statusColors[status || "pending"]}`}
      >
        {number}
      </div>
      <div className="flex-1 pt-0.5">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-sm text-slate-400 mt-1">{description}</p>
      </div>
    </div>
  )
}
