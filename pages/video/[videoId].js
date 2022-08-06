import Modal from "react-modal";
import combine from "classnames";
import { useRouter } from "next/router";

import styles from "../../styles/video.module.css";
import Navbar from "../../components/navbar/Navbar";
import { getYoutubeVideoById } from "../../lib/videos";

// mount modal on root node
Modal.setAppElement("#__next");

// ! fetch data for each page + ISG
export async function getStaticProps(context) {
  const {videoId} = context.params ;
  const video = await getYoutubeVideoById(videoId);

  return {
    props: {
      video : video[0],
    },
    revalidate: 10, // In seconds
  };
}


// ! generate static pages
export async function getStaticPaths() {
  const listOfVideos = ["cKOegEuCcfw", "aIsFywuZPoQ", "EGsoC0bWakU"];
  const paths = listOfVideos.map(videoId => ({ params: { videoId: videoId } }));
  return { paths, fallback: "blocking" };
}


const Video = (props) => {
  const {video} = props ;
  const router = useRouter();

  return (
    <div className={styles.container}>

      <Navbar />

      <Modal
        isOpen={true}
        className={styles.modal}
        contentLabel="Watch the video"
        overlayClassName={styles.overlay}
        onRequestClose={() => router.back()}
      >
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="390"
          src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1&controls=0&rel=0`}
          frameborder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{video.publishTime}</p>
              <p className={styles.title}>{video.title}</p>
              <p className={styles.description}>{video.description}</p>
            </div>
            <div className={styles.col2}>
              <p className={combine(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>
                  {video.channelTitle}
                </span>
              </p>
              <p className={styles.subText}>
                <span className={styles.textColor}>viewCount: </span>
                <span className={styles.channelTitle}>{video.statistics?.viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
