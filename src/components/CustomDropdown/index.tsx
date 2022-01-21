import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import HorizontalMenu from "@src/components/HorizontalMenu";
import styles from "./styles.module.scss";
import { MenuItem } from "@src/types/menu";

interface CustomDropdownProps {
  children: JSX.Element;
  items: MenuItem[];
}

const CustomDropdown = ({ children, items }: CustomDropdownProps) => {
  return (
    <div className={styles.container}>
      <Dropdown overlay={<HorizontalMenu items={items} />}>{children}</Dropdown>
    </div>
  );
};

export default CustomDropdown;
