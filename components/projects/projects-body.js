export default function ProjectsBody ({ coverImage, content }) {
  return (
    <div className='max-w-screen-sm mx-auto mt-8 '>
      <img src={coverImage} alt="coverImage" />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className='mt-4'
      />
    </div>
  )
}
