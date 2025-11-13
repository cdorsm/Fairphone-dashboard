import { Button } from "@/components/ui/button"
import { Plus, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { ChecklistItem } from "@/components/checklist-item"

export function TasksPage() {
  const tasks = [
    {
      label: "U.S. expansion scenario analysis",
      description: "Assess EAR exposure, partner routes (e.g. Murena), licence needs.",
      completed: false,
      priority: "high" as const,
    },
    {
      label: "ICP draft & training modules",
      description: "Fairphone trade compliance specialist onboarded & trained.",
      completed: false,
      priority: "high" as const,
    },
    {
      label: "Navigator pilot go-live",
      description: "Suppliers, products, shipments and ESG checks integrated into one tool.",
      completed: false,
      priority: "high" as const,
    },
    {
      label: "Q1 2026 compliance baseline",
      description: "Achieve 95% supplier screening, 90% product classification, complete training.",
      completed: false,
      priority: "medium" as const,
    },
    {
      label: "Annual sanctions list update",
      description: "Review and update against latest EU/US/UK sanctions lists.",
      completed: false,
      priority: "medium" as const,
    },
  ]

  const completedTasks = [
    {
      label: "Core supplier list validated",
      description: "Top 80% of volume mapped with legal entities and ownership.",
      completed: true,
    },
    {
      label: "Basic trade flows documented",
      description: "CN → EU/UK/CH/NO sales, repair & RMA routes identified.",
      completed: true,
    },
  ]

  return (
    <main className="flex-1 overflow-auto">
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Compliance Tasks</h1>
            <p className="text-slate-400 text-sm">
              Manage compliance actions, training requirements, and audit preparations.
            </p>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            New Task
          </Button>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span>3 high priority</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>2 medium priority</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>2 completed</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Open Tasks */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Open Tasks</h2>
          <div className="space-y-3">
            {tasks.map((task, idx) => (
              <ChecklistItem key={idx} {...task} />
            ))}
          </div>
        </div>

        {/* Completed Tasks */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Completed Tasks</h2>
          <div className="space-y-3">
            {completedTasks.map((task, idx) => (
              <ChecklistItem key={idx} {...task} />
            ))}
          </div>
        </div>

        {/* Training Requirements */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Training Requirements</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2">8 of 14 completed</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "57%" }}></div>
              </div>
              <p className="text-xs text-slate-400">Trade compliance fundamentals</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2">6 of 14 completed</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "43%" }}></div>
              </div>
              <p className="text-xs text-slate-400">Sanctions & WWFT screening</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
