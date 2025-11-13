interface ScreeningRow {
  supplier: string
  region: string
  status: "green" | "yellow" | "red"
  statusLabel: string
  lastChecked: string
}

interface ScreeningTableProps {
  rows: ScreeningRow[]
  title?: string
}

export function ScreeningTable({ rows, title }: ScreeningTableProps) {
  const statusColors = {
    green: "bg-green-900/20 text-green-300 border-green-700",
    yellow: "bg-yellow-900/20 text-yellow-300 border-yellow-700",
    red: "bg-red-900/20 text-red-300 border-red-700",
  }

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 text-sm font-semibold text-white">{title}</div>
      )}
      <div className="divide-y divide-slate-700">
        <div className="grid grid-cols-4 bg-slate-800/50 px-4 py-3 text-xs font-semibold text-slate-300 uppercase tracking-wide gap-4">
          <div>Supplier / Partner</div>
          <div>Region</div>
          <div>Status</div>
          <div>Last Checked</div>
        </div>
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-4 px-4 py-3 hover:bg-slate-800/30 gap-4 text-sm">
            <div className="text-slate-100 font-medium">{row.supplier}</div>
            <div className="text-slate-300">{row.region}</div>
            <div>
              <span
                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[row.status]}`}
              >
                {row.statusLabel}
              </span>
            </div>
            <div className="text-slate-400">{row.lastChecked}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
