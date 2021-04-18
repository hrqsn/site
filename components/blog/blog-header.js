import Link from 'next/link'
import { useRouter } from 'next/router'
import Moment from 'react-moment'

export default function Blogeader({ title, coverImage, date }) {
  const router = useRouter()
  return (
    <>
      <Link href='/blog'>
        <a className='text-gray-600'>← Blog</a>
      </Link>
      <h1 className='mt-4 text-xl font-semibold'>{title}</h1>
      <p className='mt-1 text-sm text-gray-600'><Moment format='YYYY-MM-DD HH:mm'>{date}</Moment></p>
    </>
  )
}
