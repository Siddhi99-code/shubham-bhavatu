"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const branches = [
  { name: "Lavel", address: "Main Road, Lavel Village, Maharashtra" },
  { name: "Gunade", address: "School Lane, Gunade, Maharashtra" },
  { name: "Lote", address: "MIDC Road, Lote Parshuram, Maharashtra" },
]

const values = [
  {
    title: "Our Mission",
    description:
      "To provide accessible, quality education that empowers students to achieve academic excellence and personal growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    description:
      "To be the leading educational institution that nurtures future leaders through innovative teaching methods.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Our Values",
    description:
      "Integrity, Excellence, Innovation, and Student-Centric approach form the foundation of our teaching philosophy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Building Futures Through Education
          </h2>
        </motion.div>

        {/* Owner Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/Shubham-Ambre.jpg"
                alt="Shubham Ambre - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Shubham Ambre</h3>
            <p className="text-primary font-medium mb-6">Founder & Director | B.E. Mechanical</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Shubham Bhavatu Classes was founded with a vision to provide quality education accessible to all students.
              With a strong engineering background and passion for teaching, Mr. Shubham Ambre has built an institution
              that focuses on conceptual learning and holistic development of students.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our classes cater to students from 1st to 12th standard across three branches, ensuring personalized
              attention and comprehensive academic support. We believe every student has the potential to excel, and our
              mission is to help them realize it.
            </p>
            <div className="flex flex-wrap gap-4">
              {branches.map((branch, index) => (
                <div key={branch.name} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-sm font-medium text-secondary-foreground">{branch.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-serif text-xl font-bold text-card-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
