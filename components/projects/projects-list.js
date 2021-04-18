import Link from 'next/link'

export default function ProjectsList ({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <Link href='/projects/[slug]' as={`/projects/${item.slug}`} key={i}>
          <a className='block'>
            <div key={i}>
              <h1 className='font-semibold'>{item.title}</h1>
              <p className='mt-1 text-sm text-gray-600 word-clamp'>{item.subtitle}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}
