import Sidebar from "@src/components/Sidebar";
import Header from "@src/components/Header";
import styles from "./styles.module.scss";
import { useState } from "react";
import Footer from "../Footer";

const LayoutWrapper = ({ children }: Record<"children", JSX.Element>) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {isCollapsed && <Sidebar />}
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
