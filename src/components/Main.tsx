import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPlanet } from '../Services/getPlanets';

const Main = (props: { pageCount: number; planets: Planets[] }) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsloading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const detail = searchParams.get('details');
    if (detail) {
      setIsloading(true);
      getPlanet(
        `https://swapi.dev/api/planets/${(+(id ?? 1) - 1) * props.planets.length + +detail}`,
      ).then((res) => {
        if (res) setDetails(res);
        setIsloading(false);
      });
    }
  }, [searchParams, id, props.planets.length]);
  return (
    <>
      {isLoading ? (
        <div className={styles.spinner}></div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.detailsMain}>
            {props.planets.length === 0 ? (
              <p className={styles.noData}>No Data</p>
            ) : (
              <ul className={styles.main}>
                {props.planets.map((planet: Planets, index: number) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        navigate(`?details=${index + 1}`);
                      }}
                    >
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
            {details && (
              <div className={styles.details}>
                <p className={styles.title}>Name: {details.name}</p>
                <p>Gravity: {details.gravity}</p>
                <p>Population: {details.population}</p>
                <p>Climate: {details.climate}</p>
                <p>Orbital Period: {details.orbital_period}</p>
                <p>Diameter: {details.diameter}</p>
                <p>Rotation Period: {details.rotation_period}</p>
                <p>Surface Water: {details.surface_water}</p>
                <p>Terrain: {details.terrain}</p>
                <input
                  type="submit"
                  value="close"
                  onClick={() => {
                    const { pathname, hash } = location;
                    const newUrl = `${pathname}${hash}`;
                    navigate(newUrl);
                    setDetails(null);
                  }}
                />
              </div>
            )}
          </div>
          <PageNumbers pageCount={props.pageCount} />
        </div>
      )}
    </>
  );
};

export default Main;
