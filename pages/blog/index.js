import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

import { getAllPosts } from '@/lib/api'

export default function Writings ({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Blog | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <h1 className='text-xl font-bold'>Blog</h1>
          <div className='my-6 space-y-4'>
            {posts.map((post, i) => (
              <Link href='/blog/[slug]' as={`/blog/${post.slug}`} key={i}>
                <a className='block'>
                  <div>
                    <h1 className='font-semibold'>{post.title}</h1>
                    <p className='mt-1 text-sm text-gray-600'>{post.subtitle}</p>
                    <p className='mt-1.5 text-sm text-gray-400'><Moment format='YYYY-MM-DD HH:mm'>{post.date}</Moment></p>
                  </div>
                </a>
              </Link>
            ))}
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
