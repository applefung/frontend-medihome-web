import { Carousel } from "antd";
import Image from "next/image";
import { imageLoader } from "@src/utils/imageLoader";
import styles from "./styles.module.scss";

interface CustomCarouselProps {
  items: Record<"src", string>[];
  autoplay?: boolean;
}

const CustomCarousel = ({ items, autoplay = false }: CustomCarouselProps) => {
  return (
    <div className={styles.container}>
      <Carousel autoplay={autoplay}>
        {items.map(({ src }, index) => (
          <div key={index} className={styles.itemContainer}>
            <Image
              loader={imageLoader}
              src={src}
              alt="logo"
              width="800px"
              height="450px"
            ></Image>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
