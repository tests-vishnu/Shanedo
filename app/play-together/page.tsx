"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ValentineNav } from "@/components/valentine-nav"
import { FloatingHearts } from "@/components/floating-hearts"
import { RotateCcw, Heart, Trophy, Sparkles } from "lucide-react"

type Player = "X" | "O" | null
type Board = Player[]

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function PlayTogether() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X")
  const [scores, setScores] = useState({ X: 0, O: 0 })
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "draw">("playing")
  const [winner, setWinner] = useState<Player>(null)
  const [winningLine, setWinningLine] = useState<number[]>([])

  const checkWinner = useCallback((squares: Board): { winner: Player; line: number[] } | null => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: combo }
      }
    }
    return null
  }, [])

  const handleClick = (index: number) => {
    if (board[index] || gameStatus !== "playing") return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const result = checkWinner(newBoard)
    if (result) {
      setWinner(result.winner)
      setWinningLine(result.line)
      setGameStatus("won")
      setScores((prev) => ({
        ...prev,
        [result.winner as "X" | "O"]: prev[result.winner as "X" | "O"] + 1,
      }))
    } else if (newBoard.every((cell) => cell !== null)) {
      setGameStatus("draw")
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setGameStatus("playing")
    setWinner(null)
    setWinningLine([])
  }

  const resetScores = () => {
    setScores({ X: 0, O: 0 })
    resetGame()
  }

  const HeartX = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )

  const HeartO = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-accent">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <ValentineNav />

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Play Together</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Love Tic Tac Toe
            </h1>
            <p className="text-muted-foreground">
              A game of hearts - may the best lover win!
            </p>
          </motion.div>

          {/* Score Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-4 mb-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-6 h-6">
                    <HeartX />
                  </div>
                  <span className="font-semibold text-foreground">Player 1</span>
                </div>
                <p className="text-2xl font-bold text-primary">{scores.X}</p>
              </div>
              <div className="px-4">
                <Trophy className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-6 h-6">
                    <HeartO />
                  </div>
                  <span className="font-semibold text-foreground">Player 2</span>
                </div>
                <p className="text-2xl font-bold text-accent">{scores.O}</p>
              </div>
            </div>
          </motion.div>

          {/* Turn Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            {gameStatus === "playing" && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5">
                  {currentPlayer === "X" ? <HeartX /> : <HeartO />}
                </div>
                <span className="text-muted-foreground">
                  {currentPlayer === "X" ? "Player 1" : "Player 2"}&apos;s turn
                </span>
              </div>
            )}
          </motion.div>

          {/* Game Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-4 md:p-6 shadow-lg"
          >
            <div className="grid grid-cols-3 gap-2 md:gap-3 aspect-square max-w-sm mx-auto">
              {board.map((cell, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleClick(index)}
                  whileHover={!cell && gameStatus === "playing" ? { scale: 1.05 } : {}}
                  whileTap={!cell && gameStatus === "playing" ? { scale: 0.95 } : {}}
                  className={`aspect-square rounded-xl border-2 transition-all flex items-center justify-center p-3 md:p-4 ${
                    winningLine.includes(index)
                      ? "border-primary bg-primary/10"
                      : cell
                        ? "border-border bg-secondary/50"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50 cursor-pointer"
                  }`}
                  disabled={!!cell || gameStatus !== "playing"}
                >
                  <AnimatePresence mode="wait">
                    {cell && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full h-full"
                      >
                        {cell === "X" ? <HeartX /> : <HeartO />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Game Result */}
          <AnimatePresence>
            {gameStatus !== "playing" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6"
              >
                <div className="bg-card rounded-2xl border border-border p-6 text-center shadow-sm">
                  {gameStatus === "won" ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="w-16 h-16 mx-auto mb-3"
                      >
                        {winner === "X" ? <HeartX /> : <HeartO />}
                      </motion.div>
                      <h2 className="font-serif text-2xl text-foreground mb-2">
                        {winner === "X" ? "Player 1" : "Player 2"} Wins!
                      </h2>
                      <p className="text-muted-foreground">
                        Love conquers all! Time for a victory kiss?
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center gap-2 mb-3">
                        <div className="w-8 h-8">
                          <HeartX />
                        </div>
                        <Heart className="w-8 h-8 text-muted-foreground" />
                        <div className="w-8 h-8">
                          <HeartO />
                        </div>
                      </div>
                      <h2 className="font-serif text-2xl text-foreground mb-2">
                        It&apos;s a Tie!
                      </h2>
                      <p className="text-muted-foreground">
                        Great minds think alike - you&apos;re perfect together!
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mt-6"
          >
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              New Game
            </button>
            <button
              onClick={resetScores}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Reset Scores
            </button>
          </motion.div>

          {/* Romantic Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-8 font-serif italic"
          >
            "In love and games, being together is the real win."
          </motion.p>
        </div>
      </div>
    </main>
  )
}
