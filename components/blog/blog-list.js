import Link from 'next/link'
import Moment from 'react-moment'

export default function BlogList ({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <Link href='/blog/[slug]' as={`/blog/${item.slug}`} key={i}>
          <a className='block'>
            <div>
              <h1 className='font-semibold'>{item.title}</h1>
              <p className='mt-1 text-sm text-gray-600 word-clamp'>{item.subtitle}</p>
              <p className='mt-1.5 text-sm text-gray-400'><Moment format='YYYY-MM-DD HH:mm'>{item.date}</Moment></p>
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}
