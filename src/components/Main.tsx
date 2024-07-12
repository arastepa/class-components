import { Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';

const Main = (props: { pageCount: number; planets: Planets[] }) => {
  return (
    <div className={styles.mainContainer}>
      {props.planets.length === 0 ? (
        <p className={styles.noData}>No Data</p>
      ) : (
        <ul className={styles.main}>
          {props.planets.map((planet: Planets, index: number) => {
            return (
              <li key={index}>
                <div>
                  <p className={styles.title}>Name: {planet.name}</p>
                  <p>Gravity: {planet.gravity}</p>
                  <p>Population: {planet.population}</p>
                  <p>Climate: {planet.climate}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <PageNumbers pageCount={props.pageCount} />
    </div>
  );
};

export default Main;
