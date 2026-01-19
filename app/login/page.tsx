import { redirect } from 'next/navigation'

// No login required - redirect directly to dashboard
export default function LoginPage() {
  redirect('/dashboard')
}
