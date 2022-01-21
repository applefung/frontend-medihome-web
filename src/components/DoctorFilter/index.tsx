import { DownOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import CustomDropdown from "@src/components/CustomDropdown";
import styles from "./styles.module.scss";

const renderMenuItemContent = (content: string) => <div>{content}</div>;

const specialties = [
  {
    content: renderMenuItemContent(""),
    icon: <MedicineBoxOutlined />,
  },
];

const DoctorFilter = () => {
  return (
    <div className={styles.container}>
      DoctorFilter
      <CustomDropdown items={specialties}>
        <div>
          <div>Specialty</div>
          <DownOutlined />
        </div>
      </CustomDropdown>
    </div>
  );
};

export default DoctorFilter;
