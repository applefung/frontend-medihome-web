import Sidebar from "@src/components/Sidebar";
import styles from "./styles.module.scss";

const LayoutWrapper = () => {
  return (
    <div id="outer-container" className={styles.container}>
      <Sidebar />
      <main id="page-wrap"></main>
      Home Page
    </div>
  );
};

export default LayoutWrapper;
