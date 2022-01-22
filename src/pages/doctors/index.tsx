import { DownOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import CustomDropdown from "@src/components/CustomDropdown";
import DoctorCard from "@src/components/DoctorCard";
import LayoutWrapper from "@src/components/LayoutWrapper";
import Section from "@src/components/Section";
import { homeTranslations } from "@src/translations";
import { Locale } from "@src/types/translations";
import { useRouter } from "next/router";
import { Fragment } from "react";
import styles from "./styles.module.scss";

const Doctors = () => {
  const { locale } = useRouter();
  const homeTranslation = homeTranslations[locale as Locale];
  const specialties = [
    {
      content: "anaesthesiology",
      icon: <MedicineBoxOutlined />,
    },
    {
      content: "anatomicalPathology",
      icon: <MedicineBoxOutlined />,
    },
    {
      content: "cardiology",
      icon: <MedicineBoxOutlined />,
    },
  ];

  const districts = [
    {
      content: "Mong Kok",
      icon: <MedicineBoxOutlined />,
    },
    {
      content: "Kwun Tung",
      icon: <MedicineBoxOutlined />,
    },
    {
      content: "Ngau Tau Kok",
      icon: <MedicineBoxOutlined />,
    },
  ];

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <Fragment>
          <Section>
            <div className={styles.dropdownOuterContainer}>
              <div className={styles.dropdownContainer}>
                <CustomDropdown items={specialties}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>
                      {homeTranslation["specialty"]}
                    </div>
                    <DownOutlined />
                  </div>
                </CustomDropdown>
              </div>
              <div className={styles.dropdownContainer}>
                <CustomDropdown items={districts}>
                  <div className={styles.dropdownInnerContainer}>
                    <div className={styles.dropdown}>
                      {homeTranslation["district"]}
                    </div>
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
        </Fragment>
      </LayoutWrapper>
    </div>
  );
};

export default Doctors;
