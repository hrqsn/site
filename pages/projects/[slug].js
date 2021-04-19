import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import markdownToHtml from '@/lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '@/lib/api'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsHeader from '@/components/projects/projects-header'
import ProjectsBody from '@/components/projects/projects-body'

export default function Project ({ post }) {
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
        <ProjectsHeader
          title={post.title}
          url={post.url}
        />
        <ProjectsBody
          coverImage={post.coverImage}
          content={post.content}
        />
      </article>

      <Footer />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug('projects', params.slug, [
    'title',
    'slug',
    'content',
    'url',
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
  const posts = getAllPosts('projects', ['slug'])

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
