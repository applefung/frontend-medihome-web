import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import CustomDropdown from '@src/components/CustomDropdown';
import { homeTranslations } from '@src/translations';
import { Locale } from '@src/types/translations';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const DoctorFilter = () => {
  const { locale } = useRouter();
  const homeTranslation = homeTranslations[locale as Locale];

  const specialties = [
    {
      content: 'anaesthesiology',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'anatomicalPathology',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'cardiology',
      icon: <MedicalServicesOutlinedIcon />,
    },
  ];

  const districts = [
    {
      content: 'Mong Kok',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'Kwun Tung',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'Ngau Tau Kok',
      icon: <MedicalServicesOutlinedIcon />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown items={specialties}>
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdown}>{homeTranslation['specialty']}</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </CustomDropdown>
        </div>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown items={districts}>
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdown}>{homeTranslation['district']}</div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </CustomDropdown>
        </div>
        <div className={styles.searchContainer}>
          <Button variant="outlined">{homeTranslation['search']}</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilter;
