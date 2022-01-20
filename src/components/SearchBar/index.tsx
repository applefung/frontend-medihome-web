import Image from "next/image";
import { imageLoader } from "@src/utils/imageLoader";
import { Input } from "antd";
import styles from "./styles.module.scss";
import { LOGO } from "@src/utils/constants/images";

const { Search } = Input;

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Image
          className={styles.logo}
          loader={imageLoader}
          src={LOGO.logoUrl}
          alt={LOGO.logoAlt}
          width="250px"
          height="120px"
        ></Image>
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
