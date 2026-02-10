"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingHearts } from "@/components/floating-hearts";

const photos = [
  "/images/photo-19.jpeg",
  "/images/photo-2.jpeg",
  "/images/photo-3.jpeg",
  "/images/photo-4.jpeg",
  "/images/photo-5.jpeg",
  "/images/photo-6.jpeg",
  "/images/photo-7.jpeg",
  "/images/photo-8.jpeg",
  "/images/photo-9.jpeg",
  "/images/photo-10.jpeg",
  "/images/photo-11.jpeg",
  "/images/photo-12.jpeg",
  "/images/photo-13.jpeg",
  "/images/photo-14.jpeg",
  "/images/photo-15.jpeg",
  "/images/photo-16.jpeg",
  "/images/photo-17.jpeg",
  "/images/photo-18.jpeg",
  "/images/photo-1.jpeg",
  "/images/photo-20.jpeg",
];

const stories = [
  {
    title: "Where It All Began",
    content: `I remember the first time we met like it was yesterday. The way your eyes lit up when you smiled at the airport,the nervous excitement in the air, my heart was beating too fast to even speak. I remeber being concious when we hugged, i remeber squeezing your hand when we walked together to the taxi point, This was the first picture we took together after we started, once we reached it looked odd to other because of the reception and the setup that single room with no light. Once we entered the room you removed all the stress from me, you know what happened exactly. The funny thing was you booked the bus tickets of next day trip to nanital for morning, haha, the driver was asking willl you reach and all karke. we booked the bus of same night and left to start an unforgattable adventure together. `,
  },
  {
    title: "Dancing in the Light",
    content: `I remember the first time we danced together that was in the mall 51 at sector 51, which was on the opposite road our go to place, we used to go there every time, I wore Brown Shirt and  Black pant. you wore a white dress, we had the seat next to the glass wall, we were able to se the mall from there. you ordered an LIT which you didn't complete and I had finish all the food we ordered, we were so sh to dace together at the first and then danced all day long night. We were so lost in the moment that we didn't even realize that the mall was closing. You told me you always wanted a man like this who would dance together and vibe. How ever this photo was also of one such day when we went to AirLive when we went on garima's birthday, we danced together there as well, this picture was near the bathroom, lift you up with one hand and danced together, you were so happy and I was so happy to see you happy. This was the black t-shirt that you gifted me which you bought from H&M, I looked great in this t-shirt. I still have it and I will always have it, this t-shirt is special to me because it reminds me of you.`,
  },
  {
    title: "Above the Clouds",
    content: `Standing at the edge of the world, with misty mountains stretching endlessly before them, they understood the vastness of their love. She nestled into his embrace as the cool breeze carried whispers of forever. The view was breathtaking, but nothing compared to the way she looked at that moment—hair slightly windswept, eyes bright with wonder. He made a silent promise then: to take her to every mountaintop, every scenic overlook, every beautiful corner of this earth. Because adventures are better when shared, and every journey becomes magical when you have the right travel companion.`,
  },
  {
    title: "Nature's Blessing",
    content: `Surrounded by ancient trees and gentle streams, they discovered that nature has a way of bringing hearts closer. Standing on sun-warmed rocks, with the sound of water flowing around them, they felt like the only two people in existence. She wore elegance like a second skin, and he stood beside her with quiet pride. This day taught them that love flourishes in beautiful settings, but it's the person beside you who makes any place beautiful. The leaves above created a canopy of green, blessing their love with nature's gentle approval.`,
  },
  {
    title: "Reflections of Us",
    content: `In a simple mirror, they captured something extraordinary—the pure, unfiltered joy of being together. Her vibrant colors matched her personality, bright and beautiful, while his arms wrapped around her protectively. These candid moments, caught between getting ready and heading out, are often the most precious. No pose, no pretense—just two people completely comfortable in each other's presence. The mirror reflected not just their image, but the truth of their relationship: playful, loving, and completely real. Sometimes the best photographs are the ones you almost didn't take.`,
  },
  {
    title: "Ancient Love",
    content: `Against the backdrop of centuries-old architecture, their modern love story unfolded. Cheek to cheek, smiles wide and genuine, they proved that some things never change. Love has been celebrated in these very walls for generations, and now their story becomes part of its history. The warm stone seemed to glow with the accumulated joy of countless lovers who stood here before them. Her eyes sparkled with happiness, and his smile spoke of gratitude—for finding her, for this moment, for everything. Heritage sites remind us that love is timeless, and their love will echo through time just like these ancient walls.`,
  },
  {
    title: "Sunset Promises",
    content: `As the sun painted the sky in shades of gold and gray, they stood on the balcony overlooking the world below. The clouds gathered like witnesses to an unspoken vow, and the distant waters reflected the drama of the heavens. She leaned into him, elegant in her flowing skirt, while he held her close, a silent guardian of her dreams. This sunset was different from all others—it marked not an ending, but a beautiful continuation. They watched the day surrender to night and knew that tomorrow would bring another sunrise, another chance to love, another chapter to write together.`,
  },
  {
    title: "Everyday Magic",
    content: `In the ordinary spaces of everyday life, they found extraordinary love. A simple mirror selfie became a testament to their bond—her leaning back into his embrace, his gentle kiss on her head. These unremarkable moments are actually the most remarkable of all. No special occasion, no elaborate setting, just two people choosing each other in the mundane moments of life. Love isn't just about the highlights; it's about wanting to share even the boring Tuesday afternoons with someone. In this photograph, nothing special is happening, and yet everything meaningful is captured.`,
  },
  {
    title: "Sacred Bonds",
    content: `Before the ancient temple, under the watchful eyes of centuries-old stones, they sought blessings for their journey together. The pyramidal structure rose behind them like a prayer reaching toward heaven, and they stood humble and grateful in its shadow. She was draped in soft white, and he stood tall beside her—two souls acknowledging that some things are bigger than themselves. This pilgrimage reminded them that love is sacred, a gift to be honored and cherished. They walked barefoot on the warm stone, grounded in tradition and hopeful for the future.`,
  },
  {
    title: "Under Open Skies",
    content: `With nothing but blue sky above and love between them, they captured a moment of pure bliss. The sun highlighted their happiness, casting a warm glow on their intertwined presence. Her smile was radiant, matching the brightness of the day, and his joy was evident in every line of his face. This photograph speaks of carefree days and spontaneous adventures. They learned that you don't need a reason to celebrate—being together is reason enough. Under the open sky, with the world stretched out around them, they felt infinite. Love, like the sky above them, has no boundaries.`,
  },
  {
    title: "Growing Together",
    content: `Back in that beloved garden, the story continued to unfold. Like the plants around them reaching for sunlight, their love continued to grow. Every visit to this place added new memories, new inside jokes, new reasons to smile. She remained as free-spirited as ever, he as devoted as the first day. Growth in love isn't about changing each other—it's about evolving together while remaining true to yourselves. The garden witnessed their journey, from strangers to soulmates, and it will continue to be a sacred space where their love blooms eternal.`,
  },
  {
    title: "City Lights, Warm Hearts",
    content: `Away from nature, in the heart of the city, their love shone just as bright. The urban setting couldn't dim the warmth between them. Against glass and wood and modern architecture, they proved that love adapts, love thrives, love finds its way. The city night wrapped around them like a secret, and in the midst of strangers, they remained each other's home. Whether surrounded by mountains or buildings, gardens or streets, the constant remained their connection. Love doesn't need a perfect setting—it creates perfection wherever it lands.`,
  },
  {
    title: "Misty Mornings",
    content: `Another mountain, another breathtaking view, another moment frozen in time. The mist rolled over the hills like nature's own mystery novel, and they stood reading it together. Each adventure strengthened their bond, each new place became their place. She fit perfectly against him, as if they were two pieces designed to complete one puzzle. The morning air was fresh with possibilities, and their hearts were full of gratitude. These are the moments that become "remember when" stories, the adventures that define a relationship.`,
  },
  {
    title: "Peaceful Waters",
    content: `By the gentle stream, in the embrace of nature, they found peace. The water flowed around them carrying away worries and leaving only love. She stood graceful as a willow, and he remained her steadfast oak. Together, they created a balance—movement and stillness, energy and calm. The trees whispered approval, the water sang soft melodies, and for a moment, time itself seemed to pause in appreciation. Nature has always been love's greatest accomplice, providing the perfect backdrop for hearts to connect.`,
  },
  {
    title: "Colors of Love",
    content: `Vibrant pink and sunny yellow—her outfit matched her personality: bold, beautiful, and full of life. In the reflection of the mirror, they saw not just themselves but their future—colorful, bright, and infinite. He held her like the precious gift she is, and she leaned into his strength like it was the most natural thing in the world. Love adds color to life's canvas, turning ordinary days into masterpieces. Their story is painted in bold strokes and soft touches, creating something uniquely beautiful.`,
  },
  {
    title: "Heritage Hearts",
    content: `Ancient walls have seen many lovers, but none quite like these two. Their selfie against the historic backdrop captured youth and timelessness in one frame. Her smile could light up ruins, and his presence could make her feel like royalty even in the simplest of settings. They walked through history hand in hand, adding their footsteps to the path of countless lovers before them. Love letters may have been written in these walls centuries ago, and now their photograph becomes a love letter to the future.`,
  },
  {
    title: "Evening Elegance",
    content: `As the dramatic sky performed its daily masterpiece, they posed against the balustrade like characters from a romance novel. The world below seemed small compared to what they had found in each other. Her flowing dress danced with the breeze, and his protective stance spoke louder than words. Evening brings a special kind of magic—the space between day and night, when anything seems possible. In this twilight hour, they were exactly where they were meant to be: together.`,
  },
  {
    title: "Casual Love",
    content: `No fancy clothes, no dramatic scenery—just two people comfortable enough to be completely themselves. Her casual blue matched his easy white, and together they created a picture of relaxed love. The best relationships are the ones where you can show up without pretense, without performance, without fear. This mirror captured their truth: love doesn't require effort when it's real; it just flows naturally, like breathing, like smiling when you see each other's face.`,
  },
  {
    title: "Divine Connection",
    content: `Returning to sacred ground, they renewed their silent vows. The temple stood majestic and eternal, much like their love. Dressed in white purity, they sought blessings not just for themselves but for the journey ahead. Some places hold energy, and this place held theirs—their prayers, their hopes, their dreams. They walked these grounds knowing that their love was blessed, protected, and destined for greatness. Faith in each other and faith in something greater guided their steps.`,
  },
  {
    title: "Forever Begins",
    content: `Under the endless sky, with smiles that could challenge the sun's brightness, they looked toward forever. This final photograph of the collection is not an ending but a beautiful beginning. Every moment captured before led to this—the certainty that they had found their person, their partner, their forever. The story continues beyond these frames, into tomorrows yet to come, into memories yet to be made. But one thing is certain: whatever adventures await, they will face them together, hand in hand, heart to heart, now and always.`,
  },
];

