import { useRouter } from "next/router";
import { magic } from "../lib/magic-auth";
import { useEffect, useState } from "react";
import "../styles/globals.css";

import Loader from "../components/loader/loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // check if user logged in
  useEffect(() => {
    const checkLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        router.push("/");
      } else {
        router.push("/login");
      }
    };
    checkLoggedIn();
  }, []);

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

  return isLoading 
    ? <Loader />
    : <Component {...pageProps} />;
}

export default MyApp;
