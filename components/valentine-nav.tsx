"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Heart } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/question", label: "The Sawal" },
  { href: "/gallery", label: "Aloo-bum" },
  { href: "/love-notes", label: "Loab Notes" },
  { href: "/activities", label: "Mastiii" },
  { href: "/vibe-together", label: "Ganne" },
  { href: "/play-together", label: "Khel" },
  { href: "/bubu-dudu", label: "Bubu Dudu" },
]

export function ValentineNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary group-hover:scale-110 transition-transform"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="font-serif text-xl font-semibold text-foreground">Shanedo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 md:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-72 bg-card shadow-xl border-l border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                <div className="flex items-center gap-2 mb-8">
                  <Heart className="w-6 h-6 text-primary fill-primary" />
                  <span className="font-serif text-xl text-foreground">Menu</span>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium transition-all",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Decorative hearts */}
                <div className="mt-12 flex justify-center gap-3">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-primary/40 fill-primary/20"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
