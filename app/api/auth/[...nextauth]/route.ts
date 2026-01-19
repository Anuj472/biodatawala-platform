import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { authConfig } from '@/lib/auth-config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: Add real credential validation
        if (credentials?.email === 'demo@biodatawala.in' && credentials?.password === 'demo123') {
          return {
            id: 'demo-user',
            email: 'demo@biodatawala.in',
            name: 'Demo User',
          }
        }
        return null
      },
    }),
  ],
})
