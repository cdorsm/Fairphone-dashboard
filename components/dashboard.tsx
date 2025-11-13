import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function Dashboard() {
  return (
    <div className="flex-1 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Compliance Dashboard</h1>
        <p className="text-muted-foreground">EU/US Trade Compliance Framework for Fairphone</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <CheckCircle className="w-5 h-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground mt-1">2 actions pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suppliers Screened</CardTitle>
            <Users className="w-5 h-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground mt-1">All cleared</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sanctions Alerts</CardTitle>
            <AlertTriangle className="w-5 h-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-1">No active alerts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
            <Clock className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15d</div>
            <p className="text-xs text-muted-foreground mt-1">ago</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Areas */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Areas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "EU Dual-Use Regulation", status: "active" },
              { name: "US EAR/ITAR Controls", status: "active" },
              { name: "EU/US Sanctions", status: "active" },
              { name: "Supply Chain Due Diligence", status: "pending" },
            ].map((area) => (
              <div key={area.name} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <span className="text-sm">{area.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    area.status === "active" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                  }`}
                >
                  {area.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "Supplier ACME Corp screened", time: "2 hours ago", type: "success" },
              { action: "Goods classification updated", time: "1 day ago", type: "success" },
              { action: "Monthly audit completed", time: "3 days ago", type: "success" },
              { action: "Sanctions list refreshed", time: "5 days ago", type: "info" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${activity.type === "success" ? "bg-success" : "bg-primary"}`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Import icon
import { Users } from "lucide-react"
