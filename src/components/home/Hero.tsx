'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ParticleCanvas } from '../../hooks/particle'
import { MdOutlineFileDownload } from 'react-icons/md'
import Link from 'next/link'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6"
            >
              MERN Stack
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-content/80 mb-8"
            >
              Hello! I am Melon Ali, a passionate React.JS, Node.JS and Next.JS
              developer. I develop web applications. My core skill is based on
              JavaScript and I love to do most of the things using JavaScript.
            </motion.p>
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex relative z-[5]"
              >
                <button
                  className="relative px-8 py-3 rounded-full bg-surface
                border border-white/10 hover:border-primary/10 transition-all group button-hover"
                >
                  <Link
                    href={'/projects'}
                    className="text-content transition-colors
                    relative z-[1]"
                  >
                    Explore Work
                  </Link>
                  <div
                    className="absolute inset-0 rounded-full
                    bg-gradient-to-r from-primary/10 to-tertiary/10
                    opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex relative z-[5]"
              >
                <a
                  target="_blank"
                  href="/Melon-Resume.pdf"
                  rel="noreferrer"
                  download
                  className="button-hover"
                >
                  <button
                    className="relative px-8 py-3 rounded-full bg-surface
                border border-white/10 hover:border-primary/10 transition-all group text-white flex gap-2"
                  >
                    <MdOutlineFileDownload size={18} />
                    Download Resume
                    <div
                      className="absolute inset-0 rounded-full
                    bg-gradient-to-r from-primary/10 to-tertiary/10
                    opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="relative w-full aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="absoulte inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 opacity-50"
              />
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm"
              >
                <Image
                  src="/avater.png"
                  alt="Avatar"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackk/60 to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="text-2xl font-bold text-content">
                    Based in <br />
                    <motion.span
                      className="black bg-gradient-to-r from-primary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror',
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      Rajshahi, Bangladesh
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
