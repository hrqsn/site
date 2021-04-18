import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Providers from '@/components/providers'

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
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default Site
