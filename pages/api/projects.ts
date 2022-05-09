import { addDoc, getDocs, query, where } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { projectsCollection, store } from 'util/firebase'
import secured from 'util/securedAPI'

const route = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  await secured(req, res, async (session: Session) => {
    if (req.method === 'GET') await get(session, res)
  })
}
const get = async (session: Session, res: NextApiResponse<any>) => {
  const q = query(
    projectsCollection,
    where('user_id', '==', (session as any).id)
  )
  const rawData = await getDocs(q)
  const data = rawData.docs.map((doc) => doc.data())
  res.send(data)
}
export default route
