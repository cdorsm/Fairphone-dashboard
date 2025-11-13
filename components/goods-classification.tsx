import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertCircle, CheckCircle } from "lucide-react"

export function GoodsClassification() {
  const goods = [
    { id: 1, item: "Modular Smartphone - FP5", classification: "EAR-Controlled", region: "US", status: "cleared" },
    { id: 2, item: "Display Module", classification: "Dual-Use Item", region: "EU", status: "cleared" },
    { id: 3, item: "Processor Component", classification: "Under Review", region: "US", status: "pending" },
    { id: 4, item: "Battery Unit", classification: "Standard Export", region: "All", status: "cleared" },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Goods Classification</h1>
        <p className="text-muted-foreground">Dual-use and EAR-controlled items classification</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="w-5 h-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goods.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cleared</CardTitle>
            <CheckCircle className="w-5 h-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goods.filter((g) => g.status === "cleared").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
            <AlertCircle className="w-5 h-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goods.filter((g) => g.status === "pending").length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Classified Goods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {goods.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{item.item}</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{item.classification}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{item.region}</span>
                  </div>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    item.status === "cleared" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                  }`}
                >
                  {item.status === "cleared" ? "Cleared" : "Review"}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
