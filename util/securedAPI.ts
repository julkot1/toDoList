import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

const secured = async (
  req: NextApiRequest,
  res: NextApiResponse<any>,
  func: Function
) => {
  const session = await getSession({ req })

  if (session) await func(session)
  else res.status(401)

  res.end()
}
export default secured
