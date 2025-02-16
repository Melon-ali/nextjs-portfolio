'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '../projects/ProjectsCard'
import { useEffect, useState } from 'react'
import { TProjectExtended } from '@/src/app/(dashboardLayout)/dashboard/projects/page'

const Work = () => {
  const [projects, setProjects] = useState<TProjectExtended[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('/api/projects', {
          cache: 'no-store',
          next: { revalidate: 0 },
        })
        const data = await res.json()
        setProjects(data.data.slice(0, 3))
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-[400px] animate-pulse bg-muted rounded-lg"
            ></div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="py-32 relative id='work'">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold
                text-content mb-4 text-center"
          >
            Selected Work
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-primary
                to-tertiary rounded-full"
          />
        </motion.div>
        {/* Project Grid */}

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8 relative z-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative h-[500px] rounded-3xl overflow-hidden
                bg-surface border border-white/10 cursor-pointer"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-20 relative z-[5]"
        >
          <Link href={'/projects'}>
            <button
              className="relative px-8 py-3 rounded-full bg-surface
                border border-white/10 hover:border-primary/10 transition-all group"
            >
              <span
                className="text-content transition-colors
                    relative z-[1]"
              >
                View All Projects
              </span>
              <div
                className="absolute inset-0 rounded-full
                    bg-gradient-to-r from-primary/10 to-tertiary/10
                    opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
