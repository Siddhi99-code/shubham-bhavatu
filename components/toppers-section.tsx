"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TopperCard from "./topper-card"

const toppers = [
  {
    id: 1,
    name: "Priya Sawant",
    percentage: "98.5%",
    year: "2024",
    standard: "10th",
    image: "/young-indian-female-student--happy--achievement-ce.jpg",
  },
  {
    id: 2,
    name: "Rahul Patil",
    percentage: "97.2%",
    year: "2024",
    standard: "12th Science",
    image: "/young-indian-male-student--confident--academic-ach.jpg",
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    percentage: "96.8%",
    year: "2024",
    standard: "10th",
    image: "/young-indian-female-student--studious--academic-su.jpg",
  },
  {
    id: 4,
    name: "Amit Deshmukh",
    percentage: "95.5%",
    year: "2023",
    standard: "12th Commerce",
    image: "/young-indian-male-student--smart--business-attire-.jpg",
  },
  {
    id: 5,
    name: "Pooja Sharma",
    percentage: "94.8%",
    year: "2023",
    standard: "10th",
    image: "/young-indian-female-student--bright-smile--educati.jpg",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    percentage: "93.2%",
    year: "2023",
    standard: "12th Science",
    image: "/young-indian-male-student--science-enthusiast--lab.jpg",
  },
]

export default function ToppersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="toppers" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Pride</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our Star Toppers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our students who have excelled in their academics.
          </p>
        </motion.div>

        {/* Toppers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TopperCard topper={topper} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
