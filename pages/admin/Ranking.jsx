import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import Checkbox from '../components/Checkbox'

const Ranking = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("admin-token")) {
      router.push('/admin')
    }
  }, []);
  return (
    <>
      <Head>
        <title>MEET-IN : ADMIN RANKING</title>
        <meta
          name="description"
          content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="bg-purple-300 dark:bg-slate-600 w-[100vw] h-[100vh] transition-all duration-1000">
        <div className="fixed right-10 bottom-10">
          <Checkbox />
        </div>
        <div className="flex">
          <div className="bg-teal-300 transition-all duration-1000 h-[100vh] shadow-2xl p-10 dark:shadow-4xl dark:bg-slate-800">
            <AdminNavbar />
          </div>
          <div>RANKING BRO IS HERE</div>
        </div>
      </div>
    </>
  )
}

export default Ranking