import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import HorizontalMenu from "@src/components/HorizontalMenu";
import styles from "./styles.module.scss";
import { MenuItem } from "@src/types/menu";

interface CustomDropdownProps {
  children: JSX.Element;
  items: any[];
}

const CustomDropdown = ({ children, items }: CustomDropdownProps) => {
  return (
    <Dropdown overlay={<HorizontalMenu items={items} />}>{children}</Dropdown>
  );
};

export default CustomDropdown;
