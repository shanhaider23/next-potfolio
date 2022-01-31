import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../component/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="my-14 grid grid-cols-12 gap-6 px-5 lg:px-48">
      <div className="col-span-12 rounded-2xl bg-white p-4 text-center lg:col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-12 rounded-2xl bg-white lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
