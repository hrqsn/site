import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

import { getProjects } from '@/lib/cms'

export default function Projects ({ projects = [] }) {
  return (
    <>
      <Head>
        <title>Projects | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Projects</h1>
          <div className='my-5 space-y-4'>
          {projects.map((project, i) => (
            <Link href={`/projects/[slug]`} as={`/projects/${project.fields.slug}`} key={i}>
              <a>
                <div key={i}>
                  <h1 className='font-semibold'>{project.fields.title}</h1>
                  <p className='mt-1 text-sm text-gray-600'>{project.fields.subtitle}</p>
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
  const projects = await getProjects()

  return {
    props: {
        projects: projects
    }
  }
}
