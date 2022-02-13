import { Dropdown } from 'antd';
import HorizontalMenu from '@src/components/HorizontalMenu';
import { MenuItem } from '@src/types/menu';
import styles from './styles.module.scss';

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
