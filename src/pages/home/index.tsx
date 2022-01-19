import type { NextPage } from "next";
import LayoutWrapper from "@src/components/LayoutWrapper";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <div id="outer-container" className={styles.container}>
      <LayoutWrapper></LayoutWrapper>
    </div>
  );
};

export default Home;
