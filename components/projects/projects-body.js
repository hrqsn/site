export default function ProjectsBody ({ coverImage, content }) {
  return (
    <div className='max-w-screen-sm mx-auto mt-8 '>
      <figure className='sm:-mx-4'>
        <img src={coverImage} alt="coverImage" />
      </figure>
      <div
        className='mt-8 prose'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
