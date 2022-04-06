import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import LayoutWrapper from '@src/components/LayoutWrapper';
import DoctorBasicInformation from '@src/components/DoctorBasicInformation';
import ClinicDetail from '@src/components/ClinicDetail';
import { useApiRequest } from '@src/utils/api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { getDoctor } from '@src/services/doctor';
import { Doctor } from '@src/types/doctor';
import { Locale } from '@src/types/common';
import { LANGUAGES } from '@src/utils/constants/common';
import { doctorsTranslations } from '@src/translations';
import styles from './styles.module.scss';

const DoctorDetail = () => {
  const { locale, query } = useRouter();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
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

  const { submit } = useApiRequest(getDoctor);

  const init = useCallback(async () => {
    const id = query['id'] ? (query['id'] as string) : '';
    if (id.length) {
      const resp = await submit({ id });
      if (resp?.status) {
        setDoctor(resp.data ? (resp.data as Doctor) : null);
      }
    }
  }, [query]);

  useEffect(() => {
    init();
  }, [init]);

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
