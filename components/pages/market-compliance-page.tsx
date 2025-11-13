"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, MapPin } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"
import { FAIRPHONE_MARKETS } from "@/lib/fairphone-data"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"

export function MarketCompliancePage() {
  const [selectedMarket, setSelectedMarket] = useState<string>("eu")

  const markets = Object.entries(FAIRPHONE_MARKETS).map(([key, market]) => ({
    key,
    ...market,
  }))

  const currentMarket = markets.find((m) => m.key === selectedMarket)

  const marketDetails: Record<string, any> = {
    eu: {
      regulations: [
        {
          name: "EU Dual-Use Regulation 2021/821",
          scope: "Export control for items with military application",
          requirement: "License required for controlled items",
        },
        {
          name: "GDPR & Data Protection",
          scope: "Customer & supply chain data",
          requirement: "Privacy policy, data processing agreements",
        },
        {
          name: "EU REACH Regulation",
          scope: "Chemicals in electronics",
          requirement: "Substance of Very High Concern (SVHC) declaration",
        },
        {
          name: "EU EcoDesign Directive",
          scope: "Product sustainability",
          requirement: "Energy efficiency, repairability score (Fairphone compliant)",
        },
      ],
      procedures: [
        "Intra-EU movement: Simplified customs (single VAT form)",
        "Quarterly SAC reports for trade statistics",
        "Supplier WWFT compliance mandatory",
        "Fairtrade gold documentation archived",
      ],
      risks: "Low - stable regulatory environment, Fairphone fully compliant",
    },
    uk: {
      regulations: [
        {
          name: "UK Trade and Cooperation Agreement (TCA)",
          scope: "Post-Brexit trade movement",
          requirement: "Form c88 customs declarations for all shipments",
        },
        {
          name: "UK Strategic Export Control Lists",
          scope: "Military-end export control",
          requirement: "License assessment for controlled items",
        },
      ],
      procedures: ["SPS (Summary Declaration) filing required", "Health/safety CE marking maintained"],
      risks: "Medium - post-Brexit customs friction, extra documentation",
    },
    us: {
      regulations: [
        {
          name: "US EAR (Export Administration Regulations)",
          scope: "Technology export control",
          requirement: "License check for controlled items",
        },
        {
          name: "OFAC Sanctions",
          scope: "Trade sanctions compliance",
          requirement: "Supplier screening mandatory",
        },
      ],
      procedures: ["ECCN classification for all products", "Distributor license required"],
      risks: "High - geopolitical tensions, frequent restrictions updates",
    },
  }

  const details = marketDetails[selectedMarket] || marketDetails.eu

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="market-compliance"
        sections={PAGE_GUIDES["market-compliance"].steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start gap-4 flex-1 mb-4">
          <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Market Regulations & Compliance</h1>
            <p className="text-slate-400 text-sm">
              Navigate regulatory requirements for each market where Fairphone operates.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES["market-compliance"].title}
          description={PAGE_GUIDES["market-compliance"].description}
          steps={PAGE_GUIDES["market-compliance"].steps}
        />

        <GuidanceCard
          id="market-regulations"
          title="Understanding Market-Specific Regulations"
          description="Each market has unique export controls, customs requirements, and product certifications."
          tips={[
            "EU markets require CE marking and REACH compliance",
            "US market requires ECCN classification and OFAC screening",
            "UK requires post-Brexit customs forms for all shipments",
            "Switzerland requires strict anti-money laundering controls",
          ]}
          type="info"
        />

        {/* Market Selector */}
        <div className="flex gap-3 flex-wrap">
          {markets.map((market) => (
            <button
              key={market.key}
              onClick={() => setSelectedMarket(market.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMarket === market.key
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {market.name}
              </div>
            </button>
          ))}
        </div>

        {/* Current Market Details */}
        {currentMarket && (
          <div className="space-y-6">
            {/* Market Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <p className="text-xs text-slate-400 mb-1">Risk Level</p>
                <p className="text-lg font-bold text-white mb-2">{currentMarket.riskLevel.toUpperCase()}</p>
                <StatusBadge
                  status={
                    currentMarket.riskLevel === "low"
                      ? "green"
                      : currentMarket.riskLevel === "medium"
                        ? "yellow"
                        : "red"
                  }
                  label={currentMarket.riskLevel}
                />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <p className="text-xs text-slate-400 mb-1">Volume</p>
                <p className="text-lg font-bold text-white">{currentMarket.volume}</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <p className="text-xs text-slate-400 mb-1">Customs Process</p>
                <p className="text-lg font-bold text-white text-sm">{currentMarket.customs}</p>
              </div>
            </div>

            {/* Regulations */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Applicable Regulations</h3>
              <div className="space-y-3">
                {details.regulations?.map((reg, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-white">{reg.name}</p>
                        <p className="text-sm text-slate-400 mt-1">
                          <span className="text-slate-300">Scope:</span> {reg.scope}
                        </p>
                        <p className="text-sm text-slate-400">
                          <span className="text-slate-300">Requirement:</span> {reg.requirement}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedures */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Compliance Procedures</h3>
              <ul className="space-y-2">
                {details.procedures?.map((proc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Assessment */}
            <div
              className={`rounded-lg p-6 border ${
                details.risks?.includes("Low")
                  ? "bg-green-900/20 border-green-800/50"
                  : details.risks?.includes("Medium")
                    ? "bg-yellow-900/20 border-yellow-800/50"
                    : "bg-red-900/20 border-red-800/50"
              }`}
            >
              <div className="flex gap-3">
                <AlertCircle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    details.risks?.includes("Low")
                      ? "text-green-400"
                      : details.risks?.includes("Medium")
                        ? "text-yellow-400"
                        : "text-red-400"
                  }`}
                />
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      details.risks?.includes("Low")
                        ? "text-green-300"
                        : details.risks?.includes("Medium")
                          ? "text-yellow-300"
                          : "text-red-300"
                    }`}
                  >
                    Risk Assessment
                  </h4>
                  <p
                    className={
                      details.risks?.includes("Low")
                        ? "text-green-200"
                        : details.risks?.includes("Medium")
                          ? "text-yellow-200"
                          : "text-red-200"
                    }
                  >
                    {details.risks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compliance Checklist */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Market Entry Checklist</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Product classifications verified</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Suppliers screened for market</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Customs documentation prepared</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Distribution agreements reviewed</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Certifications in place</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <span className="text-sm text-slate-300">Team training completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
