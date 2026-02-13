"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineNav } from "@/components/valentine-nav"
import { PageTransition } from "@/components/page-transition"

const loveNotes = [
  {
    id: 1,
    title: "My Favorite Person",
    message: "Your are the favorite person that I want to spend all my time with. Seeing you smile is the best part of my day, and being with you feels like home.",
    color: "bg-primary/10",
  },
  {
    id: 2,
    title: "Why I Love You",
    message: "I feel safe and happy when I'm with you. you won't judge me for my flaws, and you love me for who I am. Make me better person and I want to be the best for you. I love you more than words can express.",
    color: "bg-accent/20",
  },
  {
    id: 3,
    title: "My Promise",
    message: "I promise to be a better person, to be there in all sorrow and happiness, so that we are happy and lifes feels easy. No matter what life throws at us, I will always choose you and our love.",
    color: "bg-secondary",
  },
  {
    id: 4,
    title: "You Are...",
    message: "You are the reason I believe in love, make me come this far and gives me happiness even after so much effort and time. Forever grateful for you.",
    color: "bg-primary/10",
  },
  {
    id: 5,
    title: "Together Forever",
    message: "In a world full of temporary things, you are my forever. I choose you today, tomorrow, and for all the days that follow.",
    color: "bg-accent/20",
  },
  {
    id: 6,
    title: "My Heart",
    message: "My heart knew it was you before my mind could catch up. You complete me in ways I never knew I needed.",
    color: "bg-secondary",
  },
]

export default function LoveNotesPage() {
  const [selectedNote, setSelectedNote] = useState<typeof loveNotes[0] | null>(null)
  const [revealedNotes, setRevealedNotes] = useState<Set<number>>(new Set())

  const handleNoteClick = (note: typeof loveNotes[0]) => {
    setRevealedNotes((prev) => new Set([...prev, note.id]))
    setSelectedNote(note)
  }

  return (
    <>
      <FloatingHearts />
      <ValentineNav />
      <main className="min-h-screen pt-20 pb-12 px-4 relative z-10">
        <PageTransition>
          <div className="max-w-4xl mx-auto">
            <section className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Love Notes
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Click on each envelope to reveal a special message written just for you
                </p>
              </motion.div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              {loveNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNoteClick(note)}
                    className={`w-full p-6 ${note.color} rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all text-left group cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {revealedNotes.has(note.id) ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        )}
                      </div>
                      {revealedNotes.has(note.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {note.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {revealedNotes.has(note.id) ? "Click to read again" : "Click to reveal"}
                    </p>
                  </button>
                </motion.div>
              ))}
            </section>

            {/* Progress indicator */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center py-8"
            >
              <p className="text-muted-foreground mb-2">
                Notes revealed: {revealedNotes.size} / {loveNotes.length}
              </p>
              <div className="w-full max-w-xs mx-auto bg-secondary rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(revealedNotes.size / loveNotes.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.section>
          </div>
        </PageTransition>
      </main>

      {/* Modal for reading notes */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`${selectedNote.color} bg-card border border-border rounded-3xl p-8 max-w-lg w-full shadow-2xl`}
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mb-6"
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary mx-auto"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {selectedNote.title}
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  {selectedNote.message}
                </p>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Close with Love
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
