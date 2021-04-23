import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '@/lib/gtag'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='ja'>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div class="c-lap-container" data-lap-id="JRcujefaG84QBR8v-rjT_" data-lap-bg="FFFFFF" data-lap-color="113485" data-lap-textColor="113485"><script src="https://storage.googleapis.com/halsakuragi/lap/1.0.0/widget.min.js"></script></div>
        </body>
      </Html>
    )
  }
}
