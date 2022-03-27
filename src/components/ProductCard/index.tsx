import Card from '@mui/material/Card';
import Image from 'next/image';
import { imageLoader } from '@src/utils/imageLoader';
import { ProductCardContent } from '@src/types/product';

const ProductCard = ({ image, title, description }: ProductCardContent) => {
  return (
    // <Card style={{ width: 300 }} cover={<Image loader={imageLoader} alt="product card" src={image} width="300" height="182" />}>
    //   <Meta title={title} description={description} />
    // </Card>
    <div>ProductCard</div>
  );
};

export default ProductCard;
