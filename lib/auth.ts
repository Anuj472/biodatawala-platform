import { authConfig } from '@/lib/auth-config'

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
