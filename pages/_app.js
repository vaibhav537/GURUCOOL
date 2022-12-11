import '../styles/globals.css'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return(
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </Head>
        <Navbar mode={mode} toggleMode = {toggleMode}/>
        <Component {...pageProps} mode={mode} toggleMode = {toggleMode}/>
        <Footer mode={mode} toggleMode= {toggleMode}/>
    </>
  )
}

export default MyApp
