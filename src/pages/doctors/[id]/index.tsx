import { imageLoader } from '@src/utils/imageLoader';
import Image from 'next/image';
import LayoutWrapper from '@src/components/LayoutWrapper';
import DoctorBasicInformation from '@src/components/DoctorBasicInformation';
import ClinicDetail from '@src/components/ClinicDetail';
import styles from './styles.module.scss';

const basicInformation = [
  {
    title: '語言',
    description: '廣東話、英語、普通話',
  },
  {
    title: '服務',
    description: '全面眼睛檢查',
  },
];

const DoctorDetail = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <>
          <div className={styles.doctorContainer}>
            <Image
              loader={imageLoader}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8tDGShb27R7tW8DO25UZDNtJ7K6DX6dLVw&usqp=CAU"
              alt="Doctor Detail"
              width="100"
              height="100"
            />
            <div>
              <div>何存廣醫生</div>
              <div>眼科</div>
            </div>
          </div>
          <div className={styles.doctorDetailContainer}>
            <div className={styles.doctorDetailInnerContainer}>
              <div className={styles.basicInformationContainer}>
                <DoctorBasicInformation items={basicInformation} />
              </div>
              <div className={styles.clinicDetailContainer}>
                <ClinicDetail />
              </div>
            </div>
          </div>
        </>
      </LayoutWrapper>
    </div>
  );
};

export default DoctorDetail;