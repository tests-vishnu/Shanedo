"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"
import { FloatingHearts } from "@/components/floating-hearts"
import { Eye, EyeOff, Heart, Phone, Lock } from "lucide-react"

export function LoginPage() {
  const { login } = useAuth()
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!mobile.trim()) {
      setError("Please enter your mobile number")
      return
    }

    if (!password.trim()) {
      setError("Please enter your password")
      return
    }

    const success = login(mobile, password)
    if (!success) {
      setError("Invalid credentials. Only special hearts can enter!")
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: isShaking ? [0, -10, 10, -10, 10, 0] : 0
        }}
        transition={{ 
          duration: 0.6,
          x: { duration: 0.5 }
        }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-card/90 backdrop-blur-md rounded-3xl shadow-2xl border border-border p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
            >
              <Heart className="w-10 h-10 text-primary fill-primary" />
            </motion.div>
            
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Welcome, My Love
            </h1>
            <p className="text-muted-foreground">
              Enter your details to unlock our special place
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground font-medium">
                Mobile Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-border bg-background/50 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 rounded-xl border-border bg-background/50 focus:border-primary focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive text-center bg-destructive/10 rounded-lg py-2 px-4"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Enter Our Love Story
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-8">
            Made with love, just for you
          </p>
        </div>
      </motion.div>
    </div>
  )
}
