import { Carousel } from 'antd';
import Image from 'next/image';
import { imageLoader } from '@src/utils/imageLoader';
import type { CarouselBanners } from '@src/types/carousel';
import styles from './styles.module.scss';

interface CustomCarouselProps {
  items: CarouselBanners;
  autoplay?: boolean;
}

const CustomCarousel = ({ items, autoplay = false }: CustomCarouselProps) => {
  return (
    <div className={styles.container}>
      <Carousel autoplay={autoplay}>
        {items.map(({ url }, index) => (
          <div key={index} className={styles.itemContainer}>
            <Image loader={imageLoader} src={url} alt="logo" width="800" height="450" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
