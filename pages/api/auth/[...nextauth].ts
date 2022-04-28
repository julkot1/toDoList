import NextAuth from 'next-auth'
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
})
