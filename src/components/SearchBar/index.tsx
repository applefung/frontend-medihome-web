import { Input } from 'antd';
import Image from 'next/image';
import { imageLoader } from '@src/utils/imageLoader';
import { LOGO } from '@src/utils/constants/images';
import styles from './styles.module.scss';

const { Search } = Input;

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image className={styles.logo} loader={imageLoader} src={LOGO.logoUrl} alt={LOGO.logoAlt} width="250" height="120" />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          // loading
          className={styles.searchBar}
        />
      </div>
    </div>
  );
};

export default SearchBar;
