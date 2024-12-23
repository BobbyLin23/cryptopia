export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        {children}
      </div>
    </div>
  )
}
