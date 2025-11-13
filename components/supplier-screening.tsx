"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertTriangle, Search, Plus } from "lucide-react"

export function SupplierScreening() {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "ACME Electronics", status: "cleared", country: "Germany", lastScreened: "2025-01-10" },
    { id: 2, name: "TechSupply Corp", status: "cleared", country: "Taiwan", lastScreened: "2025-01-08" },
    { id: 3, name: "Global Parts Inc", status: "pending", country: "USA", lastScreened: "2025-01-12" },
  ])

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Supplier Screening</h1>
        <p className="text-muted-foreground">Sanctions compliance and due diligence screening</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Suppliers</CardTitle>
            <Users className="w-5 h-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{suppliers.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cleared</CardTitle>
            <CheckCircle className="w-5 h-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{suppliers.filter((s) => s.status === "cleared").length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <AlertTriangle className="w-5 h-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{suppliers.filter((s) => s.status === "pending").length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Screened Suppliers</CardTitle>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Supplier
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search suppliers..." className="flex-1" />
          </div>

          <div className="space-y-2">
            {suppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium">{supplier.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {supplier.country} • Screened {supplier.lastScreened}
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    supplier.status === "cleared" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                  }`}
                >
                  {supplier.status === "cleared" ? "Cleared" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Users } from "lucide-react"
