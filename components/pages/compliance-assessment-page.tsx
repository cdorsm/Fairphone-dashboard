"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PHASE_ASSESSMENT, REGULATORY_FRAMEWORKS, RISK_FACTORS } from "@/lib/compliance-framework"
import { PRODUCT_REGULATORY_MAPPING, FAIRPHONE_PRODUCTS } from "@/lib/fairphone-data"
import { CheckCircle2, AlertCircle, Download, ChevronDown, ChevronUp } from "lucide-react"

export function ComplianceAssessmentPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>("phase1")
  const [expandedProduct, setExpandedProduct] = useState<string | null>("fp5")

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Compliance Assessment Framework</h1>
          <p className="text-slate-400">4-Phase RSM Implementation for Fairphone Trade Compliance</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export Assessment
        </Button>
      </div>

      {/* Phase Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {Object.entries(PHASE_ASSESSMENT).map(([key, phase]) => (
          <Card
            key={key}
            className="bg-slate-900 border-slate-700 cursor-pointer hover:border-slate-600"
            onClick={() => setExpandedPhase(expandedPhase === key ? null : key)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-sm">{phase.name}</CardTitle>
                  <CardDescription className="text-xs mt-1">{phase.description}</CardDescription>
                </div>
                {expandedPhase === key ? (
                  <ChevronUp className="w-4 h-4 text-blue-400" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">{phase.tasks.length}</div>
              <div className="text-xs text-slate-400">tasks</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Phase Details */}
      {expandedPhase && (
        <Card className="bg-slate-900 border-slate-700">
          <CardHeader>
            <CardTitle>{PHASE_ASSESSMENT[expandedPhase as keyof typeof PHASE_ASSESSMENT].name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {PHASE_ASSESSMENT[expandedPhase as keyof typeof PHASE_ASSESSMENT].tasks.map((task, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{task}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Regulatory Framework Mapping */}
      <div>
        <h2 className="text-xl font-bold mb-4">Applicable Regulatory Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(REGULATORY_FRAMEWORKS).map(([region, frameworks]) => (
            <div key={region} className="space-y-2">
              <h3 className="font-semibold text-slate-300">{region} Regulations</h3>
              {Object.entries(frameworks).map(([key, framework]) => (
                <Card key={key} className="bg-slate-800 border-slate-700 p-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <p className="text-sm font-medium">{framework.name}</p>
                      <p className="text-xs text-slate-400 mt-1">{framework.scope}</p>
                    </div>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {framework.category}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {framework.controls.map((control, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-700">
                        {control}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Product Regulatory Assessment */}
      <div>
        <h2 className="text-xl font-bold mb-4">Product Regulatory Assessment</h2>
        <div className="space-y-3">
          {FAIRPHONE_PRODUCTS.map((product) => {
            const mapping = PRODUCT_REGULATORY_MAPPING[product.id as keyof typeof PRODUCT_REGULATORY_MAPPING]
            const isExpanded = expandedProduct === product.id

            return (
              <Card
                key={product.id}
                className="bg-slate-900 border-slate-700 cursor-pointer"
                onClick={() => setExpandedProduct(isExpanded ? null : product.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>{product.name}</CardTitle>
                        <Badge variant={product.riskLevel === "green" ? "outline" : "secondary"}>
                          HS: {product.hsCode}
                        </Badge>
                        <Badge variant="outline">{product.eccn}</Badge>
                      </div>
                      {mapping && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Object.entries(mapping.regulatoryStatus).map(
                            ([key, status]: [string, any]) =>
                              status.applicable && (
                                <Badge key={key} className="text-xs bg-amber-900 text-amber-200">
                                  {key}: {status.reason}
                                </Badge>
                              ),
                          )}
                        </div>
                      )}
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </CardHeader>

                {isExpanded && mapping && (
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Component Risk Assessment</h4>
                      <div className="space-y-2">
                        {mapping.componentsRisk.map((comp, idx) => (
                          <div key={idx} className="bg-slate-800 p-2 rounded text-sm">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <p className="font-medium">{comp.name}</p>
                                <p className="text-xs text-slate-400">{comp.reason}</p>
                              </div>
                              <div className="text-right">
                                <Badge className="text-xs" variant="outline">
                                  {comp.origin}
                                </Badge>
                                <p className="text-xs text-slate-400 mt-1">{comp.eccn}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Supply Chain Risks</h4>
                      <ul className="space-y-1">
                        {mapping.supplyChainRisks.map((risk, idx) => (
                          <li key={idx} className="text-sm flex gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>

      {/* Risk Assessment Matrix */}
      <div>
        <h2 className="text-xl font-bold mb-4">Risk Assessment Factors</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {Object.entries(RISK_FACTORS).map(([category, factors]) => (
            <Card key={category} className="bg-slate-900 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize">{category.replace(/([A-Z])/g, " $1")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(factors).map(([key, factor]: [string, any]) => (
                  <div key={key} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">{factor.name}</span>
                      <span className="font-semibold text-blue-400">{(factor.weight * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={factor.weight * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
