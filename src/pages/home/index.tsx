import type { NextPage } from 'next';
import LayoutWrapper from '@src/components/LayoutWrapper';
import SearchBar from '@src/components/SearchBar';
import CustomCarousel from '@src/components/CustomCarousel';
import Section from '@src/components/Section';
import DoctorFilter from '@src/components/DoctorFilter';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProductContainer from '@src/components/ProductContainer';
import ArticleCardContainer from '@src/components/ArticleCardContainer';
import { getCarousels } from '@src/services/carousel';
import { CarouselBanners, CarouselType } from '@src/types/carousel';
import { useApiRequest } from '@src/utils/api';
import { useRouter } from 'next/router';
import { DOCTORS } from '@src/utils/constants/routes';
import styles from './styles.module.scss';

const products = [
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
  {
    image:
      'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format',
    title: 'Panadol',
    description: 'Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.',
  },
];

const Home: NextPage = () => {
  const [carousels, setCarousels] = useState<CarouselBanners>([]);
  const { submit } = useApiRequest(getCarousels);
  const router = useRouter();

  const init = useCallback(async () => {
    const result = await submit();
    const carouselResults = (result?.data as CarouselType[]).map(({ url }) => ({
      url,
    }));
    setCarousels(carouselResults);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  const handleSearch = (value: string) => {
    router.push(`${DOCTORS}?search=${value.split(' ').join('_')}`);
  };

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <>
          <Section>
            <SearchBar onSearch={handleSearch} />
          </Section>
          <Section>
            <CustomCarousel items={carousels} />
          </Section>
          <Section>
            <DoctorFilter />
          </Section>
          <Section>
            <ProductContainer title="Medicine" items={products} />
          </Section>
          <Section>
            <ArticleCardContainer />
          </Section>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default Home;
