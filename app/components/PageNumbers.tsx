import { Link } from '@remix-run/react';
import styles from '../Styles/app.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useParams } from '@remix-run/react';

const PageNumbers = ({ pageCount }: { pageCount: number }) => {
  const { id } = useParams();
  const currentPage = id ? parseInt(id[0], 10) : 1;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.pages}>
      <Link
        className={`${styles.nav_link} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        to={`/page/${Math.max(currentPage - 1, 1)}`}
        key="prev"
        data-testid="prev-page"
      >
        Prev
      </Link>

      {new Array(pageCount).fill(null).map((_, index) => {
        return (
          <Link
            className={`${styles.pageNumber} ${styles.desktop} ${styles.pageNumber} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}
            data-testid={`link-${index}`}
            to={`/page/${index + 1}`}
            key={index}
          >
            {index + 1}
          </Link>
        );
      })}

      <Link
        className={`${styles.nav_link} ${styles.pageNumber} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        to={`/page/${Math.min(currentPage + 1, pageCount ?? 0)}`}
        key="next"
        data-testid="next-page"
      >
        Next
      </Link>
    </div>
  );
};

export default PageNumbers;
