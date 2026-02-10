"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: (mobile: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const VALID_CREDENTIALS = {
  mobiles: ["6201002422", "9390042102"],
  password: "Shaan8877!!"
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (mobile: string, password: string): boolean => {
    const isValidMobile = VALID_CREDENTIALS.mobiles.includes(mobile)
    const isValidPassword = password === VALID_CREDENTIALS.password
    
    if (isValidMobile && isValidPassword) {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
