"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { OverviewPage } from "@/components/pages/overview-page"
import { SupplierPage } from "@/components/pages/supplier-page"
import { ProductPage } from "@/components/pages/product-page"
import { ShipmentPage } from "@/components/pages/shipment-page"
import { DocumentPage } from "@/components/pages/document-page"
import { TasksPage } from "@/components/pages/tasks-page"
import { ESGPage } from "@/components/pages/esg-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { RoleProvider } from "@/components/context/role-context"
import { WorkflowPage } from "@/components/pages/workflow-page"
import { ReportsPage } from "@/components/pages/reports-page"
import { ComplianceAssessmentPage } from "@/components/pages/compliance-assessment-page"
import { ScenarioPlanningSurveyPage } from "@/components/pages/scenario-planning-page"
import { RiskMatrixPage } from "@/components/pages/risk-matrix-page"
import { MarketCompliancePage } from "@/components/pages/market-compliance-page"
import { GuidanceProvider } from "@/components/context/guidance-context"

type Section =
  | "overview"
  | "suppliers"
  | "products"
  | "shipments"
  | "documents"
  | "tasks"
  | "esg"
  | "workflow"
  | "reports"
  | "compliance-assessment"
  | "scenario-planning"
  | "risk-matrix"
  | "market-compliance"
  | "settings"

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("overview")

  const renderContent = () => {
    switch (activeSection) {
      case "suppliers":
        return <SupplierPage />
      case "products":
        return <ProductPage />
      case "shipments":
        return <ShipmentPage />
      case "documents":
        return <DocumentPage />
      case "tasks":
        return <TasksPage />
      case "esg":
        return <ESGPage />
      case "workflow":
        return <WorkflowPage />
      case "reports":
        return <ReportsPage />
      case "compliance-assessment":
        return <ComplianceAssessmentPage />
      case "scenario-planning":
        return <ScenarioPlanningSurveyPage />
      case "risk-matrix":
        return <RiskMatrixPage />
      case "market-compliance":
        return <MarketCompliancePage />
      case "settings":
        return <SettingsPage />
      default:
        return <OverviewPage />
    }
  }

  return (
    <GuidanceProvider>
      <RoleProvider>
        <div className="flex h-screen bg-slate-950 text-slate-100">
          <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="flex-1 overflow-auto">{renderContent()}</main>
        </div>
      </RoleProvider>
    </GuidanceProvider>
  )
}
