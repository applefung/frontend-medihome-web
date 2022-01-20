import type { NextPage } from "next";
import LayoutWrapper from "@src/components/LayoutWrapper";
import SearchBar from "@src/components/SearchBar";
import CustomCarousel from "@src/components/CustomCarousel";
import Section from "@src/components/Section";
import VerticalMenu from "@src/components/VerticalMenu";
import styles from "./styles.module.scss";
import { Fragment } from "react";

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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <Fragment>
          <Section>
            <SearchBar />
          </Section>
          <Section>
            <Fragment>
              {/* <VerticalMenu /> */}
              <CustomCarousel items={banners} />
            </Fragment>
          </Section>
        </Fragment>
      </LayoutWrapper>
    </div>
  );
};

export default Home;
