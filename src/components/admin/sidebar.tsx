'use client'
import { cn } from '@/lib/utils'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStore } from '@/src/hooks/use-store'
import { useSidebar } from '@/src/hooks/use-sidebar'
import { SidebarToggle } from './sidebar-toggle'
import { Button } from '../ui/button'
import { Menu } from './menu'

export function Sidebar() {
  const [mounted, setMounted] = useState(false)
  const sidebar = useStore(useSidebar, (x) => x)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (!sidebar) return null
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-gray-950 text-white',
        !getOpenState() ? 'w-[90px]' : 'w-72',
        settings.disabled && 'hidden',
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-3 overflow-y-auto shadow-md"
      >
        <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1',
            !getOpenState() ? 'translate-x-1' : 'translate-x-0',
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center justify-center gap-4">
            
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                !getOpenState()
                  ? '-translate-x-96 opacity-0 hidden'
                  : 'translate-x-0 opacity-100',
              )}
            >
              Melon Ali
            </h1>
          </Link>
        </Button>
        <Menu isOpen={getOpenState()} />
      </div>
    </aside>
  )
}
