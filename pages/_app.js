import '../styles/globals.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useRouter } from "next/router"; 
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = ["/admin"];
  return(
    <>
    <ThemeProvider attribute='class' enableSystem={true}>
    {noNav.includes(asPath) ? null : <Navbar />}
        <Component {...pageProps} />
        {noNav.includes(asPath) ? null : <Footer />}
    </ThemeProvider>
    </>
  )
}

export default MyApp
