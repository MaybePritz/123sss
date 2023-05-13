import '@/styles/globals.css'
import { ThemeProvider} from 'next-themes'
import { Open_Sans } from 'next/font/google'
import { AppControllerProvider } from '@/context'


const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <AppControllerProvider>
    <ThemeProvider attribute="class">
      <div className={open_sans.className}>
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
    </AppControllerProvider>
  )
}

export default MyApp
