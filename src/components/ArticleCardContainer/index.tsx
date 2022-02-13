import ArticleCard from '@src/components/ArticleCard';
import styles from './styles.module.scss';

const ArticleCardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArticleCardContainer;
