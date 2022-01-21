import { DownOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import CustomDropdown from "@src/components/CustomDropdown";
import { homeTranslations } from "@src/translations";
import { Locale } from "@src/types/translations";
import { Button } from "antd";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const DoctorFilter = () => {
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
      <div className={styles.innerContainer}>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown items={specialties}>
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdown}>
                {homeTranslation["specialty"]}
              </div>
              <DownOutlined />
            </div>
          </CustomDropdown>
        </div>
        <div className={styles.dropdownOuterContainer}>
          <CustomDropdown items={districts}>
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdown}>
                {homeTranslation["district"]}
              </div>
              <DownOutlined />
            </div>
          </CustomDropdown>
        </div>
        <div className={styles.searchContainer}>
          <Button>{homeTranslation["search"]}</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilter;
