import { NavLink, useParams } from 'react-router-dom';
import styles from '../Styles/app.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const PageNumbers = () => {
  const { id } = useParams();
  const pageCount = useSelector((state: RootState) => state.pagesRed.pageCount);
  const currentPage = id ? parseInt(id, 10) : 1;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.pages}>
      <NavLink
        className={`${styles.nav_link} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        to={`/page/${Math.max(currentPage - 1, 1)}`}
        key="prev"
      >
        Prev
      </NavLink>

      {new Array(pageCount).fill(null).map((_, index) => {
        return (
          <NavLink
            data-testid={`link-${index}`}
            className={({ isActive }) =>
              `${isActive ? `${styles.active} ${styles.pageNumber}` : `${styles.nav_link} ${styles.pageNumber}`} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`
            }
            to={`/page/${index + 1}`}
            key={index}
          >
            {index + 1}
          </NavLink>
        );
      })}

      <NavLink
        className={`${styles.nav_link} ${styles.pageNumber} ${theme === 'light' ? styles.lightTheme : styles.darkTheme} ${styles.pageNumber}`}
        to={`/page/${Math.min(currentPage + 1, pageCount ?? 0)}`}
        key="next"
      >
        Next
      </NavLink>
    </div>
  );
};

export default PageNumbers;
