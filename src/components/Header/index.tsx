import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import { homeTranslations } from "@src/translations/index";
import type { Locale } from "@src/types/translations";
import { useRouter } from "next/router";

interface HeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const Header = ({ isCollapsed = false, setIsCollapsed }: HeaderProps) => {
  const router = useRouter();
  const { locale, pathname } = router;
  const homeTranslation = homeTranslations[locale as Locale];

  const changeLanguage = (locale: Locale) => {
    const toLocale = { locale };

    router.push(pathname, pathname, toLocale);
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={styles.menuContainer}
      >
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className={styles.rightContainer}>
        <div className={styles.signInContainer}>
          <UserOutlined />
          <div className={styles.signInInnerContainer}>
            <div className={styles.signIn}>{homeTranslation["signIn"]}</div>
            <div>/</div>
            <div className={styles.signUp}>{homeTranslation["signUp"]}</div>
          </div>
        </div>
        <div className={styles.languageContainer}>
          <div className={styles.chinese} onClick={() => changeLanguage("tc")}>
            中
          </div>
          <div>/</div>
          <div className={styles.english} onClick={() => changeLanguage("en")}>
            Eng
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
