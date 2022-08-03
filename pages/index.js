import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/Banner";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>VIDEOS</title>
      </Head>
      
      <Banner 
        title="Harry Potter"
        subTitle="The cursed child"
        imgUrl="/static/harry-potter.jpg"
      />


      {
        // ! navbar
        // ! banner 
        // ! card
      }
    </div>
  );
}
