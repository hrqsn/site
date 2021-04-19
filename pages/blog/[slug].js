import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import markdownToHtml from '@/lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '@/lib/api'

import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogHeader from '@/components/blog/blog-header'
import BlogBody from '@/components/blog/blog-body'

export default function Blog ({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.title} | Hal Sakuragi</title>
      </Head>

      <Header />

      <article className='mt-16 max-w-screen-sm mx-auto px-4'>
        <BlogHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <BlogBody content={post.content} />
      </article>

      <Footer />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug('blog', params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts('blog', ['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
