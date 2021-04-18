import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsList from '@/components/projects/projects-list'

import { getAllPosts } from '@/lib/api'

export default function Projects ({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Projects | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <h1 className='text-xl font-bold'>Projects</h1>
          <div className='my-6 space-y-4'>
            <ProjectsList items={posts} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts('projects', [
    'title',
    'subtitle',
    'date',
    'slug',
  ])

  return {
    props: {
      posts: posts
    }
  }
}

