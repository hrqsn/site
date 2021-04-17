import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

import { getWritings } from '@/lib/cms'

export default function Writings ({ writings = [] }) {
  return (
    <>
      <Head>
        <title>Writing | Hal Sakuragi</title>
      </Head>

      <Header />

      <main className='max-w-screen-sm mx-auto px-4'>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Writing</h1>
          <div className='my-5 space-y-4'>
          {writings.map((writing, i) => (
            <Link href={`/writing/[slug]`} as={`/writing/${writing.fields.slug}`} key={i}>
              <a>
                <div>
                  <h1 className='font-semibold'>{writing.fields.title}</h1>
                  <p className='mt-1 text-sm text-gray-600'>{writing.fields.subtitle}</p>
                  <p className='mt-1.5 text-sm text-gray-400'><Moment format="YYYY-MM-DD HH:mm">{writing.fields.date}</Moment></p>
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
  const writings = await getWritings()

  return {
    props: {
      writings: writings
    }
  }
}
