"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ValentineNav } from "@/components/valentine-nav"
import { FloatingHearts } from "@/components/floating-hearts"
import { Heart, Sparkles, Star, MessageCircleHeart, Zap, Coffee, Moon, Sun, Pizza, Music, Gift, Camera } from "lucide-react"

// Bubu (Pink Bear) and Dudu (Gray Bear) SVG components
const Bubu = ({ className = "", mood = "happy" }: { className?: string; mood?: "happy" | "love" | "shy" | "excited" }) => {
  const expressions: Record<string, { eyes: string; mouth: string }> = {
    happy: { eyes: "^  ^", mouth: "w" },
    love: { eyes: "♥  ♥", mouth: "3" },
    shy: { eyes: ">  <", mouth: "~" },
    excited: { eyes: "*  *", mouth: "D" },
  }
  
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Ears */}
      <circle cx="25" cy="20" r="15" fill="#FFB6C1" />
      <circle cx="75" cy="20" r="15" fill="#FFB6C1" />
      <circle cx="25" cy="20" r="8" fill="#FF69B4" />
      <circle cx="75" cy="20" r="8" fill="#FF69B4" />
      {/* Face */}
      <circle cx="50" cy="55" r="40" fill="#FFB6C1" />
      {/* Blush */}
      <ellipse cx="25" cy="60" rx="8" ry="5" fill="#FF69B4" opacity="0.5" />
      <ellipse cx="75" cy="60" rx="8" ry="5" fill="#FF69B4" opacity="0.5" />
      {/* Eyes */}
      <text x="50" y="52" textAnchor="middle" fontSize="12" fill="#333">{expressions[mood].eyes}</text>
      {/* Mouth */}
      <text x="50" y="72" textAnchor="middle" fontSize="14" fill="#333">{expressions[mood].mouth}</text>
    </svg>
  )
}

const Dudu = ({ className = "", mood = "happy" }: { className?: string; mood?: "happy" | "love" | "shy" | "cool" }) => {
  const expressions: Record<string, { eyes: string; mouth: string }> = {
    happy: { eyes: "•  •", mouth: "‿" },
    love: { eyes: "♥  ♥", mouth: "u" },
    shy: { eyes: "-  -", mouth: "." },
    cool: { eyes: "⌐  ⌐", mouth: "~" },
  }
  
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Ears */}
      <circle cx="25" cy="20" r="15" fill="#808080" />
      <circle cx="75" cy="20" r="15" fill="#808080" />
      <circle cx="25" cy="20" r="8" fill="#606060" />
      <circle cx="75" cy="20" r="8" fill="#606060" />
      {/* Face */}
      <circle cx="50" cy="55" r="40" fill="#808080" />
      {/* Blush */}
      <ellipse cx="25" cy="60" rx="8" ry="5" fill="#FF6B6B" opacity="0.4" />
      <ellipse cx="75" cy="60" rx="8" ry="5" fill="#FF6B6B" opacity="0.4" />
      {/* Eyes */}
      <text x="50" y="52" textAnchor="middle" fontSize="12" fill="#333">{expressions[mood].eyes}</text>
      {/* Mouth */}
      <text x="50" y="72" textAnchor="middle" fontSize="14" fill="#333">{expressions[mood].mouth}</text>
    </svg>
  )
}

const stickers = [
  { id: 1, name: "Morning Cuddles", bubuMood: "shy" as const, duduMood: "love" as const, text: "Good morning, my love", icon: Sun },
  { id: 2, name: "Coffee Date", bubuMood: "happy" as const, duduMood: "happy" as const, text: "Coffee tastes better with you", icon: Coffee },
  { id: 3, name: "Pizza Night", bubuMood: "excited" as const, duduMood: "happy" as const, text: "You're the cheese to my pizza", icon: Pizza },
  { id: 4, name: "Stargazing", bubuMood: "love" as const, duduMood: "love" as const, text: "You're my favorite star", icon: Star },
  { id: 5, name: "Dance Party", bubuMood: "excited" as const, duduMood: "cool" as const, text: "Let's dance forever", icon: Music },
  { id: 6, name: "Surprise!", bubuMood: "excited" as const, duduMood: "shy" as const, text: "I got you something!", icon: Gift },
  { id: 7, name: "Selfie Time", bubuMood: "happy" as const, duduMood: "cool" as const, text: "Say cheese!", icon: Camera },
  { id: 8, name: "Goodnight", bubuMood: "shy" as const, duduMood: "love" as const, text: "Sweet dreams, my bear", icon: Moon },
]

const loveQuotes = [
  "I love you more than honey!",
  "You make my heart go brrr...",
  "Let's be weird together forever",
  "You're my favorite notification",
  "I like you more than pizza... and that's saying a lot!",
  "You're the Bubu to my Dudu",
  "Home is wherever I'm with you",
  "I'd share my snacks with you",
]

