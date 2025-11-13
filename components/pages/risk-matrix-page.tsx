"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { COMPLIANCE_CONTROLS } from "@/lib/compliance-framework"

export function RiskMatrixPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Compliance Controls & Gap Analysis</h1>
        <p className="text-slate-400">Strategic, Tactical, and Operational measures to mitigate compliance risks</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Object.entries(COMPLIANCE_CONTROLS).map(([level, controls]) => (
          <Card key={level} className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="capitalize text-lg">{level} Level</CardTitle>
              <CardDescription>Organizational controls and procedures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {controls.map((control, idx) => (
                  <div key={idx} className="bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-slate-600">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{control}</p>
                        <Badge className="mt-2 text-xs" variant="outline">
                          Status: Implement
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gap Analysis Summary */}
      <Card className="bg-slate-900 border-slate-700">
        <CardHeader>
          <CardTitle>Gap Analysis Summary</CardTitle>
          <CardDescription>Current vs. Required compliance controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded">
                <div className="text-2xl font-bold text-emerald-400">12</div>
                <p className="text-sm text-slate-400 mt-1">Controls Implemented</p>
              </div>
              <div className="bg-slate-800 p-4 rounded">
                <div className="text-2xl font-bold text-amber-400">8</div>
                <p className="text-sm text-slate-400 mt-1">Gaps Identified</p>
              </div>
            </div>
            <div className="bg-slate-800 p-4 rounded">
              <p className="font-semibold mb-3">Priority Gaps to Address:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-500">1.</span>
                  <span>Enhanced vendor due diligence procedures for China suppliers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">2.</span>
                  <span>Automated sanctions list screening integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">3.</span>
                  <span>Product classification documentation procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
