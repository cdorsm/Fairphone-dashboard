import { Button } from "@/components/ui/button"
import { Plus, FileText, Download, Lock } from "lucide-react"

export function DocumentPage() {
  const documents = [
    {
      category: "ICP & Policies",
      items: [
        { name: "Internal Compliance Program v2.1", type: "Policy", date: "2024-11-01", status: "active" },
        { name: "Supplier Screening SOP", type: "Policy", date: "2024-10-15", status: "active" },
        { name: "Export Control Procedures", type: "Policy", date: "2024-09-20", status: "active" },
      ],
    },
    {
      category: "Screening Evidence",
      items: [
        { name: "OFAC Search Results Q4 2024", type: "Report", date: "2024-11-10", status: "active" },
        { name: "EU Sanctions List Hit Analysis", type: "Report", date: "2024-11-05", status: "escalated" },
        { name: "Beneficial Ownership Verification", type: "Report", date: "2024-10-25", status: "active" },
      ],
    },
    {
      category: "Training Records",
      items: [
        { name: "Trade Compliance Training 2024", type: "Training", date: "2024-10-01", status: "active" },
        { name: "Sanctions & WWFT Awareness", type: "Training", date: "2024-09-15", status: "active" },
        { name: "Export Control for Product Managers", type: "Training", date: "2024-08-30", status: "active" },
      ],
    },
    {
      category: "Licenses & Customs",
      items: [
        { name: "EU Customs AEO Certificate", type: "License", date: "2023-06-01", status: "active" },
        { name: "HS Code Classification Rulings", type: "Reference", date: "2024-09-10", status: "active" },
        { name: "Origin Documentation Template", type: "Template", date: "2024-08-15", status: "active" },
      ],
    },
  ]

  const statusColors = {
    active: "bg-green-900/20 text-green-300",
    escalated: "bg-red-900/20 text-red-300",
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Evidence & ICP Documents</h1>
            <p className="text-slate-400 text-sm">
              Centralized repository for compliance policies, screening evidence, training records, and licenses.
            </p>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            Upload Document
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {documents.map((section, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700">
              <h3 className="text-sm font-semibold text-white">{section.category}</h3>
            </div>
            <div className="divide-y divide-slate-700">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center justify-between px-6 py-4 hover:bg-slate-800/30 group">
                  <div className="flex items-center gap-3 flex-1">
                    <FileText className="w-5 h-5 text-slate-500" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">
                        {item.type} • Updated {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 gap-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Audit Trail Info */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-slate-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Audit Trail & Compliance Records</h4>
              <p className="text-sm text-slate-400">
                All documents are version controlled with timestamps and approval workflows. Evidence is retained for
                regulatory review and audit purposes. Historical records are preserved for minimum 7 years per trade
                compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
