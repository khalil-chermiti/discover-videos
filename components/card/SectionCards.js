import Link from "next/link";
import Card from "./Card";
import styles from "./sectionCard.module.css";

const SectionCards = props => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardWrapper}>
        {videos.map((video, index) => (
          <Link href={`/video/${video.id}`}>
            <a>
              <Card id={index} key={index} imgUrl={video.imgUrl} size={size} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
