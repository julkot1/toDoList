import NextAuth, { Awaitable, Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { store } from '../../../util/firebase'
import {
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  runTransaction,
} from 'firebase/firestore'
import { JWT } from 'next-auth/jwt'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_ID,
      clientSecret: <string>process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: <string>process.env.FACEBOOK_ID,
      clientSecret: <string>process.env.FACEBOOK_SECRET,
    }),
  ],
  adapter: FirebaseAdapter({
    db: store,
    collection,
    query,
    getDocs,
    where,
    limit,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    runTransaction,
  }),
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      return Promise.resolve(baseUrl)
    },
    session: async (params: { session: Session; user: User; token: JWT }) => {
      params.session.id = params.user.id
      return Promise.resolve(params.session)
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})
