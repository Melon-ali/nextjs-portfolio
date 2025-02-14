import AdminPanelLayout from "@/src/components/admin/adminLayout"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminPanelLayout>{children}</AdminPanelLayout>
}

export default DashboardLayout
