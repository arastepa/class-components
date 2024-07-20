import { NavLink, useParams } from 'react-router-dom';
import styles from '../Styles/app.module.css';

const PageNumbers = (props: { pageCount: number }) => {
  const { id } = useParams();
  const currentPage = id ? parseInt(id, 10) : 1;

  return (
    <div className={styles.pages}>
      <NavLink
        className={`${styles.nav_link} ${styles.pageNumber}`}
        to={`/page/${Math.max(currentPage - 1, 1)}`}
        key="prev"
      >
        Prev
      </NavLink>

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

      <NavLink
        className={`${styles.nav_link} ${styles.pageNumber}`}
        to={`/page/${Math.min(currentPage + 1, props.pageCount)}`}
        key="next"
      >
        Next
      </NavLink>
    </div>
  );
};

export default PageNumbers;
