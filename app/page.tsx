"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineNav } from "@/components/valentine-nav"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <>
      <FloatingHearts />
      <ValentineNav />
      <main className="min-h-screen pt-20 pb-12 px-4 relative z-10">
        <PageTransition>
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <section className="text-center py-16 md:py-24">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary mx-auto animate-pulse"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6"
              >
                <span className="text-balance">Happy Valentine{"'"}s Day</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                A special place created just for you, filled with love, warmth, and all the things that make my dil phisal gaya
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/question"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                >
                  Shanedo Start
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </Link>
              </motion.div>
            </section>

            {/* Feature Cards */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-12">
              {[
                {
                  title: "The Sawal",
                  description: "A very important sawal awaits...",
                  href: "/question",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  title: "Our Aloo-Bum",
                  description: "Memories in photographs",
                  href: "/gallery",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  ),
                },
                {
                  title: "Loab Notes",
                  description: "Sweet heartfelt messages",
                  href: "/love-notes",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                },
                {
                  title: "Mastiii",
                  description: "Fun things together",
                  href: "/activities",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ),
                },
                {
                  title: "Gane Sune?",
                  description: "Sing love songs",
                  href: "/vibe-together",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  ),
                },
                {
                  title: "Khel Together",
                  description: "Tic Tac Toe of love",
                  href: "/play-together",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  ),
                },
                {
                  title: "Bubu Dudu",
                  description: "Cute bear universe",
                  href: "/bubu-dudu",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  ),
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <Link
                    href={card.href}
                    className="block p-4 md:p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group h-full"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-lg md:text-2xl font-semibold text-foreground mb-1 md:mb-2">{card.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{card.description}</p>
                  </Link>
                </motion.div>
              ))}
            </section>

            {/* Romantic Quote */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center py-16 border-t border-border"
            >
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic max-w-2xl mx-auto">
                {"\""}Iss Duniya m, mere jaise tumhare liye koi nhi. Iss Duniya m, tumhare liye mere jaisa koi nhi{"\""}
              </blockquote>
              <p className="text-muted-foreground mt-4">- Aapka Dudu Raja</p>
            </motion.section>
          </div>
        </PageTransition>
      </main>
    </>
  )
}
