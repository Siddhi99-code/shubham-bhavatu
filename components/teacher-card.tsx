"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Teacher {
  id: number
  name: string
  qualification: string
  subjects: string[]
  image: string
}

interface TeacherCardProps {
  teacher: Teacher
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-card-foreground">{teacher.name}</h3>
        <p className="text-primary text-sm font-medium mt-1">{teacher.qualification}</p>

        {/* Subjects */}
        <div className="mt-4 flex flex-wrap gap-2">
          {teacher.subjects.map((subject) => (
            <span key={subject} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      >
        <div className="text-center text-primary-foreground p-6">
          <h3 className="font-serif text-xl font-bold">{teacher.name}</h3>
          <p className="text-sm opacity-90 mt-1">{teacher.qualification}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {teacher.subjects.map((subject) => (
              <span key={subject} className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full">
                {subject}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
