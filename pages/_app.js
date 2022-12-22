import '../styles/globals.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx' 
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
        <Navbar mode={mode} toggleMode = {toggleMode}/>
        <Component {...pageProps} mode={mode} toggleMode = {toggleMode}/>
        <Footer mode={mode} toggleMode= {toggleMode}/>
    </>
  )
}

export default MyApp
