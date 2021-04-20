import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogList from '@/components/blog/blog-list'
import ProjectsList from '@/components/projects/projects-list'

import { getRecentPosts } from '@/lib/api'

const links = [
  {
    id: 0,
    name: 'Twitter',
    url: 'https://twitter.com/hrqsn'
  },
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/hrqsn'
  },
  {
    id: 2,
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCGVZESnjE79XBgV9LMZls2g'
  }
]

export default function Home ({ blogs = [], projects = [] }) {
  return (
    <>
      <Head>
        <title>Home | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-md mx-auto px-4'>
        <div className='mt-10 sm:mt-16'>
          <div className='flex items-center'>
            <img src='/img/icon.png' alt='icon' className='w-20 h-20 rounded-full border border-gray-200' />
            <div className='ml-6'>
              <h1 className='text-lg font-semibold'>のーさ</h1>
              <a href='https://twitter.com/hrqsn' target='_blank' rel='noopener noreferrer' className='mt-1 text-sm text-gray-600'>@hrqsn</a>
            </div>
          </div>
          <p className='mt-6'>Web開発者、学生。<br />気ままにWebサービスをつくっています。<br />Minecraftで東京ディズニーリゾート®︎を再現するプロジェクト <a href='https://twitter.com/tdr_mcpe_server' target='_blank' rel='noopener noreferrer' className='mt-1 underline text-primary'>Imagination Server</a> 共同創始者。<br />アニメとジェットコースターが好き。最近ギターを始めました。</p>
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Links</h1>
          <div className='my-6 flex space-x-4'>
            {links.map((link, i) => (
              <p key={i}>
                <a href={link.url} className='underline text-primary' target='_blank' rel='noopener noreferrer'>{link.name}</a>
              </p>
            ))}
          </div>
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Projects</h1>
          <div className='my-6 space-y-4'>
            <ProjectsList items={projects} />
          </div>
          <Link href='/projects'>
            <a className='text-sm'>もっと見る →</a>
          </Link>
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Blog</h1>
          <div className='my-6 space-y-4'>
            <BlogList items={blogs} />
          </div>
          <Link href='/blog'>
            <a className='text-sm'>もっと見る →</a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const recentBlog = await getRecentPosts('blog', [
    'title',
    'subtitle',
    'date',
    'slug'
  ])
  const recentProjects = await getRecentPosts('projects', [
    'title',
    'subtitle',
    'date',
    'slug'
  ])

  return {
    props: {
      blogs: recentBlog,
      projects: recentProjects
    }
  }
}
