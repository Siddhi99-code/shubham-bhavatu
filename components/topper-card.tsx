"use client"

import { motion } from "framer-motion"

interface Topper {
  id: number
  name: string
  percentage: string
  year: string
  standard: string
  image: string
}

interface TopperCardProps {
  topper: Topper
}

export default function TopperCard({ topper }: TopperCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img src={topper.image || "/placeholder.svg"} alt={topper.name} className="w-full h-full object-cover" />
        </div>

        {/* Percentage Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg">
          {topper.percentage}
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-card-foreground">
          {topper.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="font-serif text-xl font-bold text-card-foreground">{topper.name}</h3>
        <p className="text-primary font-medium mt-1">{topper.standard}</p>

        {/* Achievement Badge */}
        <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-sm font-medium">Star Performer</span>
        </div>
      </div>
    </motion.div>
  )
}
