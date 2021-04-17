import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

import { getRecentWritings, getRecentProjects } from '@/lib/cms'

export default function Home ({ writings = [], projects = [] }) {
  return (
    <>
      <Head>
        <title>Home | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-md mx-auto px-4'>
        <div className='mt-10'>
          <div className='flex items-center'>
            <img src='/img/icon.png' alt='icon' className='w-20 h-20 rounded-full border border-gray-200' />
            <div className='ml-6'>
              <h1 className='text-lg font-semibold'>のーさ</h1>
              <a href='https://twitter.com/hrqsn' target='_blank' rel='noopener noreferrer' className='mt-1 text-sm text-gray-600'>@hrqsn</a>
            </div>
          </div>
          <p className='mt-6'>Webエンジニア, 学生.<br />気ままにWebサービスをつくっています.<br />Minecraftで東京ディズニーリゾート®︎を再現するプロジェクト <a href='https://twitter.com/tdr_mcpe_server' target='_blank' rel='noopener noreferrer' className='mt-1 underline text-gray-600'>Imagination Server</a> 共同創始者.<br />アニメとジェットコースターが好き. 最近ギターを始めました.</p>
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Projects</h1>
          <div className='my-5 space-y-4'>
            {projects.map((project, i) => (
              <div key={i}>
                <h1 className='font-semibold'>{project.fields.title}</h1>
                <p className='mt-1 text-sm text-gray-600'>{project.fields.subtitle}</p>
              </div>
            ))}
          </div>
          <Link href='/projects'>
            <a className='text-sm'>もっと見る →</a>
          </Link>
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Writing</h1>
          <div className='my-5 space-y-4'>
          {writings.map((writing, i) => (
            <div key={i}>
              <h1 className='font-semibold'>{writing.fields.title}</h1>
              <p className='mt-1 text-sm text-gray-600'>{writing.fields.subtitle}</p>
              <p className='mt-1.5 text-sm text-gray-400'><Moment format="YYYY-MM-DD HH:mm">{writing.fields.date}</Moment></p>
            </div>
          ))}
          </div>
          <Link href='/writing'>
            <a className='text-sm'>もっと見る →</a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const recentWritings = await getRecentWritings()
  const recentProjects = await getRecentProjects()

  return {
    props: {
      writings: recentWritings,
      projects: recentProjects
    }
  }
}
