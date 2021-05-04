import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Providers from '@/components/providers'
import { useEffect, useState } from 'react'
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

  /**
  useEffect(() => {
    const detectDeviceType = (e) => {
      let deviceType = e.changedTouches ? 1 : 2
      const body = document.getElementsByTagName('body')
      
      if (deviceType === 1) {
        // タッチデバイス
        body[0].classList.remove('is-normal')
        body[0].classList.add('is-mobile')
      } else {
        // マウスデバイス
        body[0].classList.add('is-normal')
        body[0].classList.remove('is-mobile')
      }

      document.removeEventListener('touchstart', detectDeviceType)
      document.removeEventListener('mousemove', detectDeviceType)
    }
    document.addEventListener('touchstart', detectDeviceType)
    document.addEventListener('mousemove', detectDeviceType)
  }, [])
  */

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default Site
