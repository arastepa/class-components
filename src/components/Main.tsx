import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import { useContext, useEffect, useState } from 'react';
import Details from './Details';
import { useGetPlanetDetailQuery } from '../Store/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  rmSelected,
  setPlanetDetail,
  setSelected,
} from '../Store/Planets/planetSlice';
import { RootState } from '../Store/store';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { FlyOut } from './Flyout';
import { useRouter } from 'next/router';

const Main = (props: { planets: Planets[] }) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split('?')[1] || '');
  const { id } = router.query;
  const selected = useSelector((state: RootState) => state.planets.selected);
  const dispatch = useDispatch();
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
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (planetDetails && planetId) {
      dispatch(setPlanetDetail(planetDetails));
      setDetails(planetDetails);
    }
  }, [props.planets.length, planetId, planetDetails, dispatch]);

  const generateCSV = (data: Planets[]) => {
    const header = 'Name,Gravity,Population,Climate\n';
    const rows = data
      .map(
        (planet) =>
          `${planet.name},${planet.gravity},${planet.population},${planet.climate}`,
      )
      .join('\n');
    return `${header}${rows}`;
  };

  const getUrl = () => {
    const csvContent = generateCSV(selected);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const handleOpen = (index: number) => {
    const { pathname } = router;
    if (pathname.startsWith('/page')) {
      router.push({
        pathname: '/page/[id]',
        query: { id: id, details: index + 1 },
      });
    } else {
      router.push(`/?details=${index + 1}`);
    }
  };

  return (
    <>
      {isLoading || isFetching ? (
        <div className={styles.spinner}></div>
      ) : (
        <div
          className={`${styles.mainContainer} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}
        >
          <div className={styles.detailsMain}>
            {props.planets.length === 0 ? (
              <p className={styles.noData}>No Data</p>
            ) : (
              <ul className={styles.main}>
                {props.planets.map((planet: Planets, index: number) => {
                  return (
                    <div className={styles['checkboxes-list']} key={index}>
                      <input
                        type="checkbox"
                        name="selects"
                        id=""
                        checked={
                          !!selected.find((el) => el.name === planet.name)
                        }
                        onChange={(e) => {
                          e.target.checked
                            ? dispatch(setSelected(planet))
                            : dispatch(rmSelected(planet));
                        }}
                      />
                      <li
                        onClick={() => {
                          handleOpen(index);
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
                    </div>
                  );
                })}
              </ul>
            )}
            {details && <Details />}
          </div>
          {selected.length !== 0 && (
            <FlyOut selected={selected} downloadUrl={getUrl()} />
          )}
          <PageNumbers />
        </div>
      )}
    </>
  );
};

export default Main;
