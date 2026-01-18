/**
 * Authentication Configuration
 * 
 * This file contains the configuration for NextAuth.js authentication.
 * To implement authentication, install NextAuth.js:
 * 
 * npm install next-auth @auth/prisma-adapter
 * 
 * Then create app/api/auth/[...nextauth]/route.ts
 */

export const authConfig = {
  providers: [
    // Google OAuth
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    // Email/Password
    {
      id: 'credentials',
      name: 'Email',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
    },
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/error',
    verifyRequest: '/verify',
    newUser: '/welcome',
  },
  callbacks: {
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

/**
 * Database Configuration
 * 
 * Recommended: Supabase (PostgreSQL)
 * Install: npm install @supabase/supabase-js
 * 
 * Alternative: MongoDB with Prisma
 * Install: npm install @prisma/client prisma
 */

export const databaseConfig = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};
