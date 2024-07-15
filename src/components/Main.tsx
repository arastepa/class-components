import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPlanet } from '../Services/getPlanets';
import Details from './Details';

const Main = (props: { pageCount: number; planets: Planets[] }) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsloading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
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
                      data-testid={`planet-${index}`}
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
            {details && <Details details={details} setDetails={setDetails} />}
          </div>
          <PageNumbers pageCount={props.pageCount} />
        </div>
      )}
    </>
  );
};

export default Main;
