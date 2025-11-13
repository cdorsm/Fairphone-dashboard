"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, Download, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { ScreeningTable } from "@/components/screening-table"
import { StatusBadge } from "@/components/status-badge"
import { FAIRPHONE_SUPPLIERS_ENHANCED } from "@/lib/fairphone-data"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"

export function SupplierPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null)

  const suppliers = FAIRPHONE_SUPPLIERS_ENHANCED.map((sup) => ({
    supplier: sup.name,
    region: `${sup.region}`,
    status: sup.screeningStatus as "green" | "yellow" | "red",
    statusLabel:
      sup.screeningStatus === "clear"
        ? "Clear"
        : sup.screeningStatus === "pending"
          ? "Review needed"
          : "Hit – escalated",
    lastChecked: sup.lastScreened,
  }))

  const filteredSuppliers = suppliers.filter((s) => s.supplier.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="suppliers"
        sections={PAGE_GUIDES.suppliers.steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div className="flex items-start gap-4 flex-1">
            <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Suppliers & Partners</h1>
              <p className="text-slate-400 text-sm">
                Manage sanctions screening, WWFT compliance, and risk assessment for all Fairphone suppliers.
              </p>
            </div>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="w-4 h-4" />
            Add Supplier
          </Button>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          <StatusBadge
            status="green"
            label={`${FAIRPHONE_SUPPLIERS_ENHANCED.filter((s) => s.screeningStatus === "clear").length}/${FAIRPHONE_SUPPLIERS_ENHANCED.length} cleared`}
          />
          <StatusBadge
            status="yellow"
            label={`${FAIRPHONE_SUPPLIERS_ENHANCED.filter((s) => s.screeningStatus === "pending").length} pending review`}
          />
          <StatusBadge
            status="red"
            label={`${FAIRPHONE_SUPPLIERS_ENHANCED.filter((s) => s.screeningStatus === "hit").length} escalation`}
          />
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES.suppliers.title}
          description={PAGE_GUIDES.suppliers.description}
          steps={PAGE_GUIDES.suppliers.steps}
        />

        <GuidanceCard
          id="supplier-screening"
          title="Sanctions Screening Explained"
          description="All suppliers are screened against international sanctions lists in real-time."
          tips={[
            "Green = Cleared against OFAC, EU, and UN lists",
            "Yellow = Requires manual review or beneficial owner verification",
            "Red = Hit on one or more sanctions lists - do not proceed",
            "Rescreening occurs automatically every 90 days",
          ]}
          type="warning"
        />

        {/* Add Supplier Form */}
        {showAddForm && (
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Add New Supplier</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Supplier Name"
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200"
                />
              </div>
              <input
                type="text"
                placeholder="Contact & Role"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200"
              />
              <textarea
                placeholder="Products/Services provided..."
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200 h-20"
              />
              <div className="flex gap-2">
                <Button className="bg-green-600 hover:bg-green-700">Submit for Screening</Button>
                <Button
                  variant="outline"
                  className="bg-slate-800 border-slate-700"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Search & Filters */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Button variant="outline" className="gap-2 bg-slate-800 border-slate-700 hover:bg-slate-700">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2 bg-slate-800 border-slate-700 hover:bg-slate-700">
            <Download className="w-4 h-4" />
            Export Screening Report
          </Button>
        </div>

        {/* Suppliers Table */}
        <ScreeningTable rows={filteredSuppliers} title="Fairphone Suppliers & Partners" />

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Supplier Risk Matrix & Compliance Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">Supplier</th>
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">Region</th>
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">Volume</th>
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">Screening</th>
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">WWFT</th>
                  <th className="text-left py-3 px-3 text-slate-300 font-semibold">Risk Factors</th>
                </tr>
              </thead>
              <tbody>
                {FAIRPHONE_SUPPLIERS_ENHANCED.map((sup) => (
                  <tr key={sup.id} className="border-b border-slate-700 hover:bg-slate-800/50">
                    <td className="py-3 px-3 text-white">{sup.name}</td>
                    <td className="py-3 px-3 text-slate-400">{sup.region}</td>
                    <td className="py-3 px-3 text-slate-400">{sup.volume}</td>
                    <td className="py-3 px-3">
                      <StatusBadge
                        status={
                          sup.screeningStatus === "clear"
                            ? "green"
                            : sup.screeningStatus === "pending"
                              ? "yellow"
                              : "red"
                        }
                        label={
                          sup.screeningStatus === "clear"
                            ? "Clear"
                            : sup.screeningStatus === "pending"
                              ? "Pending"
                              : "Hit"
                        }
                      />
                    </td>
                    <td className="py-3 px-3">
                      {sup.wwftDocumented ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-xs">
                      {sup.riskFactors && sup.riskFactors.length > 0 ? (
                        <span className="text-yellow-400">{sup.riskFactors.length} factors</span>
                      ) : (
                        <span className="text-green-400">Low risk</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Supplier Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Supplier Details & Risk Assessment</h2>
          {FAIRPHONE_SUPPLIERS_ENHANCED.map((supplier) => (
            <div key={supplier.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{supplier.name}</h3>
                  <p className="text-sm text-slate-400">
                    {supplier.role} • {supplier.region}
                  </p>
                </div>
                <StatusBadge
                  status={
                    supplier.screeningStatus === "clear"
                      ? "green"
                      : supplier.screeningStatus === "pending"
                        ? "yellow"
                        : "red"
                  }
                  label={
                    supplier.screeningStatus === "clear"
                      ? "Clear"
                      : supplier.screeningStatus === "pending"
                        ? "Pending"
                        : "Hit"
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-slate-400">Products Supplied</p>
                  <p className="text-white font-semibold">
                    {Array.isArray(supplier.products) ? supplier.products.join(", ") : supplier.products}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Volume</p>
                  <p className="text-white font-semibold">{supplier.volume}</p>
                </div>
                <div>
                  <p className="text-slate-400">Last Screening</p>
                  <p className="text-white font-semibold">{supplier.lastScreened}</p>
                </div>
                <div>
                  <p className="text-slate-400">WWFT Documented</p>
                  <p className="text-white font-semibold">{supplier.wwftDocumented ? "✓ Yes" : "⊘ No"}</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <p className="text-sm font-semibold text-white mb-2">Risk Factors & Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {supplier.riskFactors?.map((risk, idx) => (
                    <span key={idx} className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded">
                      ⚠ {risk}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {supplier.certifications?.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded">
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Screening Standards */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Screening Standards & Procedures</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Sanctions & WWFT
              </p>
              <p className="text-xs text-slate-400">
                UN, EU, UK, US OFAC, INTERPOL Red Notices screened. Beneficial ownership verified for high-risk
                jurisdictions (China, Vietnam, etc.).
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Country Risk Assessment
              </p>
              <p className="text-xs text-slate-400">
                Country compliance risk evaluated for jurisdiction, trade route, and supply chain concentration.
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Re-screening Frequency
              </p>
              <p className="text-xs text-slate-400">
                Critical suppliers (CN, VN): Monthly. Standard suppliers: Quarterly. Event-based re-screening for
                geopolitical incidents.
              </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Escalation Protocol
              </p>
              <p className="text-xs text-slate-400">
                Hits → Compliance escalation → Legal review → Final decision (continue/modify/terminate).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
