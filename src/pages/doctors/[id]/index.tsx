import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import LayoutWrapper from '@src/components/LayoutWrapper';
import DoctorBasicInformation from '@src/components/DoctorBasicInformation';
import ClinicDetail from '@src/components/ClinicDetail';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { getDoctor, getDoctorIds } from '@src/services/doctor';
import { Doctor } from '@src/types/doctor';
import { Locale } from '@src/types/common';
import { LANGUAGES } from '@src/utils/constants/common';
import { doctorsTranslations } from '@src/translations';
import styles from './styles.module.scss';

export const getStaticPaths = async () => {
  const resp = await getDoctorIds();
  if (resp.status) {
    const paths = (resp.data ?? []).map(({ id }) => ({
      params: { id },
    }));
    return { paths, fallback: 'blocking' };
  }
};

export const getStaticProps = async ({ params }: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const id = params?.id ?? '';
  const resp = await getDoctor({ id: id as string });
  if (resp.status) {
    if (!resp.data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { doctor: resp.data },
      revalidate: 10,
    };
  }
  return {
    notFound: true,
  };
};

const DoctorDetail = ({ doctor }: Record<'doctor', Doctor | null>) => {
  const router = useRouter();
  const { locale } = router;
  const doctorsTranslation = doctorsTranslations[locale as Locale];
  const basicInformation = useMemo(() => {
    if (!doctor) {
      return [];
    }
    const { languages, qualifications, services, hospitalAffiliations } = doctor as Doctor;
    return [
      {
        title: doctorsTranslation['languages'],
        description: languages.map((item) => LANGUAGES[item as keyof typeof LANGUAGES][locale as Locale]),
      },
      ...(qualifications ? [{ title: doctorsTranslation['qualifications'], description: qualifications.map((item) => item[locale as Locale]) }] : []),
      ...(services ? [{ title: doctorsTranslation['services'], description: services.map((item) => item[locale as Locale]) }] : []),
      ...(hospitalAffiliations
        ? [{ title: doctorsTranslation['hospitalAffiliations'], description: hospitalAffiliations.map((item) => item[locale as Locale]) }]
        : []),
    ];
  }, [doctor]);

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <>
          <div className={styles.doctorContainer}>
            <div className={styles.doctorInnerContainer}>
              <Image
                loader={imageLoader}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8tDGShb27R7tW8DO25UZDNtJ7K6DX6dLVw&usqp=CAU"
                alt="Doctor Detail"
                width="100"
                height="100"
              />
              <div>
                <div>{doctor?.name.fullName[locale as Locale]}</div>
                <div>{doctor?.specialty.name[locale as Locale]}</div>
              </div>
            </div>
          </div>
          <div className={styles.doctorDetailContainer}>
            <div className={styles.doctorDetailInnerContainer}>
              <div className={styles.basicInformationContainer}>
                <DoctorBasicInformation items={basicInformation} />
              </div>
              <div className={styles.clinicDetailContainer}>
                <ClinicDetail clinics={doctor?.clinics ?? []} />
              </div>
            </div>
          </div>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default DoctorDetail;
