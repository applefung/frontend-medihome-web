import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { FormControl, InputBase } from '@mui/material';
import Image from 'next/image';
import { imageLoader } from '@src/utils/imageLoader';
import { LOGO } from '@src/utils/constants/images';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';

const SearchBar = ({ onSearch }: Record<'onSearch', (value: string) => void>) => {
  const value = useRef('');

  const onKeyPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      onSearch(value.current);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image className={styles.logo} loader={imageLoader} src={LOGO.logoUrl} alt={LOGO.logoAlt} width="250" height="120" />
        <FormControl className={styles.searchBar}>
          <InputBase
            autoFocus
            placeholder="input search text"
            inputProps={{ 'aria-label': 'search doctors' }}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              value.current = event.target.value;
            }}
            onKeyDown={onKeyPress}
          />
          <IconButton type="submit" onClick={() => onSearch(value.current)}>
            <SearchIcon />
          </IconButton>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchBar;
