import Head from "next/head";
import styles from "../styles/Home.module.css";

import SectionCards from "../components/card/SectionCards";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";

export default function Home() {

  const disneyVideos = [
    { imgUrl: "/static/harry-potter.jpg" },
    { imgUrl: "/static/harry-potter.jpg" },
    { imgUrl: "/static/harry-potter.jpg" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>VIDEOS</title>
      </Head>

      <Navbar username="khalil" />

      <Banner
        title="Harry Potter"
        subTitle="The cursed child"
        imgUrl="/static/harry-potter.jpg"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
}
