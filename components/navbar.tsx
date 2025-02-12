'use client'

import { motion } from 'framer-motion'
import MenuItem from './menuItem'
import { FacebookIcon, GithubIcon, LinkedInIcon } from './social-icons'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'

const navItems = [
  { name: 'Projects', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact', href: '#contact' },
  { name: 'Dashboard', href: '#dashboard' },
]

const socialLinks = {
  github: 'https://github.com/Melon-ali',
  linkeding: 'https://www.linkedin.com/in/melon-ali',
  facebook: 'https://www.facebook.com/md.melon.581',
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                {' '}
                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  MA
                </span>
              </div>
            </div>

            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
              Melon Ali
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 bg-background/80 px-4 py-2 rounded-full border border-white/5 shadow-lg">
              {navItems.map((items, i) => (
                <MenuItem key={items.name} index={i} href={items.href}>
                  {items.name}
                </MenuItem>
              ))}
            </div>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.linkeding}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.facebook}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <FacebookIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <button className="w-5 text-content/80 group-hover:text-primary transition-colors">login</button>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-content/80" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-content/80" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-content/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 flex gap-4">
              <a
                href={socialLinks.github}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.linkeding}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={socialLinks.facebook}
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
              >
                <FacebookIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </a>
              <button className="w-5 text-content/80 group-hover:text-primary transition-colors">login</button>
            </div>
            
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
