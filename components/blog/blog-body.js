export default function BlogBody ({ content }) {
  return (
    <div className='max-w-screen-sm mx-auto'>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
