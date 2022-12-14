import Image from "next/image";
import {useRouter} from "next/router";
import styles from "./banner.module.css";

const Banner = props => {
  const router = useRouter();
  const { videoId, title, subTitle, imgUrl } = props;

  const handleOnClick = (event) => {
    event.preventDefault();
    router.push(`/video/${videoId}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playButtonWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnClick}>
              <Image
                src="/static/play-arrow.svg"
                alt="play arrow"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
};

export default Banner;
