"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ValentineNav } from "@/components/valentine-nav"
import { FloatingHearts } from "@/components/floating-hearts"
import { Play, Pause, SkipBack, SkipForward, Heart, Music, Volume2 } from "lucide-react"

const songs = [
  {
    title: "Dooron Dooron",
    artist: "Paresh Pahuja",
    videoId: "y_GVDbfaiwQ",
    cover: "https://i.ytimg.com/vi/y_GVDbfaiwQ/hqdefault.jpg",
  },
  {
    title: "Tere Liye",
    artist: "Atif Aslam",
    videoId: "wKp5UQBlFs0",
    cover: "https://i.ytimg.com/vi/wKp5UQBlFs0/hqdefault.jpg",
  },
  {
    title: "Raanjhanaa ",
    artist: "A.R. Rahman",
    videoId: "O2M-Ob08Vf8",
    cover: "https://i.ytimg.com/vi/O2M-Ob08Vf8/hqdefault.jpg",
  },
  {
    title: "Tu Jaane Na",
    artist: "Atif Aslam",
    videoId: "P8PWN1OmZOA",
    cover: "https://i.ytimg.com/vi/P8PWN1OmZOA/hqdefault.jpg",
  },
  {
    title: "Qayde Se",
    artist: "Arijit Singh",
    videoId: "QRwLbf3PwO8",
    cover: "https://i.ytimg.com/vi/QRwLbf3PwO8/hqdefault.jpg",
  },
  {
    title: "Soniyo",
    artist: "Sonu Nigam",
    videoId: "scn0s3MW0Ac",
    cover: "https://i.ytimg.com/vi/scn0s3MW0Ac/hqdefault.jpg",
  },
  {
    title: "Hale Dil",
    artist: "Harshit Saxena",
    videoId: "acdKE2hja7w",
    cover: "https://i.ytimg.com/vi/acdKE2hja7w/hqdefault.jpg",
  },
  {
    title: "Dhun",
    artist: "Arijit Singh",
    videoId: "xH4daEJvaZY",
    cover: "https://i.ytimg.com/vi/xH4daEJvaZY/hqdefault.jpg",
  },
  {
    title: "Jhol",
    artist: "Maanu, Annural Khalid",
    videoId: "pBLZIYTNrPc",
    cover: "https://i.ytimg.com/vi/pBLZIYTNrPc/hqdefault.jpg",
  },
  {
    title: "Dagabaaz Re",
    artist: "Rahat Fateh Ali Khan",
    videoId: "rSuVm402d_8",
    cover: "https://i.ytimg.com/vi/rSuVm402d_8/hqdefault.jpg",
  },
]

export default function VibeTogether() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [likedSongs, setLikedSongs] = useState<number[]>([])

  const currentSong = songs[currentSongIndex]

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length)
    setIsPlaying(true)
  }

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(true)
  }

  const toggleLike = (index: number) => {
    setLikedSongs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <ValentineNav />

      <div className="pt-20 pb-12 px-3 md:px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Music className="w-4 h-4" />
              <span className="text-sm font-medium">Vibe Together</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Our Love Playlist
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sing along to these beautiful Bollywood love songs together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card shadow-lg border border-border mx-auto w-full max-w-full">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    key={currentSong.videoId}
                    src={`https://www.youtube.com/embed/${currentSong.videoId}?autoplay=${isPlaying ? 1 : 0}&rel=0`}
                    title={currentSong.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>

              {/* Now Playing Card */}
              <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={currentSong.cover || "/placeholder.svg"}
                      alt={currentSong.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <Volume2 className="w-6 h-6 text-primary-foreground animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{currentSong.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
                  </div>
                  <button
                    onClick={() => toggleLike(currentSongIndex)}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        likedSongs.includes(currentSongIndex)
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={prevSong}
                    className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <SkipBack className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-4 rounded-full bg-primary hover:bg-primary/90 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Play className="w-6 h-6 text-primary-foreground" />
                    )}
                  </button>
                  <button
                    onClick={nextSong}
                    className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <SkipForward className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Playlist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b border-border">
                <h2 className="font-serif text-xl text-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                  Love Songs
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {songs.length} romantic tracks
                </p>
              </div>
              <div className="max-h-[400px] lg:max-h-[500px] overflow-y-auto">
                {songs.map((song, index) => (
                  <motion.button
                    key={song.videoId}
                    onClick={() => {
                      setCurrentSongIndex(index)
                      setIsPlaying(true)
                    }}
                    whileHover={{ backgroundColor: "var(--secondary)" }}
                    className={`w-full p-3 flex items-center gap-3 transition-colors border-b border-border/50 last:border-0 ${
                      currentSongIndex === index ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={song.cover || "/placeholder.svg"}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                      {currentSongIndex === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-primary/40 flex items-center justify-center"
                        >
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-primary-foreground rounded-full"
                                animate={{
                                  height: [8, 16, 8],
                                }}
                                transition={{
                                  duration: 0.5,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p
                        className={`font-medium truncate ${
                          currentSongIndex === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {song.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {likedSongs.includes(index) && (
                        <Heart className="w-4 h-4 text-primary fill-primary" />
                      )}
                      <span className="text-xs text-muted-foreground w-6">{index + 1}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Romantic Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="font-serif text-lg text-muted-foreground italic">
              "Music is what feelings sound like, and with you, every song is a love song."
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
