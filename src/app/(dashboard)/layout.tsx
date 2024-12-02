import { AppSidebar } from '@/components/app-sidebar'
import { NavigationBar } from '@/components/navigation-bar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <NavigationBar />
        {children}
      </main>
    </SidebarProvider>
  )
}
