import styles from "./styles.module.scss";

const Section = ({ children }: Record<"children", JSX.Element>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Section;
