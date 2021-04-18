import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Providers from '@/components/providers'
import { useEffect } from 'react'
import * as gtag from '@/lib/gtag'

import '@/styles/tailwind.css'
import 'tailwindcss/utilities.css'
import '@/styles/custom.css'
import '@/styles/prose.css'
import '@/styles/progress.css'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function Site ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default Site
