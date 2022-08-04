import Image from "next/image";
import { useState } from "react";
import combine from "classnames";
import { motion } from "framer-motion";
import styles from "./card.module.css";

const IMG_FALLBACK =
  "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";

const Card = props => {
  const { imgUrl = IMG_FALLBACK, size = "medium", id } = props;

  const [imageSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    small: styles.smItem,
    medium: styles.mdItem,
    large: styles.lgItem,
  };

  const handleOnError = () => setImgSrc(IMG_FALLBACK);

  // prevent first card element from scaling horizentally
  // causing it to get cut
  const scale = id ? { scale: 1.05 } : { scaleY: 1.05};

  return (
    <div className={styles.container}>
      <motion.div
        className={combine(classMap[size], styles.imgMotionWrapper)}
        whileHover={scale}
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
