import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>VIDEOS</title>
      </Head>

      <Navbar username="khalil"/> 
      
      <Banner 
        title="Harry Potter"
        subTitle="The cursed child"
        imgUrl="/static/harry-potter.jpg"
      />

    </div>
  );
}
