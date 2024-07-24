import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Details from './Details';
import { useGetPlanetDetailQuery } from '../Store/api';
import { useDispatch } from 'react-redux';
import { setPlanetDetail } from '../Store/Planets/planetSlice';

const Main = (props: { planets: Planets[] }) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = searchParams.get('details');
  const planetId = detail
    ? (+(id ?? 1) - 1) * props.planets.length + +detail
    : null;
  const {
    data: planetDetails,
    isLoading,
    isFetching,
  } = useGetPlanetDetailQuery(planetId, {
    skip: !planetId,
  });

  useEffect(() => {
    if (planetDetails) {
      dispatch(setPlanetDetail(planetDetails));
      setDetails(planetDetails);
    }
  }, [props.planets.length, planetDetails, dispatch]);
  return (
    <>
      {isLoading || isFetching ? (
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
          <PageNumbers />
        </div>
      )}
    </>
  );
};

export default Main;