export default function BubuDuduUniverse() {
  const [loveMeter, setLoveMeter] = useState(75)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [selectedSticker, setSelectedSticker] = useState<number | null>(null)
  const [hugCount, setHugCount] = useState(0)
  const [showHeartBurst, setShowHeartBurst] = useState(false)
  const [bubuPosition, setBubuPosition] = useState(0)
  const [duduPosition, setDuduPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleHug = () => {
    setBubuPosition(20)
    setDuduPosition(-20)
    setHugCount((prev) => prev + 1)
    setLoveMeter((prev) => Math.min(100, prev + 5))
    setShowHeartBurst(true)
    
    setTimeout(() => {
      setBubuPosition(0)
      setDuduPosition(0)
      setShowHeartBurst(false)
    }, 1000)
  }

  const handleKiss = () => {
    setLoveMeter((prev) => Math.min(100, prev + 10))
    setShowHeartBurst(true)
    setTimeout(() => setShowHeartBurst(false), 1000)
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <ValentineNav />

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <MessageCircleHeart className="w-4 h-4" />
              <span className="text-sm font-medium">Bubu Dudu Universe</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Our Cute Bear World
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Welcome to the adorable universe of Bubu & Dudu - just like us!
            </p>
          </motion.div>

          {/* Main Bears Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-lg mb-8"
          >
            {/* Bears Display */}
            <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-6">
              <motion.div
                animate={{ x: bubuPosition }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-24 h-24 md:w-32 md:h-32"
              >
                <Bubu className="w-full h-full" mood={showHeartBurst ? "love" : "happy"} />
                <p className="text-center text-sm font-medium text-primary mt-2">Bubu</p>
              </motion.div>

              {/* Heart between them */}
              <AnimatePresence>
                {showHeartBurst && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute"
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                        animate={{
                          scale: [0, 1, 0.5],
                          x: Math.cos((i / 8) * Math.PI * 2) * 60,
                          y: Math.sin((i / 8) * Math.PI * 2) * 60,
                          opacity: [1, 1, 0],
                        }}
                        transition={{ duration: 0.8 }}
                        className="absolute"
                      >
                        <Heart className="w-4 h-4 text-primary fill-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary" />
              </motion.div>

              <motion.div
                animate={{ x: duduPosition }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-24 h-24 md:w-32 md:h-32"
              >
                <Dudu className="w-full h-full" mood={showHeartBurst ? "love" : "happy"} />
                <p className="text-center text-sm font-medium text-muted-foreground mt-2">Dudu</p>
              </motion.div>
            </div>

            {/* Quote Carousel */}
            <div className="bg-secondary/50 rounded-2xl p-4 mb-6 min-h-[60px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center font-medium text-foreground"
                >
                  &quot;{loveQuotes[currentQuote]}&quot;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Interaction Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHug}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Send Hug ({hugCount})
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleKiss}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium"
              >
                <Heart className="w-4 h-4" />
                Send Kiss
              </motion.button>
            </div>

            {/* Love Meter */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <Zap className="w-4 h-4" /> Love Meter
                </span>
                <span className="text-sm font-bold text-primary">{loveMeter}%</span>
              </div>
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${loveMeter}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <Heart className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sticker Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="font-serif text-2xl text-foreground text-center mb-6">
              Sticker Collection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stickers.map((sticker, index) => (
                <motion.button
                  key={sticker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSticker(selectedSticker === sticker.id ? null : sticker.id)}
                  className={`bg-card rounded-2xl border-2 p-4 transition-all ${
                    selectedSticker === sticker.id
                      ? "border-primary shadow-lg"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex justify-center gap-1 mb-2">
                    <Bubu className="w-10 h-10" mood={sticker.bubuMood} />
                    <Dudu className="w-10 h-10" mood={sticker.duduMood} />
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <sticker.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{sticker.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">{sticker.text}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-3xl border border-border p-6 shadow-sm"
          >
            <h2 className="font-serif text-xl text-foreground text-center mb-4">
              Bubu & Dudu Facts
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Bubu (Pink Bear)", facts: ["Loves cuddles", "Gets shy easily", "Always hungry", "The dramatic one"] },
                { title: "Dudu (Gray Bear)", facts: ["Protective boyfriend", "Gives the best hugs", "Loves Bubu's drama", "The calm one"] },
              ].map((bear, idx) => (
                <div key={idx} className="bg-secondary/30 rounded-xl p-4">
                  <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    {idx === 0 ? <Bubu className="w-6 h-6" mood="happy" /> : <Dudu className="w-6 h-6" mood="happy" />}
                    {bear.title}
                  </h3>
                  <ul className="space-y-1">
                    {bear.facts.map((fact, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Heart className="w-3 h-3 text-primary fill-primary" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-8 font-serif italic"
          >
            "Just like Bubu and Dudu, our love story is the cutest!"
          </motion.p>
        </div>
      </div>
    </main>
  )
}
