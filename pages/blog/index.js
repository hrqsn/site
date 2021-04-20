import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

import BlogList from '@/components/blog/blog-list'

import { getAllPosts } from '@/lib/api'

export default function Writings ({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Blog | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-8 sm:mt-12'>
          <div>
            <figure className='sm:-mx-16'>
              <section className='line-animation-wrapper rounded-md'>
                <div className='line-animation-inner'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <h1 className='text-2xl font-bold line-anim-word'>Blog</h1>
                  </div>
                </div>
              </section>
            </figure>
            <div className='my-8 space-y-4'>
              <BlogList items={posts} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts('blog', [
    'slug',
    'title',
    'subtitle',
    'date'
  ])

  return {
    props: {
      posts: posts
    }
  }
}
