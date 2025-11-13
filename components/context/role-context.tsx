"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export type UserRole = "procurement" | "logistics" | "compliance" | "management" | "rsm-advisor"

interface RoleContextType {
  userRole: UserRole
  setUserRole: (role: UserRole) => void
  userName: string
  setUserName: (name: string) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>("compliance")
  const [userName, setUserName] = useState("Sarah Chen")

  return (
    <RoleContext.Provider value={{ userRole, setUserRole, userName, setUserName }}>{children}</RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (!context) {
    throw new Error("useRole must be used within RoleProvider")
  }
  return context
}
