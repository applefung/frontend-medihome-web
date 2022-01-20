import Sidebar from "@src/components/Sidebar";
import Header from "@src/components/Header";
import styles from "./styles.module.scss";
import { useState } from "react";

const LayoutWrapper = ({ children }: Record<"children", JSX.Element>) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {isCollapsed && <Sidebar />}
      {children}
    </div>
  );
};

export default LayoutWrapper;
