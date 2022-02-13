import { useState } from 'react';
import Sidebar from '@src/components/Sidebar';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import styles from './styles.module.scss';

const LayoutWrapper = ({ children }: Record<'children', JSX.Element>) => {
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
