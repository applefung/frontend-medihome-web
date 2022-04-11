import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import type { CarouselBanners } from '@src/types/carousel';
import styles from './styles.module.scss';

interface CustomCarouselProps {
  items: CarouselBanners;
  autoplay?: boolean;
}

const CustomCarousel = ({ items, autoplay = false }: CustomCarouselProps) => {
  return (
    <div className={styles.container}>
      <Carousel autoPlay={autoplay} infiniteLoop>
        {items.map(({ url }) => (
          <div key={url} className={styles.itemContainer}>
            <img src={url} alt="logo" className={styles.images} />
          </div>
        ))}
      </Carousel>

      {/* <Carousel autoplay={autoplay}>
        {items.map(({ url }) => (
          <div key={url} className={styles.itemContainer}>
            <Image loader={imageLoader} src={url} alt="logo" width="800" height="450" />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default CustomCarousel;
