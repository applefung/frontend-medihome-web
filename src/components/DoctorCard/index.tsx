import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import styles from './styles.module.scss';

interface DoctorCardProps {
  name: string;
  specialty: string;
  district: string[];
  rating: number;
}

const DoctorCard = ({ name, specialty, district, rating }: DoctorCardProps) => {
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
          <div>{name}</div>
          <div>{specialty}</div>
          <div>{district.join(',')}</div>
        </div>
        <div className={styles.rating}>{rating}</div>
      </div>
    </div>
  );
};

export default DoctorCard;
