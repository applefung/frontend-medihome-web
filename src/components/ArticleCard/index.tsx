import { imageLoader } from "@src/utils/imageLoader";
import Image from "next/image";
import styles from "./styles.module.scss";

const ArticleCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topicContainer}>營養食物</div>
      <div className={styles.articleContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageInnerContainer}>
            <Image
              loader={imageLoader}
              src="https://healthconcept.io/_next/image?url=https%3A%2F%2Fmedia.apoidea.ai%2Farticle%2F7feb8a35-4d10-4726-85d6-ecde6c72499e.jpg&w=992&q=75"
              alt="Article"
              width="300"
              height="300"
            ></Image>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <h1>【營養食物】合桃真的可以補腦？研究證實有效補腦的4種食物</h1>
          <div className={styles.tagContainer}>
            <div className={styles.tag}>抗氧化</div>
            <div className={styles.tag}>堅果</div>
            <div className={styles.tag}>合桃</div>
            <div className={styles.tag}>補腦</div>
          </div>
          <div className={styles.writerContainer}>
            <div className={styles.writer}>Mango Chan</div>
            <div className={styles.time}>2022-01-11 20:30</div>
          </div>
          <div>
            許多家長總會希望孩子在發育時期多加攝取營養，促進發育，所以市面上有關兒童腦部發展的食品可謂五花八門。
          </div>
          <div className={styles.moreContainer}>More</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
