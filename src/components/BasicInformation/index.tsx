import styles from "./styles.module.scss";

interface BasicInformationProps {
  items: Record<"title" | "description", string>[];
}

const BasicInformation = ({ items }: BasicInformationProps) => {
  return (
    <div className={styles.container}>
      {items.map(({ title, description }, index) => (
        <div key={index} className={styles.innerContainer}>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      ))}
    </div>
  );
};

export default BasicInformation;
