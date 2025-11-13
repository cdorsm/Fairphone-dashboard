interface StatusBadgeProps {
  status: "green" | "yellow" | "red" | "blue"
  label: string
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const colors = {
    green: "bg-green-900/30 border-green-700 text-green-300",
    yellow: "bg-yellow-900/30 border-yellow-700 text-yellow-300",
    red: "bg-red-900/30 border-red-700 text-red-300",
    blue: "bg-blue-900/30 border-blue-700 text-blue-300",
  }

  const dots = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${colors[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status]}`}></span>
      {label}
    </span>
  )
}
