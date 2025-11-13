interface KPICardProps {
  label: string
  value: string | number
  trend?: string
  trendColor?: "green" | "yellow" | "red"
  tag?: string
}

export function KPICard({ label, value, trend, trendColor = "green", tag }: KPICardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 flex flex-col gap-2">
      <p className="text-xs text-slate-400">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-bold text-white">{value}</p>
        {trend && (
          <p
            className={`text-xs ${trendColor === "green" ? "text-green-400" : trendColor === "yellow" ? "text-yellow-400" : "text-red-400"}`}
          >
            {trend}
          </p>
        )}
      </div>
      {tag && <p className="text-xs text-slate-500">{tag}</p>}
    </div>
  )
}
