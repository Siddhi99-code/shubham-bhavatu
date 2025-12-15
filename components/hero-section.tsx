"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-classroom-with-students-studying--warm-ligh.jpg" alt="Classroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-card font-medium">Admissions Open for 2025-26</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-tight text-balance"
          >
            Shubham Bhavatu
            <span className="block text-accent">Classes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-card/80 leading-relaxed max-w-lg"
          >
            Quality education from 1st to 12th standard. Building strong foundations for brighter futures across Lavel,
            Gunade & Lote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Enroll Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm text-card border border-card/30 px-8 py-4 rounded-full font-semibold hover:bg-card/20 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-8"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-card">500+</p>
              <p className="text-sm text-card/70">Students</p>
            </div>
            <div className="w-px h-12 bg-card/30" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-card">4</p>
              <p className="text-sm text-card/70">Teachers</p>
            </div>
            <div className="w-px h-12 bg-card/30" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-card">3</p>
              <p className="text-sm text-card/70">Branches</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-card/60">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-card/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-card/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
