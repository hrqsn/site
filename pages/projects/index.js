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
        <div className='mt-8 sm:mt-12'>
          <figure className='sm:-mx-16'>
            <section className='line-animation-wrapper rounded-md'>
              <div className='line-animation-inner'>
                <div className='w-full h-full flex items-center justify-center'>
                  <h1 className='text-2xl font-bold line-anim-word'>Projects</h1>
                </div>
              </div>
            </section>
          </figure>
          <div className='my-8 space-y-4'>
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
    'slug'
  ])

  return {
    props: {
      posts: posts
    }
  }
}
