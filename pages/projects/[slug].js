import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WritingBody from '@/components/postRenderer'

import Error from 'next/error'
import { getAllProjectsWithSlug, getProjectBySlug } from '@/lib/cms'

export default function Project ({ post }) {
  if (!post) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.fields.title} | Hal Sakuragi</title>
      </Head>

      <Header />
      
      <div className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <Link href='/projects'>
            <a className='text-sm text-gray-600'>← 戻る</a>
          </Link>
          <h1 className='mt-4 text-xl font-semibold'>{post.fields.title}</h1>
          <div className='mt-6'>
            <WritingBody content={post.fields.body} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getAllProjectsWithSlug()
  return {
    paths: posts.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const post = await getProjectBySlug(params.slug)
  return {
    props: {
      post: post
    }
  }
}
