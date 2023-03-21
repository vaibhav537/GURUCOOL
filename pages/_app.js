import "../styles/globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = [
    "/admin",
    "/teacher/selectcategory",
    "/admin/ifqRPHleaQkbEvmwOPEqb",
    "/admin/Addcategory",
    "/admin/DeleteCategory",
    "/admin/UpdateCategory",
    "/admin/Ranking",
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [teacher, setTeacher] = useState({value: null});
  const [key, setKey] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    const teacherToken = localStorage.getItem('teacher-token');
    console.log(teacherToken)
    if (teacherToken) {
      setTeacher({ value: teacherToken});
      setKey(Math.random());
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem('teacher-token');
    setTeacher({value: null});
    setKey(Math.random());
  };

  return (
    <>
      {isLoading ? (
        <>
          <Head>
            <title>GURU COOL</title>
            <meta
              name="description"
              content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
            />
            <link rel="icon" href="/images/logo.png" />
          </Head>
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        </>
      ) : (
        <ThemeProvider attribute="class" enableSystem={true}>
          {noNav.includes(asPath) ? null : <Navbar key={key} teacher={teacher} logout={logout}/>}
          <Component {...pageProps} />
          {noNav.includes(asPath) ? null : <Footer />}
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
