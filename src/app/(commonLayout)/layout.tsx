import Footer from '@/src/components/shared/Footer'
import Navbar from '@/src/components/shared/navbar'
import { authOptions } from '@/src/utils/authOptions'
import { getServerSession } from 'next-auth'

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar session={session} />
        {children}
      <Footer />
    </div>
  )
}

export default CommonLayout
