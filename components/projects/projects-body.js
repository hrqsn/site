import Image from 'next/image'

export default function ProjectsBody ({ coverImage, content }) {
  return (
    <div className='max-w-screen-sm mx-auto mt-8 '>
      <figure className='sm:-mx-6'>
        <Image src={coverImage} alt="coverImage" width={1200} height={600} className='rounded' />
      </figure>
      <div
        className='mt-8 prose'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
