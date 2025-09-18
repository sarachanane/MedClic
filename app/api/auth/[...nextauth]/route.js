
import User from "@/models/user.model";
import { connect } from "@/models/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email", placeholder: "email" },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter an username and password')
        }
        console.log(credentials.email);
        await connect();
        const user = await User.findOne({ email: credentials.email });
        console.log(user);
        if (!user) {
          throw new Error('No user found')
        }
        console.log(credentials?.password);
        console.log(user?.password);

        if (user?.password != credentials?.password) {
          console.log("wrong");
          throw new Error('Wrong password')
        }

        if (user?.status == "suspended") {
          console.log("wrong");
          throw new Error('You Are Suspended')
        }
        console.log("good");
        // const token = await Token({ _id: user._id}, "365d");
        // console.log("token is ",token);
        // user.token = token ;

        return user;

      },
    }),
  ],
  callbacks: {

    async jwt({ token, user, session, trigger }) {
      // console.log({ token, user, session });

      if (trigger == "update") {
        const keys = Object.keys(session);
        keys.forEach((key) => {
          token[key] = session[key]
        })

      }
      if (user) {
        return {_id:user._id,email:user.email,type:user.type,data:user.data,fullname:user.fullname,phone:user?.phone,type:user?.type,createdAt:user?.createdAt,address:user?.address }
      }
      return token;

    },
    async session({ session, token, user }) {
      // console.log({ token, user, session });
      if (token) {
        return {
          user: { ...token }
        };
      }
      return session;

    }

  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60
  },
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



