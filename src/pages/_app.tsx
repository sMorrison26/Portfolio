import '@/styles/globals.css'
import '@/styles/fonts.css'
import Layout from '@/components/layout/layout.component'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import 'flowbite'

const inter = Inter({subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
