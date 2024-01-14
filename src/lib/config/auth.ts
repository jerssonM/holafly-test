import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { ROUTES } from "@/lib/constants";
import { login } from "@/lib/services/auth.service";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: ROUTES.LOGIN,
    signOut: ROUTES.LOGIN,
    error: ROUTES.LOGIN,
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const response = await login(credentials!);

        if (!response) return null;

        return {
          id: String(response.id),
          email: response.email,
          name: response.name,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url }) {
      return url;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
};
