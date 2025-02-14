// import ProjectManagement from "@/components/projects-components/ProjectManagement";

import ProjectManagement from '@/src/components/projects/ProjectManagement'
import { TProject } from '@/src/types/types'

// import { TProject } from "@/types/types";
export const metadata = {
  title: 'Portfolio | Manage Projects',
  description: 'Manage your projects',
}

export type TProjectExtended = TProject & {
  _id: string
}
export default function ManageProjects() {
  return <ProjectManagement />
}
