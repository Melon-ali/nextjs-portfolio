'use client'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/src/components/ui/button'
import { Menu } from '@/src/components/admin/menu'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/src/components/ui/sheet'
import { useEffect, useState } from 'react'

export function SheetMenu() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8 text-white" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <button className="flex justify-center items-center pb-2 pt-1">
            <Link href="/" className="flex items-center justify-center gap-4">
              <SheetTitle className="font-bold text-lg">Melon Ali</SheetTitle>
              <SheetDescription className="sr-only"></SheetDescription>
            </Link>
          </button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}
