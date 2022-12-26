import '../styles/globals.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx' 
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {


  return(
    <ThemeProvider attribute='class' enableSystem={true}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>

  )
}

export default MyApp
