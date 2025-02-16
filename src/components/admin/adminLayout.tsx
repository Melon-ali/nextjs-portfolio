'use client'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/src/hooks/use-sidebar'
import { useStore } from '@/src/hooks/use-store'
import { Sidebar } from './sidebar'

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { getOpenState, settings } = sidebar
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-screen bg-gray-900 text-white transition-[margin-left] ease-in-out duration-300',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-72'),
        )}
      >
        {children}
      </main>
    </>
  )
}
