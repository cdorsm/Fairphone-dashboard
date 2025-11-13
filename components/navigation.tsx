"use client"

import type React from "react"
import {
  LayoutDashboard,
  Users,
  Package,
  Truck,
  FileText,
  CheckSquare,
  Leaf,
  Settings,
  Workflow,
  FileJson,
  BarChart3,
  MapPin,
  AlertTriangle,
  Globe,
} from "lucide-react"
import { useState } from "react"
import { useRole } from "@/components/context/role-context"
import { ROLES_PERMISSIONS } from "@/lib/fairphone-data"

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

interface NavigationProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const { userRole, setUserRole, userName } = useRole()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [showRoleMenu, setShowRoleMenu] = useState(false)

  const menuItems: Array<{ id: Section; label: string; icon: React.ReactNode; category: string }> = [
    { id: "overview", label: "Dashboard Overview", icon: <LayoutDashboard className="w-5 h-5" />, category: "Main" },
    { id: "suppliers", label: "Suppliers & Partners", icon: <Users className="w-5 h-5" />, category: "Main" },
    { id: "products", label: "Products & Classification", icon: <Package className="w-5 h-5" />, category: "Main" },
    { id: "shipments", label: "Shipments & Flows", icon: <Truck className="w-5 h-5" />, category: "Main" },
    { id: "documents", label: "Evidence & ICP", icon: <FileText className="w-5 h-5" />, category: "Main" },
    {
      id: "compliance-assessment",
      label: "Compliance Framework",
      icon: <BarChart3 className="w-5 h-5" />,
      category: "Assessment",
    },
    {
      id: "market-compliance",
      label: "Market Regulations",
      icon: <Globe className="w-5 h-5" />,
      category: "Assessment",
    },
    {
      id: "scenario-planning",
      label: "Scenario Planning",
      icon: <MapPin className="w-5 h-5" />,
      category: "Assessment",
    },
    { id: "risk-matrix", label: "Gap Analysis", icon: <AlertTriangle className="w-5 h-5" />, category: "Assessment" },
    { id: "workflow", label: "Data Input & Processing", icon: <Workflow className="w-5 h-5" />, category: "Ops" },
    { id: "reports", label: "Reports & Output", icon: <FileJson className="w-5 h-5" />, category: "Ops" },
    { id: "tasks", label: "Compliance Tasks", icon: <CheckSquare className="w-5 h-5" />, category: "Ops" },
    { id: "esg", label: "ESG & Due Diligence", icon: <Leaf className="w-5 h-5" />, category: "Ops" },
    { id: "settings", label: "Settings & Roles", icon: <Settings className="w-5 h-5" />, category: "Admin" },
  ]

  const categories = ["Main", "Assessment", "Ops", "Admin"]
  const groupedItems = categories.map((cat) => ({
    category: cat,
    items: menuItems.filter((item) => item.category === cat),
  }))

  const rolePermissions = ROLES_PERMISSIONS[userRole as keyof typeof ROLES_PERMISSIONS]

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-screen">
      {/* Header with RSM Logo and Role Selector */}
      <div className="p-5 border-b border-slate-800 space-y-3">
        <div className="flex flex-col items-center gap-2 pb-3 border-b border-slate-700">
          <img src="/images/image.png" alt="RSM Logo" className="h-10 object-contain" />
          <p className="text-xs text-slate-500 font-semibold">Compliance Navigator</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-white">FP</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">Fairphone</h1>
            <p className="text-xs text-slate-400">Trade Compliance</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowRoleMenu(!showRoleMenu)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-left text-slate-200 hover:bg-slate-700 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Current Role</p>
                <p className="text-sm font-medium text-white">{rolePermissions.label}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </button>
          {showRoleMenu && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg z-50 overflow-hidden shadow-lg">
              {Object.entries(ROLES_PERMISSIONS).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => {
                    setUserRole(key as any)
                    setShowRoleMenu(false)
                  }}
                  className={`w-full px-3 py-2.5 text-left text-sm hover:bg-slate-700 transition-all border-b border-slate-700 last:border-0 ${
                    userRole === key ? "bg-green-600/20 text-green-300" : "text-slate-300"
                  }`}
                >
                  <span className="font-medium">{role.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {groupedItems.map((group) => (
          <div key={group.category}>
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">
              {group.category} Views
            </h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left text-sm font-medium ${
                    activeSection === item.id
                      ? "bg-green-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 space-y-3 text-xs text-slate-400">
        <div className="bg-slate-800/50 rounded-lg p-2.5 space-y-1">
          <p className="text-slate-300 font-medium">{userName}</p>
          <p className="text-slate-500">{rolePermissions.label}</p>
        </div>
        <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Live monitoring active</span>
        </div>
        <div className="pt-2 border-t border-slate-700 text-center">
          <p className="text-xs text-slate-500">Powered by RSM</p>
        </div>
      </div>
    </aside>
  )
}
