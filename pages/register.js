import React from 'react'
import Head from 'next/head'
import styles from '../styles/Register.module.css'
import  Router  from 'next/router'

const Register = (props) => {

  const handleTeacher  = (e) =>{
    e.preventDefault();
   Router.push('/Teacher');
  } 

  const handleStudent = (e) =>{
    e.preventDefault();
    Router.push('/Student')
  }

  return (
    <>
      <Head>
        <title>MEET-IN : Registation</title>
        <meta name="description" content="Generated by developer for the who needs to be thier doubts and want to learn from the expert" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <p className={`fw-bold  fs-1 text-center text-${props.mode === 'light' ? 'dark' : 'light'} mt-5 pt-5`}>REGISTER TO MEET-IN </p>
      <div className="container d-flex justify-content-center align-items-center p-5">
        <div className={`p-5 text-${props.mode === 'light' ? 'dark' : 'success'} rounded`} id={styles.bg1}>
        <p className="fs-4 fw-semibold text-sm-start text-md-start text-lg-start text-xl-start">Register as Teacher</p>
        <article className='fs-5'> This is button for those who wants to teach others and can teach by the register below and below</article>
        <button className={"btn btn-outline-success d-block m-auto mt-5"} onClick={handleTeacher} id={styles.button}>Register as Teacher </button>
        </div>
        <div className={` p-5 text-${props.mode === 'light' ? 'dark' : 'primary'} rounded`} id={styles.bg2}>
        <p className="fs-4 fw-semibold text-sm-start text-md-start text-lg-start text-xl-start">Register as Student</p>
        <article className='fs-5'> This is button for those who wants to learn from the qualified teacher </article>
        <button className={"btn btn-outline-primary d-block m-auto mt-5"} onClick={handleStudent} id={styles.button}>Register as Student </button>
        </div>
      </div>
    </>
  )
}

export default Register