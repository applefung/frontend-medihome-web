import { Carousel } from "antd";
import Image from "next/image";
import { imageLoader } from "@src/utils/imageLoader";

interface CustomCarouselProps {
  items: Record<"src", string>[];
  autoplay?: boolean;
}

const CustomCarousel = ({ items, autoplay = false }: CustomCarouselProps) => {
  return (
    <Carousel autoplay={autoplay}>
      {items.map(({ src }, index) => (
        <div key={index}>
          <Image
            loader={imageLoader}
            src={src}
            alt="logo"
            width="1000px"
            height="300px"
          ></Image>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
