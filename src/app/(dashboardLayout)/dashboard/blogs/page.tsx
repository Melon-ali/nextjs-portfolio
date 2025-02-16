import BlogManagement from '@/src/components/blogs/BlogManagement'
import { TBlog } from '@/src/types/types'

export const metadata = {
  title: 'Portfolio | Manage Blogs',
  description: 'Manage Blogs',
}
export type TExtendedBlog = TBlog & {
  _id: string
}
export default function ManageBlogs() {
  return <BlogManagement />
}
