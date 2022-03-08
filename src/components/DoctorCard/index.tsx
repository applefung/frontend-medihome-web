import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import styles from './styles.module.scss';

const DoctorCard = () => {
  return (
    <div className={styles.container}>
      <Image
        loader={imageLoader}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8tDGShb27R7tW8DO25UZDNtJ7K6DX6dLVw&usqp=CAU"
        alt="Doctor"
        width="100"
        height="100"
      />
      <div className={styles.doctorContainer}>
        <div className={styles.doctorInfoContainer}>
          <div>劉慶偉醫生 </div>
          <div>眼科</div>
          <div>Mong Kok</div>
        </div>
        <div className={styles.rating}>10.0</div>
      </div>
    </div>
  );
};

export default DoctorCard;
