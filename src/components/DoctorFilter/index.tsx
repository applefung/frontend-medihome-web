import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import CustomDropdown from '@src/components/CustomDropdown';
import { homeTranslations } from '@src/translations';
import { Locale } from '@src/types/translations';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useApiRequest } from '@src/utils/api';
import { getSpecialties } from '@src/services/specialty';
import { getDistricts } from '@src/services/district';
import { getDoctors } from '@src/services/doctor';
import { DOCTORS } from '@src/utils/constants/routes';
import type { Specialty } from '@src/types/doctor';
import type { District } from '@src/types/clinic';
import type { DropdownItemType } from '@src/types/menu';
import styles from './styles.module.scss';

const DoctorFilter = () => {
  const router = useRouter();
  const { locale } = router;
  const homeTranslation = homeTranslations[locale as Locale];
  const [specialties, setSpecialties] = useState<DropdownItemType[]>([]);
  const [districts, setDistricts] = useState<DropdownItemType[]>([]);
  const currrentSpecialty = useRef('');
  const currrentDistrict = useRef('');
  const { submit: getSpecialtiesApi } = useApiRequest(getSpecialties);
  const { submit: getDistrictsApi } = useApiRequest(getDistricts);

  const formatDropdownData = (data: Specialty[] | District[]) => data.map(({ name, id }) => ({ content: name[locale as Locale], key: id }));

  const init = async () => {
    const resp = await Promise.allSettled([getSpecialtiesApi(), getDistrictsApi()]);
    if (resp[0].status === 'fulfilled') {
      setSpecialties(formatDropdownData(resp[0]?.value?.data ?? []));
    }
    if (resp[1].status === 'fulfilled') {
      setDistricts(formatDropdownData(resp[1]?.value?.data ?? []));
    }
  };

  useEffect(() => {
    init();
  }, [locale]);

  const handleSearch = useCallback(async () => {
    let params = '';
    if (currrentSpecialty.current) {
      params = `specialty=${currrentSpecialty.current}`;
    }
    if (currrentDistrict.current) {
      params = `${params ? `${params}&` : ''}district=${currrentDistrict.current}`;
    }
    router.push(`${DOCTORS}?${params}`);
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
