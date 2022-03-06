import { MenuItem } from '@src/types/menu';
import { Menu } from 'antd';

interface HorizontalMenuProps {
  items: MenuItem[];
}

const HorizontalMenu = ({ items }: HorizontalMenuProps) => {
  return (
    <Menu>
      {items.map(({ content, icon }) => (
        <Menu.Item icon={icon} key={content}>
          {content}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HorizontalMenu;
