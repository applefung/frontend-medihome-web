import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { doctorsTranslations } from '@src/translations';
import type { Locale } from '@src/types/translations';
import styles from './styles.module.scss';

interface DoctorCardProps {
  name: string;
  specialty: string;
  district: string[];
  rating: number;
  detailLink?: string;
}

const DoctorCard = ({ name, specialty, district, rating, detailLink }: DoctorCardProps) => {
  const { locale } = useRouter();
  const doctorsTranslation = doctorsTranslations[locale as Locale];
  console.log('name', name);
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
          <a className={styles.name} href={detailLink} target="_blank" rel="noreferrer">
            {name}
          </a>
          <a className={styles.specialty} href="./home" target="_blank">
            {specialty}
          </a>
          <div>
            {district.map((item, index) => (
              <a key={index} className={styles.district} href="./home" target="_blank">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.rating}>
          {rating ?? doctorsTranslation['noRating' as keyof typeof doctorsTranslation]}
          {rating || rating === 0 ? '/5' : ''}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