// Create 20 entries by using photos twice
const galleryData = Array.from({ length: 20 }, (_, i) => ({
  photo: photos[i],
  story: stories[i],
}));

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    if (currentIndex < galleryData.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
      setShowStory(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
      setShowStory(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="font-serif text-xl text-foreground">Our Story</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-primary">{currentIndex + 1}</span>
            <span>/</span>
            <span>{galleryData.length}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-4 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-4xl"
          >
            {/* Photo Card */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
              {/* Photo Grid */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src={galleryData[currentIndex].photo || "/placeholder.svg"}
                  alt={`Memory ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                
                {/* Photo counter badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  Chapter {currentIndex + 1}
                </div>
              </div>

              {/* Story Title & Button */}
              <div className="p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 text-balance">
                  {galleryData[currentIndex].story.title}
                </h2>
                
                <Button
                  onClick={() => setShowStory(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Our Story
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary disabled:opacity-30 bg-transparent"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 px-4">
            {galleryData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                  setShowStory(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={goToNext}
            disabled={currentIndex === galleryData.length - 1}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary disabled:opacity-30 bg-transparent"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {showStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowStory(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <img
                  src={galleryData[currentIndex].photo || "/placeholder.svg"}
                  alt={`Memory ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <button
                  onClick={() => setShowStory(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-primary text-sm font-medium">Chapter {currentIndex + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1">
                    {galleryData[currentIndex].story.title}
                  </h3>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 min-h-0">
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {galleryData[currentIndex].story.content}
                </p>
                
                {/* Decorative heart */}
                <div className="flex justify-center mt-8">
                  <Heart className="w-8 h-8 text-primary fill-primary/30" />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 flex-shrink-0 border-t border-border flex justify-between items-center">
                <Button
                  onClick={() => {
                    setShowStory(false);
                    goToPrevious();
                  }}
                  disabled={currentIndex === 0}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    setShowStory(false);
                    goToNext();
                  }}
                  disabled={currentIndex === galleryData.length - 1}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
