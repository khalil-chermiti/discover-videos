import Image from "next/image";
import { useState } from "react";
import combine from "classnames";
import { motion } from "framer-motion";
import styles from "./card.module.css";

const IMG_FALLBACK =
  "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c";

const Card = props => {
  const { imgUrl = IMG_FALLBACK, size = "medium" } = props;

  const [imageSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    small: styles.smItem,
    medium: styles.mdItem,
    large: styles.lgItem,
  };

  const handleOnError = () => setImgSrc(IMG_FALLBACK);

  return (
    <div className={styles.container}>
      <motion.div
        className={combine(classMap[size], styles.imgMotionWrapper)}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={imageSrc}
          alt="image"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;