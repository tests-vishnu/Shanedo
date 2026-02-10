"use client"

import { useAuth } from "@/components/auth-provider"
import { LoginPage } from "@/components/login-page"
import type { ReactNode } from "react"

export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return <>{children}</>
}
