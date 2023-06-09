import React, { useEffect } from 'react'
import Head from 'next/head'
import Radio from './components/Radio.jsx'
import { useRouter } from 'next/router'

const Register = () => {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem("teacher-token")){
      router.push('/')
    }
  
  }, [])
  return (
    <>
      <Head>
        <title>GURU COOL : Registation</title>
        <meta name="description" content="Generated by developer for the who needs to be thier doubts and want to learn from the expert" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className='mb-[1rem]'>
      <Radio/>
      </div>
    </>
  )
}

export default Register