import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

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
