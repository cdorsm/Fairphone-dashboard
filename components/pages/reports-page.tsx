"use client"

import { Card } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Calendar, Plus, Eye } from "lucide-react"
import { useRole } from "@/components/context/role-context"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"
import { ROLES_PERMISSIONS } from "@/lib/fairphone-data"

export function ReportsPage() {
  const { userRole } = useRole()
  const [selectedPeriod, setSelectedPeriod] = useState("q1-2026")

  // Role-based report availability
  const roleReports: Record<string, any> = {
    procurement: [
      {
        id: "supplier-audit",
        name: "Supplier Screening Audit Report",
        description: "Complete screening results with hit analysis and escalations",
        frequency: "Real-time + monthly summary",
        lastGenerated: "2025-01-13",
        pages: 24,
      },
      {
        id: "trade-flow",
        name: "Trade Flow Risk Assessment",
        description: "Origin/destination risk analysis for routes and shipments",
        frequency: "Monthly",
        lastGenerated: "2025-01-08",
        pages: 12,
      },
    ],
    logistics: [
      {
        id: "product-class",
        name: "Product Classification Document",
        description: "HS codes, ECCN classifications, license requirements",
        frequency: "As updated",
        lastGenerated: "2025-01-10",
        pages: 15,
      },
      {
        id: "trade-flow",
        name: "Trade Flow Risk Assessment",
        description: "Origin/destination risk analysis for routes",
        frequency: "Monthly",
        lastGenerated: "2025-01-08",
        pages: 12,
      },
      {
        id: "shipment-clearance",
        name: "Shipment Clearance & Export Log",
        description: "Daily export documentation and compliance status",
        frequency: "Daily",
        lastGenerated: "2025-01-13",
        pages: "Dynamic",
      },
    ],
    compliance: [
      {
        id: "exec-summary",
        name: "Executive Summary",
        description: "High-level compliance status for management review",
        frequency: "Monthly",
        lastGenerated: "2025-01-13",
        pages: 8,
      },
      {
        id: "supplier-audit",
        name: "Supplier Screening Audit Report",
        description: "Complete screening results with hit analysis",
        frequency: "Real-time + monthly",
        lastGenerated: "2025-01-13",
        pages: 24,
      },
      {
        id: "product-class",
        name: "Product Classification Document",
        description: "HS codes and ECCN classifications for all products",
        frequency: "As updated",
        lastGenerated: "2025-01-10",
        pages: 15,
      },
      {
        id: "compliance-cert",
        name: "Compliance Certification (Q1 2026)",
        description: "Formal certification of compliance baseline achievement",
        frequency: "Quarterly",
        lastGenerated: "Pending",
        pages: 20,
      },
      {
        id: "evidence-pack",
        name: "Evidence & ICP Documentation Pack",
        description: "Complete audit trail: policies, screenings, approvals, training",
        frequency: "On-demand",
        lastGenerated: "2024-12-20",
        pages: "150+",
      },
      {
        id: "alerts-log",
        name: "Compliance Alerts & Escalations Log",
        description: "All flags, hits, reviews and resolutions with timestamps",
        frequency: "Real-time",
        lastGenerated: "2025-01-13",
        pages: "Dynamic",
      },
    ],
    management: [
      {
        id: "exec-summary",
        name: "Executive Summary",
        description: "High-level compliance status, KPIs, risk dashboard",
        frequency: "Monthly",
        lastGenerated: "2025-01-13",
        pages: 8,
      },
      {
        id: "risk-dashboard",
        name: "Compliance Risk Dashboard",
        description: "Key metrics, open items, escalations, trend analysis",
        frequency: "Weekly",
        lastGenerated: "2025-01-13",
        pages: 12,
      },
      {
        id: "compliance-cert",
        name: "Compliance Certification (Q1 2026)",
        description: "Formal certification of compliance baseline achievement",
        frequency: "Quarterly",
        lastGenerated: "Pending",
        pages: 20,
      },
    ],
    "rsm-advisor": [
      {
        id: "exec-summary",
        name: "Executive Summary",
        description: "Complete compliance overview for advisory review",
        frequency: "Monthly",
        lastGenerated: "2025-01-13",
        pages: 8,
      },
      {
        id: "supplier-audit",
        name: "Supplier Screening Audit Report",
        description: "Comprehensive screening analysis with recommendations",
        frequency: "Monthly",
        lastGenerated: "2025-01-13",
        pages: 24,
      },
      {
        id: "compliance-cert",
        name: "Compliance Certification Review",
        description: "Assessment of compliance baseline and framework maturity",
        frequency: "Quarterly",
        lastGenerated: "Pending",
        pages: 20,
      },
      {
        id: "gap-analysis",
        name: "Gap Analysis & Recommendations",
        description: "Detailed findings and strategic recommendations",
        frequency: "Quarterly",
        lastGenerated: "2025-01-12",
        pages: 18,
      },
      {
        id: "evidence-pack",
        name: "Evidence & ICP Documentation Pack",
        description: "Complete audit trail for regulatory review",
        frequency: "On-demand",
        lastGenerated: "2024-12-20",
        pages: "150+",
      },
    ],
  }

  const availableReports = roleReports[userRole] || []
  const rolePermissions = ROLES_PERMISSIONS[userRole as keyof typeof ROLES_PERMISSIONS]

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="reports"
        sections={PAGE_GUIDES.reports.steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start gap-4 flex-1 mb-4">
          <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Reports & Output</h1>
            <p className="text-slate-400 text-sm">
              Generate role-specific compliance reports for stakeholders and regulatory bodies.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES.reports.title}
          description={PAGE_GUIDES.reports.description}
          steps={PAGE_GUIDES.reports.steps}
        />

        <GuidanceCard
          id="role-based-reports"
          title="Role-Based Report Generation"
          description="Each role has access to customized reports tailored to their responsibilities and compliance needs."
          tips={[
            `Your role (${ROLES_PERMISSIONS[userRole as keyof typeof ROLES_PERMISSIONS]?.label}) has access to specific reports`,
            "Filter reports by date range, market, supplier, or risk level",
            "Download as PDF for auditors or Excel for further analysis",
            "All reports include audit trails showing who accessed them and when",
          ]}
          type="info"
        />

        <Tabs defaultValue="role-reports" className="space-y-6">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="role-reports">My Reports ({rolePermissions.label})</TabsTrigger>
            <TabsTrigger value="generate">Generate Custom</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Exports</TabsTrigger>
          </TabsList>

          {/* Role-Based Reports */}
          <TabsContent value="role-reports" className="space-y-4">
            <div className="flex gap-3 mb-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Reporting Period</label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="q1-2026">Q1 2026</option>
                  <option value="2025-full">Full Year 2025</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              <div className="pt-6">
                <Button className="bg-green-600 hover:bg-green-700 gap-2">
                  <Calendar className="w-4 h-4" />
                  Apply Filter
                </Button>
              </div>
            </div>

            {availableReports.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {availableReports.map((report) => (
                  <Card
                    key={report.id}
                    className="bg-slate-900 border-slate-800 p-6 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <FileText className="w-6 h-6 text-green-500" />
                      <div className="text-right text-xs text-slate-400">{report.pages} pages</div>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{report.name}</h3>
                    <p className="text-xs text-slate-400 mb-4">{report.description}</p>
                    <div className="space-y-2 mb-4 pt-3 border-t border-slate-800">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Frequency:</span>
                        <span className="text-slate-200">{report.frequency}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Last generated:</span>
                        <span className="text-slate-200">{report.lastGenerated}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-700 hover:bg-slate-800 gap-2 bg-transparent"
                      >
                        <Eye className="w-3 h-3" />
                        Preview
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-700 hover:bg-slate-800 gap-2 bg-transparent"
                      >
                        <Download className="w-3 h-3" />
                        Export
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-slate-900 border-slate-800 p-8 text-center">
                <p className="text-slate-400">No reports available for your role. Contact compliance team.</p>
              </Card>
            )}
          </TabsContent>

          {/* Generate Custom Report */}
          <TabsContent value="generate" className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">Generate Custom Report</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">Report Type</label>
                  <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                    {availableReports.map((report) => (
                      <option key={report.id}>{report.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">Period</label>
                  <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Q1 2026</option>
                    <option>Month (Jan 2025)</option>
                    <option>Custom Date Range</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">Include Sections</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Executive Summary
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Detailed Findings
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" className="rounded" />
                      Recommendations
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">Distribution</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Management
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" className="rounded" />
                      RSM Advisor
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                      <input type="checkbox" className="rounded" />
                      Regulators
                    </label>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                <FileText className="w-4 h-4" />
                Generate Report
              </Button>
            </div>
          </TabsContent>

          {/* Scheduled Exports */}
          <TabsContent value="scheduled" className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-white mb-4">Scheduled Report Exports</h2>
              <div className="space-y-3">
                {[
                  { name: "Executive Summary", frequency: "Monthly (5th)", recipients: "Management, RSM" },
                  { name: "Compliance Audit Pack", frequency: "Quarterly (30th)", recipients: "Internal audit, RSM" },
                  {
                    name: "Supplier Screening Log",
                    frequency: "Weekly (Friday)",
                    recipients: "Procurement, Compliance",
                  },
                  { name: "Shipment Compliance", frequency: "Real-time alerts", recipients: "Logistics, Compliance" },
                ].map((scheduled, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">{scheduled.name}</p>
                      <p className="text-xs text-slate-400">{scheduled.frequency}</p>
                      <p className="text-xs text-slate-500 mt-1">Recipients: {scheduled.recipients}</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-700 bg-transparent">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 gap-2">
                <Plus className="w-4 h-4" />
                Create New Schedule
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
