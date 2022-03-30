import { FormControl, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownItemType } from '@src/types/menu';
import styles from './styles.module.scss';

interface CustomDropdownProps {
  items: DropdownItemType[];
  label: string;
  onChange?: (e: SelectChangeEvent) => void;
}

const CustomDropdown = ({ items, label, onChange }: CustomDropdownProps) => {
  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select labelId="select-label" label={label} onChange={onChange}>
          {items.map(({ content, icon, key }, index) => (
            <MenuItem key={index} value={key}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{content}</ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomDropdown;
