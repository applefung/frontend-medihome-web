import styles from './styles.module.scss';

interface ItemType {
  title: string;
  description: string[];
}
interface BasicInformationProps {
  items: ItemType[];
}

const DoctorBasicInformation = ({ items }: BasicInformationProps) => {
  return (
    <div className={styles.container}>
      {items.map(({ title, description }) => (
        <div key={title} className={styles.innerContainer}>
          <h3>{title}</h3>
          {description.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DoctorBasicInformation;
