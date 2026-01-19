import { redirect } from 'next/navigation'

// Dashboard is disabled - redirect to homepage
// All features are free and don't require accounts
export default function DashboardPage() {
  redirect('/')
}
