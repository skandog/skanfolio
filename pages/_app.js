import SkanLayout from '../components/SkanLayout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return   (
  <SkanLayout>
  <Component {...pageProps} />
  </SkanLayout>)
}

export default MyApp
