import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export function ShipmentPage() {
  const shipments = [
    {
      shipmentId: "FP-2024-001",
      route: "CN → NL",
      supplier: "EMS Partner (CN)",
      product: "Fairphone 5",
      status: "cleared",
      value: "$250,000",
      date: "2024-11-10",
    },
    {
      shipmentId: "FP-2024-002",
      route: "TW → EU",
      supplier: "Component Mfg",
      product: "Display Modules",
      status: "in-transit",
      value: "$85,000",
      date: "2024-11-08",
    },
    {
      shipmentId: "FP-2024-003",
      route: "DE → UK",
      supplier: "Logistics Hub",
      product: "Spare Parts",
      status: "review",
      value: "$45,000",
      date: "2024-11-05",
    },
    {
      shipmentId: "FP-2024-004",
      route: "CN → DE",
      supplier: "Raw Materials",
      product: "Electronics",
      status: "hold",
      value: "$180,000",
      date: "2024-11-01",
    },
  ]

  const statusMap = {
    cleared: "green" as const,
    "in-transit": "blue" as const,
    review: "yellow" as const,
    hold: "red" as const,
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Shipments & Trade Flows</h1>
            <p className="text-slate-400 text-sm">
              Track shipments, verify compliance, and monitor trade flows across all routes.
            </p>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            New Shipment
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search shipments..."
              className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="border border-slate-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 bg-slate-800/50 px-4 py-3 text-xs font-semibold text-slate-300 uppercase tracking-wide gap-4">
            <div>Shipment ID</div>
            <div>Route</div>
            <div>Product</div>
            <div>Value</div>
            <div>Status</div>
            <div>Date</div>
          </div>
          <div className="divide-y divide-slate-700">
            {shipments.map((shipment, idx) => (
              <div key={idx} className="grid grid-cols-6 px-4 py-3 hover:bg-slate-800/30 gap-4 text-sm">
                <div className="font-mono text-white">{shipment.shipmentId}</div>
                <div className="text-slate-300">{shipment.route}</div>
                <div>
                  <p className="text-white">{shipment.product}</p>
                  <p className="text-xs text-slate-400">{shipment.supplier}</p>
                </div>
                <div className="text-slate-300">{shipment.value}</div>
                <div>
                  <StatusBadge status={statusMap[shipment.status]} label={shipment.status.replace("-", " ")} />
                </div>
                <div className="text-slate-400">{shipment.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-white mb-3">Trade Compliance Checks</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ Supplier sanctions screening verified</li>
              <li>✓ Product classification confirmed</li>
              <li>✓ End-use statement on file</li>
              <li>✓ Country of origin documented</li>
              <li>✓ Customs declarations ready</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-white mb-3">Escalation Criteria</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>→ Route to/from sanctioned jurisdiction</li>
              <li>→ Product with ECCN &gt; 3A/3D</li>
              <li>→ Supplier screening expired</li>
              <li>→ Value &gt; threshold for region</li>
              <li>→ RMA or reverse logistics flow</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
