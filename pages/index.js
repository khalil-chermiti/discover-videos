import Head from "next/head";
import styles from "../styles/Home.module.css";

import { getPopularVideos, getVideos } from "../lib/videos";
import SectionCards from "../components/card/SectionCards";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";

export async function getServerSideProps() {
  const popularVideos = await getPopularVideos();
  const travelVideos = await getVideos("travel videos");
  const disneyVideos = await getVideos("disney trailers");
  const productivityVideos = await getVideos("productivity Videos");

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

export default function Home(props) {
  const { 
    disneyVideos, 
    travelVideos, 
    productivityVideos, 
    popularVideos 
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>VIDEOS</title>
      </Head>

      <div className={styles.main}>
        <Navbar username="khalil" />

        <Banner
          title="Harry Potter"
          subTitle="The cursed child"
          imgUrl="/static/harry-potter.jpg"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards title="Productivity" videos={productivityVideos} size="medium" />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
