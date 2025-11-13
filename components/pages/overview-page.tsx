import { KPICard } from "@/components/kpi-card"
import { StatusBadge } from "@/components/status-badge"
import { ScreeningTable } from "@/components/screening-table"
import { ChecklistItem } from "@/components/checklist-item"
import { TimelineItem } from "@/components/timeline-item"
import { Button } from "@/components/ui/button"
import { Download, Plus, AlertCircle, TrendingUp, Globe, AlertTriangle, Target } from "lucide-react"
import { FAIRPHONE_MARKETS, SUPPLY_CHAIN_SCENARIOS } from "@/lib/fairphone-data"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"

export function OverviewPage() {
  const screeningRows = [
    {
      supplier: "Key EMS partner (CN)",
      region: "CN → EU",
      status: "green" as const,
      statusLabel: "Clear",
      lastChecked: "7 days ago",
    },
    {
      supplier: "Logistics hub operator",
      region: "NL / DE",
      status: "green" as const,
      statusLabel: "Clear",
      lastChecked: "3 days ago",
    },
    {
      supplier: "US distribution partner",
      region: "US",
      status: "yellow" as const,
      statusLabel: "Review needed",
      lastChecked: "30 days ago",
    },
    {
      supplier: "Raw material supplier",
      region: "Multiple",
      status: "red" as const,
      statusLabel: "Hit – escalated",
      lastChecked: "Today",
    },
  ]

  const checklistItems = [
    {
      label: "Core supplier list validated",
      description: "Top 80% of volume mapped with legal entities and ownership. EMS, Logistics, Distributors.",
      completed: true,
    },
    {
      label: "Fairphone products classified",
      description: "FP6, FP5, FP4, Fairbuds, Spare parts, Accessories – HS codes and ECCN assigned.",
      completed: true,
    },
    {
      label: "Trade flows documented",
      description: "CN → EU/UK/CH/NO sales, repair & RMA routes, US expansion scenario mapped.",
      completed: true,
    },
    {
      label: "Shipment tracking live",
      description: "Monitor outbound shipments with automated export checks and licence validation.",
      completed: false,
      priority: "high" as const,
    },
    {
      label: "ICP & training completed",
      description: "Fairphone trade compliance team trained on procedures and escalation workflows.",
      completed: false,
      priority: "high" as const,
    },
  ]

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="overview"
        sections={PAGE_GUIDES.overview.steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="flex items-start gap-4 flex-1">
            <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Fairphone Compliance Navigator</h1>
              <p className="text-slate-400 text-sm">
                Complete trade compliance, sanctions screening, export control, customs & ESG – built for Fairphone's
                global operations.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 bg-slate-800 border-slate-700 hover:bg-slate-700">
              <Download className="w-4 h-4" />
              Export audit pack
            </Button>
            <Button className="gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4" />
              New submission
            </Button>
          </div>
        </div>

        <div className="flex gap-3 mt-4 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs">
            <span>Overall Risk:</span>
            <span className="font-semibold text-yellow-300">Moderate</span>
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300">
            <span>Markets Covered:</span>
            <span className="font-semibold">EU, UK, NO, CH, US (pending)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300">
            <span>Supply Chain Concentration:</span>
            <span className="font-semibold">China 45% (primary EMS)</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES.overview.title}
          description={PAGE_GUIDES.overview.description}
          steps={PAGE_GUIDES.overview.steps}
        />

        <GuidanceCard
          id="overview-metrics"
          title="Understanding Your Compliance Metrics"
          description="These KPIs give you a quick snapshot of your compliance posture across all suppliers, products, and markets."
          tips={[
            "Green indicators mean everything is on track",
            "Yellow warnings require investigation within 5 business days",
            "Red alerts indicate violations - handle immediately and escalate to management",
            "Update your data regularly to keep metrics accurate",
          ]}
          type="info"
        />

        <div className="grid grid-cols-3 gap-6">
          {/* Left: Fairphone Product & Market Analysis */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4">Fairphone Product Coverage</h2>
              <div className="space-y-3">
                <KPICard label="Fairphone 6" value="100%" tag="June 2025 - Snapdragon 7s Gen 3" />
                <KPICard label="Fairphone 5" value="100%" tag="Current flagship - In full compliance" />
                <KPICard label="Fairphone 4" value="100%" tag="Legacy support - Continued screening" />
                <KPICard label="Fairbuds XL & Accessories" value="85%" tag="Supporting products mapped" />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Market Risk Profile
              </h2>
              <div className="space-y-2 text-sm">
                {Object.entries(FAIRPHONE_MARKETS).map(([key, market]) => (
                  <div key={key} className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-white">{market.name}</span>
                      <StatusBadge
                        status={market.riskLevel === "low" ? "green" : market.riskLevel === "medium" ? "yellow" : "red"}
                        label={market.riskLevel}
                      />
                    </div>
                    <p className="text-xs text-slate-400">
                      {market.volume} volume • {market.customs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Regulatory & Supply Chain Analysis */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4">Regulatory Frameworks Applied</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-sm text-slate-300">EU Dual-Use 2021/821</span>
                  <StatusBadge status="green" label="Active" />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-sm text-slate-300">US EAR/OFAC</span>
                  <StatusBadge status="yellow" label="US expansion" />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-sm text-slate-300">EU AML/WWFT</span>
                  <StatusBadge status="green" label="Implemented" />
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-sm text-slate-300">Customs HS/ECCN</span>
                  <StatusBadge status="green" label="Mapped" />
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Component Risk Hotspots
              </h2>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-red-900/20 border border-red-800/50 rounded">
                  <p className="text-red-300 font-semibold">Snapdragon Processors (US Origin)</p>
                  <p className="text-red-200">ECCN 3A001 - Re-export restrictions apply</p>
                </div>
                <div className="p-2 bg-yellow-900/20 border border-yellow-800/50 rounded">
                  <p className="text-yellow-300 font-semibold">Lithium Batteries (China)</p>
                  <p className="text-yellow-200">Hazmat declaration & customs docs required</p>
                </div>
                <div className="p-2 bg-blue-900/20 border border-blue-800/50 rounded">
                  <p className="text-blue-300 font-semibold">OLED Displays (South Korea)</p>
                  <p className="text-blue-200">Low-risk allied nation supplier</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4">Trade Routes Status</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                  <span className="text-slate-300">CN → EU (Primary)</span>
                  <span className="font-semibold text-white">60%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                  <span className="text-slate-300">CN → UK (Post-Brexit)</span>
                  <span className="font-semibold text-white">15%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                  <span className="text-slate-300">EU → Repair Hub</span>
                  <span className="font-semibold text-white">10%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                  <span className="text-slate-300">US → US (New)</span>
                  <span className="font-semibold text-yellow-300">5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline & Alerts */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Implementation Timeline</h3>
              <div className="space-y-4">
                <TimelineItem
                  number={1}
                  label="Assessment & Inventory"
                  description="Operations, suppliers, markets mapped."
                  status="completed"
                />
                <TimelineItem
                  number={2}
                  label="Gap Analysis"
                  description="Export controls, sanctions, customs identified."
                  status="completed"
                />
                <TimelineItem
                  number={3}
                  label="ICP & Training"
                  description="Internal compliance program and team onboarding."
                  status="in-progress"
                />
                <TimelineItem
                  number={4}
                  label="Navigator Live"
                  description="Q1 2026 baseline with continuous monitoring."
                  status="pending"
                />
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-red-300 mb-1">Action Required</h4>
                  <p className="text-sm text-red-200">
                    Raw material supplier (Vietnam) has screening hit. Escalation workflow active – compliance team
                    review required today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Supply Chain Scenarios
            </h2>
            <div className="space-y-2">
              {Object.entries(SUPPLY_CHAIN_SCENARIOS).map(([key, scenario]) => (
                <div key={key} className="p-3 bg-slate-800/50 rounded-lg">
                  <p className="font-semibold text-white text-sm">{scenario.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{scenario.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {scenario.risks.slice(0, 2).map((risk, idx) => (
                      <span key={idx} className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded">
                        {risk.split(" ").slice(0, 3).join(" ")}...
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Compliance KPIs</h2>
            <div className="space-y-3">
              <KPICard
                label="Suppliers screened (WWFT/Sanctions)"
                value="68%"
                trend="+12% this month"
                tag="Goal Q1 2026: ≥95%"
              />
              <KPICard label="Products fully classified" value="54%" trend="+8% this month" tag="FP6 + FP5 + parts" />
              <KPICard label="Compliance trainings" value="8/14" tag="Trade, customs, ESG" />
              <KPICard label="Open actions" value="11" trendColor="yellow" tag="3 high + 8 medium" />
            </div>
          </div>
        </div>

        {/* Supplier Screening & Tasks */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Live Supplier Screening</h2>
            <ScreeningTable rows={screeningRows} />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-white mb-4">Compliance To-Do</h3>
            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <ChecklistItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* AI Guidance */}
        <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-6">
          <div className="flex gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-green-300">AI Compliance Assistant – Today's Priorities</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-300 ml-8">
            <li>
              • <strong>Component Risk:</strong> FP6 Snapdragon 7s Gen 3 sourced via US - verify re-export compliance
              for all destination markets
            </li>
            <li>
              • <strong>Supplier Risk:</strong> Hi-P International sourcing OLED from Samsung - validate multi-source
              component chain
            </li>
            <li>
              • <strong>Market Expansion:</strong> US operations require updated ITAR/EAR screening for US distributors
            </li>
            <li>
              • <strong>Sanctions:</strong> Vietnam supplier requires enhanced due diligence - geopolitical tension
              escalation
            </li>
            <li>
              • <strong>Customs:</strong> China-origin batteries require hazmat documentation for all shipments - audit
              compliance
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
