import type { NextPage } from "next";
import LayoutWrapper from "@src/components/LayoutWrapper";
import SearchBar from "@src/components/SearchBar";
import CustomCarousel from "@src/components/CustomCarousel";
import Section from "@src/components/Section";
import DoctorFilter from "@src/components/DoctorFilter";
import styles from "./styles.module.scss";
import { Fragment } from "react";
import ProductContainer from "@src/components/ProductContainer";
import ArticleCardContainer from "@src/components/ArticleCardContainer";

const banners = [
  {
    src: "https://www.capgemini.com/wp-content/uploads/2021/04/Web-Preview_Banner-Health_800X450.jpg",
  },
  {
    src: "https://www.capgemini.com/wp-content/uploads/2021/04/Web-Preview_Banner-Health_800X450.jpg",
  },
  {
    src: "https://www.capgemini.com/wp-content/uploads/2021/04/Web-Preview_Banner-Health_800X450.jpg",
  },
];

const products = [
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
  {
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-tablets/MGK5158-GSK-Panadol-Tablets-455x455.png?auto=format",
    title: "Panadol",
    description:
      "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <Fragment>
          <Section>
            <SearchBar />
          </Section>
          <Section>
            <CustomCarousel items={banners} />
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
        </Fragment>
      </LayoutWrapper>
    </div>
  );
};

export default Home;
