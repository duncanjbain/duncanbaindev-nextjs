import LayoutWrapper from '../components/LayoutWrapper'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return(
    <LayoutWrapper>
    <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
