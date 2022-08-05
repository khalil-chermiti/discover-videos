import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

import {magic} from '../lib/magic-auth';

const Login = () => {

  const router = useRouter();
  const [email , setEmail] = useState("");
  const [userMsg , setUserMsg] = useState("");
  const [isLoading , setIsLoading] = useState(false);

  const hanldeOnChangeEmail = (event) => {
    setUserMsg("");
    setEmail(event.target.value);
  }

  // handle login using magic auth
  const handleLoginWithEmail = async event => {
    event.preventDefault();

    if (email) {
      if (email === "khalil666chermiti@gmail.com") {
        try {
          setIsLoading(true);
          const DIDToken = await magic.auth.loginWithMagicLink({ email });
          if(DIDToken) router.push('/');
        } catch (error) {
          console.log("something went wrong loging in", error);
          setIsLoading(false);
        }
      } else {
        setUserMsg("something went wrong loging in");
      }
    } else {
      setUserMsg("Enter a valid email address");
      setIsLoading(false);
    }
  };

  // handle loading state on routing
  useEffect(() => {
    const handleComplete = () => setIsLoading(false);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="netflix logo"
                width="128px"
                height="38px"
              />
            </div>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input className={styles.emailInput} type="text" placeholder="Email address" onChange={hanldeOnChangeEmail}/>
          <p className={styles.userMsg}>{userMsg}</p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            {isLoading ? "loading..." : "Sign In"}
          </button>
        </div>
      </main>

    </div>
  );
};

export default Login;
