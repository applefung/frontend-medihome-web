import { Card } from "antd";
import Image from "next/image";
import { imageLoader } from "@src/utils/imageLoader";
import styles from "./styles.module.scss";
import { ProductCardContent } from "@src/types/product";

const { Meta } = Card;

const ProductCard = ({ image, title, description }: ProductCardContent) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          loader={imageLoader}
          alt="product card"
          src={image}
          width="300"
          height="182"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default ProductCard;
