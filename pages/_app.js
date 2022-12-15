import '../styles/globals.css'
import Navbar from './Navbar'
import Head from 'next/head'
import Script from 'next/script'
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
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
  </Head>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>

        <Navbar mode={mode} toggleMode = {toggleMode}/>
        <Component {...pageProps} mode={mode} toggleMode = {toggleMode}/>
        <Footer mode={mode} toggleMode= {toggleMode}/>
    </>
  )
}

export default MyApp
