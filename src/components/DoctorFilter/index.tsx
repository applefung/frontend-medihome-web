import { useCallback, useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';
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
  const currrentSpecialty = useRef('');
  const currrentDistrict = useRef('');

  const specialties = [
    {
      content: 'anaesthesiology',
      key: 'anaesthesiology',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'anatomicalPathology',
      key: 'anatomicalPathology',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'cardiology',
      key: 'cardiology',
      icon: <MedicalServicesOutlinedIcon />,
    },
  ];

  const districts = [
    {
      content: 'Mong Kok',
      key: 'mongKok',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'Kwun Tung',
      key: 'kwunTung',
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      content: 'Ngau Tau Kok',
      key: 'ngauTauKok',
      icon: <MedicalServicesOutlinedIcon />,
    },
  ];

  const handleSearch = useCallback(() => {
    console.log('currrentSpecialty: ', currrentSpecialty.current);
    console.log('currrentDistrict: ', currrentDistrict.current);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown
            items={specialties}
            label={homeTranslation['specialty']}
            onChange={(e: SelectChangeEvent) => {
              currrentSpecialty.current = e.target.value;
            }}
          />
        </div>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown
            items={districts}
            label={homeTranslation['district']}
            onChange={(e: SelectChangeEvent) => {
              currrentDistrict.current = e.target.value;
            }}
          />
        </div>
        <div className={styles.searchContainer}>
          <Button variant="outlined" onClick={handleSearch}>
            {homeTranslation['search']}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilter;
