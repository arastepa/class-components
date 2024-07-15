import { NavLink } from 'react-router-dom';
import styles from '../Styles/app.module.css';

const PageNumbers = (props: { pageCount: number }) => {
  return (
    <div className={styles.pages}>
      {new Array(props.pageCount).fill(null).map((_, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.pageNumber}`
                : `${styles.nav_link} ${styles.pageNumber}`
            }
            to={`/page/${index + 1}`}
            key={index}
          >
            {index + 1}
          </NavLink>
        );
      })}
    </div>
  );
};

export default PageNumbers;
