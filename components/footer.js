import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <div>
        <div className='max-w-screen-sm mx-auto px-4'>
          <footer className='flex flex-col justify-center space-y-6 pt-48 pb-24'>
            <span className='text-center text-sm text-gray-500'>©︎ {new Date().getFullYear()} Hal Sakuragi.</span>
          </footer>
        </div>
      </div>
    </>
  )
}
