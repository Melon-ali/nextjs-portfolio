import { SheetMenu } from '@/src/components/admin/sheet-menu'

interface NavbarProps {
  title: string
}

export function DashboardNavbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-gray-900 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold text-white">{title}</h1>
        </div>
      </div>
    </header>
  )
}
