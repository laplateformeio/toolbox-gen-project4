import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { actions } from "../../../services/userService";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await actions.connectUser({
          identifier: credentials.email,
          password: credentials.password,
        });
        if (user.user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],

  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60,
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.accesToken = user.jwt;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.token = token.accesToken;
      session.user = token.user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
