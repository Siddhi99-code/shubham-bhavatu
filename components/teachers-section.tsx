"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TeacherCard from "./teacher-card"

const teachers = [
  {
    id: 1,
    name: "Mr. Rajesh Patil",
    qualification: "M.Sc. Mathematics",
    subjects: ["Mathematics", "Statistics"],
    image: "/professional-indian-male-teacher--glasses--mathema.jpg",
  },
  {
    id: 2,
    name: "Mrs. Priya Sharma",
    qualification: "M.A. English",
    subjects: ["English", "Grammar"],
    image: "/professional-indian-female-teacher--english-litera.jpg",
  },
  {
    id: 3,
    name: "Mr. Sunil Deshmukh",
    qualification: "M.Sc. Physics",
    subjects: ["Physics", "Science"],
    image: "/professional-indian-male-science-teacher--laborato.jpg",
  },
  {
    id: 4,
    name: "Mrs. Anjali Kulkarni",
    qualification: "M.Sc. Chemistry",
    subjects: ["Chemistry", "Science"],
    image: "/professional-indian-female-chemistry-teacher--lab-.jpg",
  },
  {
    id: 5,
    name: "Mr. Vikram Joshi",
    qualification: "M.Sc. Biology",
    subjects: ["Biology", "Science"],
    image: "/professional-indian-male-biology-teacher--educatio.jpg",
  },
  {
    id: 6,
    name: "Mrs. Sneha Pawar",
    qualification: "M.A. Marathi",
    subjects: ["Marathi", "Hindi"],
    image: "/professional-indian-female-language-teacher--tradi.jpg",
  },
]

export default function TeachersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="teachers" className="py-24 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Team</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Meet Our Expert Teachers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of experienced educators is committed to providing quality education and personalized
            attention to every student.
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TeacherCard teacher={teacher} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
