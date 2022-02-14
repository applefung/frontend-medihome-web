import { DownOutlined, MedicineBoxOutlined } from '@ant-design/icons';
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
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Doctors = () => {
  const { locale, query } = useRouter();
  const homeTranslation = homeTranslations[locale as Locale];
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const { submit } = useApiRequest(getDoctors);
  console.log('doctors', doctors);
  const specialties = [
    {
      content: 'anaesthesiology',
      icon: <MedicineBoxOutlined />,
    },
    {
      content: 'anatomicalPathology',
      icon: <MedicineBoxOutlined />,
    },
    {
      content: 'cardiology',
      icon: <MedicineBoxOutlined />,
    },
  ];

  const districts = [
    {
      content: 'Mong Kok',
      icon: <MedicineBoxOutlined />,
    },
    {
      content: 'Kwun Tung',
      icon: <MedicineBoxOutlined />,
    },
    {
      content: 'Ngau Tau Kok',
      icon: <MedicineBoxOutlined />,
    },
  ];

  const init = useCallback(async () => {
    const searchValue = query['search'] ? (query['search'] as string).split('_').join(' ') : '';
    const resp = await submit({ searchValue });
    if (resp?.status) {
      setDoctors(resp.data ? resp.data.data : []);
    }
  }, [submit, query]);

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
                <CustomDropdown items={specialties}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>{homeTranslation['specialty']}</div>
                    <DownOutlined />
                  </div>
                </CustomDropdown>
              </div>
              <div className={styles.dropdownContainer}>
                <CustomDropdown items={districts}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>{homeTranslation['district']}</div>
                    <DownOutlined />
                  </div>
                </CustomDropdown>
              </div>
            </div>
          </Section>
          <Section>
            <div className={styles.doctorContainer}>
              <div className={styles.doctorInnerContainer}>
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
              </div>
            </div>
          </Section>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default Doctors;
