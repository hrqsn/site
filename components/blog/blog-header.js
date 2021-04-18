import { useRouter } from 'next/router'
import Moment from 'react-moment'

export default function Blogeader({ title, coverImage, date }) {
  const router = useRouter()
  return (
    <>
      <a className='text-gray-600' onClick={() => router.back()}>← 戻る</a>
      <h1 className='mt-4 text-xl font-semibold'>{title}</h1>
      <p className='mt-1 text-sm text-gray-600'><Moment format='YYYY-MM-DD HH:mm'>{date}</Moment></p>
    </>
  )
}
