import Image from "next/image";
import { imageLoader } from "@src/utils/imageLoader";
import { Input } from "antd";
import styles from "./styles.module.scss";

const { Search } = Input;

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        loader={imageLoader}
        src={
          "https://cutewallpaper.org/24/health-logo-png/free-medical-logo-creator-hospital-pharmacy-logodesign.png"
        }
        alt="logo"
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
      <div className={styles.rightmost} />
    </div>
  );
};

export default SearchBar;
