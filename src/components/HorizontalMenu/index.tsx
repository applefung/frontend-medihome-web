import { MenuItemType } from '@src/types/menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface HorizontalMenuProps {
  items: MenuItemType[];
}

const HorizontalMenu = ({ items }: HorizontalMenuProps) => {
  return (
    <MenuList>
      {items.map(({ content, icon }, index) => (
        <MenuItem key={index}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{content}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default HorizontalMenu;
