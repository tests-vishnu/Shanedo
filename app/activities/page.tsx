"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineNav } from "@/components/valentine-nav"
import { PageTransition } from "@/components/page-transition"

const dateIdeas = [
  "Stargazing picnic under the night sky",
  "Cook a romantic dinner together",
  "Movie marathon with cozy blankets",
  "Sunset walk on the beach",
  "Create a scrapbook of our memories",
  "Have a spa day at home",
  "Dance to our favorite songs",
  "Write love letters to each other",
  "Plan our dream vacation",
  "Take cute photos together",
]

const loveQuestions = [
  "What was your first impression of me?",
  "What's your favorite memory of us?",
  "What do you love most about our relationship?",
  "Where do you see us in 5 years?",
  "What's something you've always wanted to tell me?",
  "What's the best gift I've ever given you?",
  "What song reminds you of us?",
  "What's your favorite thing we do together?",
]

const compliments = [
  "You have the most beautiful smile!",
  "Your kindness inspires me every day",
  "You make my heart skip a beat",
  "I'm so lucky to have you",
  "You're my favorite person in the world",
  "Your laugh is my favorite sound",
  "You make everything better",
  "I fall more in love with you every day",
]

export default function ActivitiesPage() {
  const [currentDateIdea, setCurrentDateIdea] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null)
  const [currentCompliment, setCurrentCompliment] = useState<string | null>(null)
  const [couponRevealed, setCouponRevealed] = useState(false)

  const getRandomItem = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)]
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
                  Fun Activities
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Interactive games and activities to make this Valentine{"'"}s Day extra special
                </p>
              </motion.div>
            </section>

            <section className="grid md:grid-cols-2 gap-6 py-8">
              {/* Date Idea Generator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Date Ideas</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Need inspiration? Spin the wheel of romantic date ideas!
                </p>
                <AnimatePresence mode="wait">
                  {currentDateIdea && (
                    <motion.div
                      key={currentDateIdea}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-secondary rounded-xl p-4 mb-4"
                    >
                      <p className="text-foreground font-medium text-center">{currentDateIdea}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setCurrentDateIdea(getRandomItem(dateIdeas))}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform"
                >
                  Generate Date Idea
                </button>
              </motion.div>

              {/* Love Questions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Love Questions</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Spark meaningful conversations with these questions!
                </p>
                <AnimatePresence mode="wait">
                  {currentQuestion && (
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-accent/20 rounded-xl p-4 mb-4"
                    >
                      <p className="text-foreground font-medium text-center">{currentQuestion}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setCurrentQuestion(getRandomItem(loveQuestions))}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform"
                >
                  Get a Question
                </button>
              </motion.div>

              {/* Compliment Generator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Compliments</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Everyone deserves to hear something sweet!
                </p>
                <AnimatePresence mode="wait">
                  {currentCompliment && (
                    <motion.div
                      key={currentCompliment}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-primary/10 rounded-xl p-4 mb-4"
                    >
                      <p className="text-foreground font-medium text-center text-lg">{currentCompliment}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setCurrentCompliment(getRandomItem(compliments))}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform"
                >
                  Get a Compliment
                </button>
              </motion.div>

              {/* Love Coupon */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">Love Coupon</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  A special redeemable coupon just for you!
                </p>
                <AnimatePresence mode="wait">
                  {couponRevealed ? (
                    <motion.div
                      key="coupon"
                      initial={{ rotateY: 90 }}
                      animate={{ rotateY: 0 }}
                      className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-6 mb-4 border-2 border-dashed border-primary"
                    >
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Love Coupon</p>
                      <p className="text-foreground font-serif text-xl font-semibold mb-2">
                        One Free Hug
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Redeemable anytime, anywhere. No expiration date.
                      </p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground text-center">
                          Valid forever with lots of love
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unrevealed"
                      className="bg-secondary rounded-xl p-6 mb-4 text-center"
                    >
                      <p className="text-muted-foreground">Click below to reveal your special coupon!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setCouponRevealed(true)}
                  disabled={couponRevealed}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {couponRevealed ? "Coupon Revealed!" : "Reveal Coupon"}
                </button>
              </motion.div>
            </section>

            {/* Romantic Prompts */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="py-12"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Write Your Own Love Story
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  Take turns completing these romantic prompts together:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  {[
                    "The first time I saw you, I thought...",
                    "My favorite thing about us is...",
                    "I knew I loved you when...",
                    "Our future together looks like...",
                  ].map((prompt, index) => (
                    <div
                      key={index}
                      className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border"
                    >
                      <p className="text-foreground font-medium">{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </PageTransition>
      </main>
    </>
  )
}
