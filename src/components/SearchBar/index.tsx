import { ChangeEvent, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import { imageLoader } from '@src/utils/imageLoader';
import { LOGO } from '@src/utils/constants/images';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';

const SearchBar = ({ onSearch }: Record<'onSearch', (value: string) => void>) => {
  const value = useRef('');

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image className={styles.logo} loader={imageLoader} src={LOGO.logoUrl} alt={LOGO.logoAlt} width="250" height="120" />
        <TextField
          placeholder="input search text"
          className={styles.searchBar}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            value.current = event.target.value;
          }}
        />
        <IconButton type="submit" onClick={() => onSearch(value.current)}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
