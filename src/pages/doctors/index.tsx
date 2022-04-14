import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import CustomDropdown from '@src/components/CustomDropdown';
import DoctorCard from '@src/components/DoctorCard';
import LayoutWrapper from '@src/components/LayoutWrapper';
import Section from '@src/components/Section';
import { getDoctors } from '@src/services/doctor';
import { doctorsTranslations } from '@src/translations';
import { Doctor } from '@src/types/doctor';
import { Locale } from '@src/types/translations';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { DOCTORS } from '@src/utils/constants/routes';
import styles from './styles.module.scss';

type DoctorsProps = Record<'doctors', Doctor[]>;

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const searchValue = query['search'] ? (query['search'] as string).split('_').join(' ') : '';
  const specialtyId = query['specialty'];
  const districtId = query['district'];
  let params = '';
  if (searchValue) {
    params = `search=${searchValue}`;
  }
  if (specialtyId) {
    params = `${params ? '&' : ''}specialtyId=${specialtyId}`;
  }
  if (districtId) {
    params = `${params ? '&' : ''}districtId=${districtId}`;
  }
  const resp = await getDoctors(params);
  if (resp.status) {
    const data = resp.data ? resp.data.data : [];
    return {
      props: { doctors: data },
    };
  }
  return { props: { doctors: [] } };
};

const Doctors = ({ doctors }: DoctorsProps) => {
  const router = useRouter();
  const { locale } = router;
  const doctorsTranslation = doctorsTranslations[locale as Locale];

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
                {doctors.length ? (
                  doctors.map(({ name, specialty, clinics, rating, id }, index) => (
                    <Fragment key={index}>
                      <DoctorCard
                        name={name['fullName'][locale as Locale]}
                        specialty={specialty['name'][locale as Locale]}
                        district={clinics.map(({ district }) => district['name'][locale as Locale])}
                        rating={rating as number}
                        detailLink={`${DOCTORS}/${id}`}
                      />
                    </Fragment>
                  ))
                ) : (
                  <div>{doctorsTranslation['noData']}</div>
                )}
              </div>
            </div>
          </Section>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default Doctors;
