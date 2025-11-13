"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SUPPLY_CHAIN_SCENARIOS } from "@/lib/fairphone-data"
import { AlertTriangle, Shield, Route } from "lucide-react"

export function ScenarioPlanningSurveyPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("baseline")
  const scenario = SUPPLY_CHAIN_SCENARIOS[selectedScenario as keyof typeof SUPPLY_CHAIN_SCENARIOS]

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return "bg-emerald-900 text-emerald-200"
      case "medium":
        return "bg-amber-900 text-amber-200"
      case "high":
        return "bg-red-900 text-red-200"
      default:
        return "bg-slate-700"
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Supply Chain Scenario Planning</h1>
        <p className="text-slate-400">
          Assess compliance and mitigation strategies across different supply chain scenarios
        </p>
      </div>

      {/* Scenario Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {Object.entries(SUPPLY_CHAIN_SCENARIOS).map(([key, scen]) => (
          <Button
            key={key}
            variant={selectedScenario === key ? "default" : "outline"}
            className="justify-start text-left h-auto p-3"
            onClick={() => setSelectedScenario(key)}
          >
            <div>
              <div className="font-semibold text-sm">{scen.name}</div>
              <div className="text-xs text-slate-400 mt-1">{scen.description}</div>
            </div>
          </Button>
        ))}
      </div>

      {scenario && (
        <>
          {/* Scenario Overview */}
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle>{scenario.name}</CardTitle>
              <CardDescription>{scenario.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Trade Routes */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Route className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">Trade Routes</h3>
                </div>
                <div className="space-y-2">
                  {scenario.routes.map((route, idx) => (
                    <div key={idx} className="bg-slate-800 p-3 rounded flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium">
                          {route.origin} → {route.destination}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Volume: {route.volume}</p>
                      </div>
                      <Badge className={getRiskColor(route.riskLevel)}>{route.riskLevel}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold">Key Compliance Risks</h3>
                </div>
                <ul className="space-y-2">
                  {scenario.risks.map((risk, idx) => (
                    <li key={idx} className="text-sm flex gap-2 bg-slate-800 p-2 rounded">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mitigations */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-semibold">Recommended Mitigations</h3>
                </div>
                <ul className="space-y-2">
                  {scenario.mitigations.map((mitigation, idx) => (
                    <li key={idx} className="text-sm flex gap-2 bg-slate-800 p-2 rounded">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{mitigation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Scenario Comparison Table */}
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle>Scenario Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-2 font-semibold">Scenario</th>
                      <th className="text-left py-2 px-2 font-semibold">Complexity</th>
                      <th className="text-left py-2 px-2 font-semibold">Risk Level</th>
                      <th className="text-left py-2 px-2 font-semibold">Key Challenge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(SUPPLY_CHAIN_SCENARIOS).map(([key, scen]) => (
                      <tr key={key} className="border-b border-slate-800 hover:bg-slate-800">
                        <td className="py-2 px-2 font-medium">{scen.name}</td>
                        <td className="py-2 px-2">
                          <Badge variant="outline">{scen.routes.length} routes</Badge>
                        </td>
                        <td className="py-2 px-2">
                          <Badge
                            className={getRiskColor(
                              scen.routes.some((r) => r.riskLevel === "high") ? "high" : "medium",
                            )}
                          >
                            {scen.routes.some((r) => r.riskLevel === "high") ? "High" : "Medium"}
                          </Badge>
                        </td>
                        <td className="py-2 px-2 text-slate-400">{scen.risks[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
