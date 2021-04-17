import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WritingBody from '@/components/postRenderer'
import Moment from 'react-moment'
import { ChevronLeft } from 'react-feather'

import Error from 'next/error'
import { getAllWritingsWithSlug, getWritingBySlug } from '@/lib/cms'

export default function Blog ({ post }) {
  if (!post) {
    return <Error statusCode={404} />
  }

  console.log(post)
  return (
    <>
      <Head>
        <title>{post.fields.title} | Hal Sakuragi</title>
      </Head>

      <Header />
      
      <div className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <Link href='/writing'>
            <a className='text-sm text-gray-600'>← 戻る</a>
          </Link>
          <h1 className='mt-4 text-xl font-semibold'>{post.fields.title}</h1>
          <p className='mt-1 text-sm text-gray-600'><Moment format="YYYY-MM-DD HH:mm">{post.fields.date}</Moment></p>
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
  const posts = await getAllWritingsWithSlug()
  return {
    paths: posts.map(({ slug }) => `/writing/${slug}`) ?? [],
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const post = await getWritingBySlug(params.slug)
  return {
    props: {
      post: post
    }
  }
}
