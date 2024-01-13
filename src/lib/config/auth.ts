import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { ROUTES } from "@/lib/constants";
import { login } from "@/lib/services/login.service";

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

        if (!response?.user) return null;

        return {
          id: String(response.user.id),
          email: response.user.email,
          name: response.user.name,
          token: response.token,
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
