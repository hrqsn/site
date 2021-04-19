import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()

  const activeNavItem = (pathname) => {
    return router.pathname === pathname ? 'text-gray-900 font-medium' : ''
  }

  return (
    <>
      <header className='max-w-screen-lg h-32 sm:h-20 mx-6 sm:mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 space-y-4 sm:space-y-0'>
        <Link href='/'>
          <a>
            <img src='/img/logo.svg' alt='Hal Sakuragi' className='h-5' />
          </a>
        </Link>
        <nav className='nav-scroll space-x-8 text-gray-600'>
          <Link href='/'>
            <a className={activeNavItem('/')}>Home</a>
          </Link>
          <Link href='/projects'>
            <a className={activeNavItem('/projects')}>Projects</a>
          </Link>
          <Link href='/blog'>
            <a className={activeNavItem('/blog')}>Blog</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
