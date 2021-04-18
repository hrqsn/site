import { useRouter } from 'next/router'

export default function ProjectsHeader({ title, url }) {
  const router = useRouter()
  return (
    <>
      <a className='text-gray-600' onClick={() => router.back()}>← 戻る</a>
      <h1 className='mt-4 text-xl font-semibold'>{title}</h1>
      {url ? <a href={url} target='_blank' rel='noopener noreferrer' className='inline-block underline mt-1 text-sm text-gray-600'>{url}</a> : <p className='inline-block mt-1 text-sm text-gray-600'>運営終了</p>}
    </>
  )
}
