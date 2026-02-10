"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineNav } from "@/components/valentine-nav"
import { PageTransition } from "@/components/page-transition"

const noMessages = [
  "Not possible, please try another option!",
  "Are you sure? Look at that Yes button...",
  "My heart says you meant Yes!",
  "Oops! That button doesn't work!",
  "Try again... but maybe click Yes?",
  "The No button is broken, sorry!",
  "Nice try! But I only accept Yes!",
  "That's not the answer I was looking for...",
]

export default function QuestionPage() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noButtonSize, setNoButtonSize] = useState(1)
  const [yesButtonSize, setYesButtonSize] = useState(1)

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1)
    setNoButtonSize((prev) => Math.max(0.5, prev - 0.1))
    setYesButtonSize((prev) => Math.min(2, prev + 0.15))
  }

  const handleYesClick = () => {
    setYesPressed(true)
  }

  return (
    <>
      <FloatingHearts />
      <ValentineNav />
      <main className="min-h-screen pt-20 pb-12 px-4 relative z-10 flex items-center justify-center">
        <PageTransition>
          <div className="max-w-2xl mx-auto text-center">
            <AnimatePresence mode="wait">
              {!yesPressed ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mb-8"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary mx-auto"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </motion.div>

                  <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-8">
                    Will you be my Valentine?
                  </h1>

                  <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <motion.button
                      onClick={handleYesClick}
                      style={{ scale: yesButtonSize }}
                      whileHover={{ scale: yesButtonSize * 1.05 }}
                      whileTap={{ scale: yesButtonSize * 0.95 }}
                      className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    >
                      Yes!
                    </motion.button>

                    <motion.button
                      onClick={handleNoClick}
                      style={{ scale: noButtonSize }}
                      whileHover={{ scale: noButtonSize * 1.05 }}
                      whileTap={{ scale: noButtonSize * 0.95 }}
                      className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-xl font-semibold border border-border hover:bg-muted transition-colors"
                    >
                      No
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {noCount > 0 && (
                      <motion.div
                        key={noCount}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-card border border-border rounded-2xl p-6 max-w-md mx-auto"
                      >
                        <p className="text-lg text-foreground font-medium">
                          {noMessages[(noCount - 1) % noMessages.length]}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Attempts: {noCount}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="celebration"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                  >
                    <svg
                      width="150"
                      height="150"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary mx-auto"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </motion.div>

                  <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                    Yay! I knew you{"'"}d say yes!
                  </h1>

                  <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                    You{"'"}ve made me the happiest person in the world! This Valentine{"'"}s Day is going to be absolutely magical.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/love-notes"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                      Read Love Notes
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </Link>
                    <Link
                      href="/activities"
                      className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold border border-border hover:bg-muted transition-colors"
                    >
                      See Activities
                    </Link>
                  </div>

                  {/* Celebration confetti effect */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          x: "50vw",
                          y: "50vh",
                          scale: 0,
                        }}
                        animate={{
                          x: `${Math.random() * 100}vw`,
                          y: `${Math.random() * 100}vh`,
                          scale: [0, 1, 0],
                          rotate: Math.random() * 360,
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          delay: Math.random() * 0.5,
                        }}
                        className="absolute"
                      >
                        <svg
                          width={16 + Math.random() * 16}
                          height={16 + Math.random() * 16}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-primary"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PageTransition>
      </main>
    </>
  )
}
