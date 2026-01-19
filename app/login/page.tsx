import { redirect } from 'next/navigation'

// Login is disabled - redirect to homepage
export default function LoginPage() {
  redirect('/')
}
