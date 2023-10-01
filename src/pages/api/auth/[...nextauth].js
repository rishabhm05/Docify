import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter"

import { db } from "../../../../fireBase";

  
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      // ...add more providers here
    ],
    secret: process.env.SECRET
    //adapter:FirestoreAdapter(db)

   
  })