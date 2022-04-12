import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { homeTranslations } from '@src/translations';
import type { Locale } from '@src/types/translations';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface HeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const Header = ({ isCollapsed = false, setIsCollapsed }: HeaderProps) => {
  const router = useRouter();
  const { locale, asPath } = router;
  const homeTranslation = homeTranslations[locale as Locale];

  const changeLanguage = (locale: Locale) => {
    const toLocale = { locale };
    router.push(asPath, asPath, toLocale);
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => setIsCollapsed(!isCollapsed)} className={styles.menuContainer} variant="outlined">
        {isCollapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
      </Button>
      <div className={styles.rightContainer}>
        <div className={styles.signInContainer}>
          <AccountCircleOutlinedIcon />
          <div className={styles.signInInnerContainer}>
            <div className={styles.signIn}>{homeTranslation['signIn']}</div>
            <div>/</div>
            <div className={styles.signUp}>{homeTranslation['signUp']}</div>
          </div>
        </div>
        <div className={styles.languageContainer}>
          <div className={styles.chinese} onClick={() => changeLanguage('tc')}>
            中
          </div>
          <div>/</div>
          <div className={styles.english} onClick={() => changeLanguage('en')}>
            Eng
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
