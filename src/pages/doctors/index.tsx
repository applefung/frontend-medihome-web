import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CustomDropdown from '@src/components/CustomDropdown';
import DoctorCard from '@src/components/DoctorCard';
import LayoutWrapper from '@src/components/LayoutWrapper';
import Section from '@src/components/Section';
import { getDoctors } from '@src/services/doctor';
import { homeTranslations } from '@src/translations';
import { Doctor } from '@src/types/doctor';
import { Locale } from '@src/types/translations';
import { useApiRequest } from '@src/utils/api';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Doctors = () => {
  const { locale, query } = useRouter();
  const homeTranslation = homeTranslations[locale as Locale];
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const { submit } = useApiRequest(getDoctors);

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

  const init = useCallback(async () => {
    const searchValue = query['search'] ? (query['search'] as string).split('_').join(' ') : '';
    const resp = await submit({ searchValue });
    if (resp?.status) {
      setDoctors(resp.data ? resp.data.data : []);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <>
          <Section>
            <div className={styles.dropdownOuterContainer}>
              <div className={styles.dropdownContainer}>
                {/* <CustomDropdown items={specialties}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>{homeTranslation['specialty']}</div>
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </CustomDropdown> */}
              </div>
              <div className={styles.dropdownContainer}>
                {/* <CustomDropdown items={districts}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>{homeTranslation['district']}</div>
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </CustomDropdown> */}
              </div>
            </div>
          </Section>
          <Section>
            <div className={styles.doctorContainer}>
              <div className={styles.doctorInnerContainer}>
                {doctors.map(({ name, specialty, clinics, rating }, index) => (
                  <Fragment key={index}>
                    <DoctorCard
                      name={name['fullName'][locale as Locale]}
                      specialty={specialty['name'][locale as Locale]}
                      district={clinics.map(({ district }) => district['name'][locale as Locale])}
                      rating={rating as number}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </Section>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default Doctors;
