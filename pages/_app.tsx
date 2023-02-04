import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Topbar from '@/components/topbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='h-screen grid grid-rows-nav relative'>
      <div>
        <Topbar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  </>
}
