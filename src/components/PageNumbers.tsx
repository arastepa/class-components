import Link from 'next/link';
import styles from '../Styles/app.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useRouter } from 'next/router';

const PageNumbers = () => {
  const router = useRouter();
  const { id } = router.query;
  const pageCount = useSelector((state: RootState) => state.pagesRed.pageCount);
  const currentPage = id ? parseInt(id[0], 10) : 1;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.pages}>
      <Link
        className={`${styles.nav_link} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        href={`/page/${Math.max(currentPage - 1, 1)}`}
        key="prev"
      >
        Prev
      </Link>

      {new Array(pageCount).fill(null).map((_, index) => {
        return (
          <Link
            className={`${styles.pageNumber} ${styles.pageNumber} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}
            data-testid={`link-${index}`}
            href={`/page/${index + 1}`}
            key={index}
          >
            {index + 1}
          </Link>
        );
      })}

      <Link
        className={`${styles.nav_link} ${styles.pageNumber} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        href={`/page/${Math.min(currentPage + 1, pageCount ?? 0)}`}
        key="next"
      >
        Next
      </Link>
    </div>
  );
};

export default PageNumbers;
