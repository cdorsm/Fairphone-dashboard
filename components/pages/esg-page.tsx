import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ChecklistItem } from "@/components/checklist-item"

export function ESGPage() {
  const esgCategories = [
    {
      title: "Environmental Due Diligence",
      items: [
        {
          label: "Supplier environmental certifications reviewed",
          description: "ISO 14001 or equivalent environmental management systems.",
          completed: true,
        },
        {
          label: "Carbon footprint assessment for logistics",
          description: "Evaluate shipping routes and carbon offsetting options.",
          completed: false,
          priority: "medium" as const,
        },
      ],
    },
    {
      title: "Social & Labor Compliance",
      items: [
        {
          label: "Supplier labor practice audit",
          description: "Verify compliance with ILO conventions and local labor laws.",
          completed: true,
        },
        {
          label: "Child labor & forced labor screening",
          description: "Ongoing monitoring against lists and risk assessments.",
          completed: true,
        },
        {
          label: "Diversity & inclusion metrics",
          description: "Track representation and inclusion policies at key suppliers.",
          completed: false,
          priority: "low" as const,
        },
      ],
    },
    {
      title: "Governance & Compliance",
      items: [
        {
          label: "Anti-corruption & FCPA compliance",
          description: "Supplier adherence to anti-bribery and anti-corruption standards.",
          completed: true,
        },
        {
          label: "Data privacy & GDPR compliance",
          description: "Supplier data handling practices and GDPR compliance verification.",
          completed: false,
          priority: "high" as const,
        },
        {
          label: "Supply chain transparency",
          description: "Documentation of supply chain from raw materials to finished goods.",
          completed: false,
          priority: "medium" as const,
        },
      ],
    },
  ]

  return (
    <main className="flex-1 overflow-auto">
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">ESG & Due Diligence</h1>
            <p className="text-slate-400 text-sm">
              Environmental, social, governance compliance and sustainability due diligence for suppliers.
            </p>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            New Assessment
          </Button>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {esgCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-bold text-white mb-4">{category.title}</h2>
            <div className="space-y-3">
              {category.items.map((item, itemIdx) => (
                <ChecklistItem key={itemIdx} {...item} />
              ))}
            </div>
          </div>
        ))}

        {/* ESG Standards Reference */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">ESG Frameworks & Standards</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Environmental</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• ISO 14001 Environmental Management</li>
                <li>• Carbon footprint reporting (Scope 1-3)</li>
                <li>• Waste & recycling programs</li>
                <li>• Water & energy efficiency</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Social & Governance</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• ILO conventions compliance</li>
                <li>• Anti-corruption & ethics programs</li>
                <li>• Data privacy & cybersecurity</li>
                <li>• Diversity & inclusion policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
