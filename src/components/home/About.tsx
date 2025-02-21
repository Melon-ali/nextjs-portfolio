'use client'
import Link from 'next/link'
import React, { useState, ReactNode } from 'react'

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

// framer motion
import { motion } from 'framer-motion'

// counter
import CountUp from 'react-countup'
import { fadeIn } from '@/variants'

interface InfoItem {
  title: string
  stage?: string
  icons?: ReactNode[]
}

interface AboutSection {
  title: string
  info: InfoItem[]
}

const aboutData: AboutSection[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiTailwindcss key="tailwind" />,
          <FaNodeJs key="nodejs" />,
          <SiExpress key="express" />,
          <SiMongodb key="mongodb" />,
        ],
      },
      {
        title: 'React js, Express js, Node Js and Mongodb',
        icons: [
          <FaReact key="react" />,
          <SiExpress key="express" />,
          <FaNodeJs key="nodejs" />,
          <SiMongodb key="mongodb" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'BA in Political Science - Masters',
        stage: 'National University (2018 - 2019)',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Zero Point Computing',
        stage: '2023 Jun - 2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Reactive Accelerator Course - Web Developer',
        stage: 'Learn with Sumit - LWS, Batch-1',
      },
      {
        title: 'Complete We Development',
        stage: 'Programing Hero - Level-1, Batch-4',
      },
      {
        title: 'Full Stack Developer ( MERN )',
        stage: 'Programing Hero - Level-2, Batch-4',
      },
    ],
  },
]

const About: React.FC = () => {
  const [index, setIndex] = useState<number>(0)

  return (
    <div className=" bg-gray-900 text-white py-10 text-center xl:text-left max-w-7xl mx-auto px-6">
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
          About Me
        </h2>
        <div
          className="w-24 h-1 bg-gradient-to-r from-primary
                to-tertiary rounded-full"
        />
      </motion.div>

      <div className=" h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            02 years ago, I began freelancing as a Developer. Since then, I have
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {[10, 10, 10, 2].map((num, i) => (
                <div
                  key={i}
                  className="relative flex-1 after:w-[1px] after:top-0 after:right-8"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={num} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {
                      [
                        'Years of experience',
                        'Satisfied clients',
                        'Finished projects',
                        'Winning awards',
                      ][i]
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-3 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                key={itemIndex}
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div>- {item.stage}</div>}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex relative z-[5]"
          >
            <button
              className="relative px-8 py-3 rounded-full bg-surface
                border border-white/10 hover:border-primary/10 transition-all group"
            >
              <Link
                target="_blank"
                href="/Melon-Resume.pdf"
                rel="noreferrer"
                download
                className="text-content transition-colors
                    relative z-[1]"
              >
                Hire Me
              </Link>
              <div
                className="absolute inset-0 rounded-full
                    bg-gradient-to-r from-primary/10 to-tertiary/10
                    opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
