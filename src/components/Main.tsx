import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Details from './Details';
import { useGetPlanetDetailQuery } from '../Store/api';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSelected,
  rmSelected,
  setPlanetDetail,
  setSelected,
} from '../Store/Planets/planetSlice';
import { RootState } from '../Store/store';

const Main = (props: { planets: Planets[] }) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const selected = useSelector((state: RootState) => state.planets.selected);
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

  const handleDownload = () => {
    const csvContent = generateCSV(selected);
    const fileName = `${selected.length}_planets.csv`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
                    </div>
                  );
                })}
              </ul>
            )}
            {details && <Details details={details} setDetails={setDetails} />}
          </div>
          {selected.length !== 0 && (
            <div className={styles.btns}>
              <p>{selected.length} items selected</p>
              <input type="submit" value="download" onClick={handleDownload} />
              <input
                type="submit"
                value="unselect all"
                onClick={() => {
                  dispatch(clearSelected());
                }}
              />
            </div>
          )}
          <PageNumbers />
        </div>
      )}
    </>
  );
};

export default Main;
