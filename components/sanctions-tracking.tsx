import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function SanctionsTracking() {
  const sanctions = [
    { id: 1, program: "OFAC - Specially Designated Nationals", status: "active", lastUpdated: "2025-01-12" },
    { id: 2, program: "EU Sanctions - Russia/Belarus", status: "active", lastUpdated: "2025-01-11" },
    { id: 3, program: "EU Sanctions - DRC", status: "active", lastUpdated: "2025-01-10" },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sanctions Compliance Tracking</h1>
        <p className="text-muted-foreground">OFAC and EU sanctions list monitoring</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Sanctions Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sanctions.map((program) => (
              <div
                key={program.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border"
              >
                <div className="flex items-center gap-3 flex-1">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{program.program}</p>
                    <p className="text-xs text-muted-foreground">Updated {program.lastUpdated}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-success/20 text-success font-medium">
                  Monitoring
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Screening Procedures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { step: "Data Collection", completed: true },
              { step: "Name Screening", completed: true },
              { step: "Hit Analysis", completed: true },
              { step: "Adverse Media Check", completed: true },
              { step: "Risk Assessment", completed: false },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded ${item.completed ? "bg-success" : "bg-muted"}`} />
                <span className="text-sm">{item.step}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Lists Coverage</span>
                <span className="text-sm font-bold">100%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Screening Accuracy</span>
                <span className="text-sm font-bold">99.8%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "99.8%" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
