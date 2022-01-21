import ProductCard from "@src/components/ProductCard";
import { ProductCardContent } from "@src/types/product";
import styles from "./styles.module.scss";

interface ProductContainerProps {
  title: string;
  items: ProductCardContent[];
}

const ProductContainer = ({ title, items }: ProductContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h3>{title}</h3>
        <div className={styles.productContainer}>
          {items.map((item, index) => (
            <div key={index}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
