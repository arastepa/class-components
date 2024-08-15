import { PlanetDetails, Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';
import PageNumbers from './PageNumbers';
import { useContext, useEffect, useState } from 'react';
import Details from './Details';
import { FlyOut } from './Flyout';
import { useNavigate, useParams } from '@remix-run/react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useSelected } from '../SelectedContext/SelectedContext';

const Main = (props: {
  planets: Planets[];
  pageCount: number;
  details: PlanetDetails | null;
}) => {
  const [details, setDetails] = useState<PlanetDetails | null>(null);
  const { selected, setSelected } = useSelected();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const planetDetails = props.details;
  useEffect(() => {
    setLoading(true);
    if (planetDetails) {
      setDetails(planetDetails);
      setLoading(false);
    }
    setLoading(false);
  }, [planetDetails]);

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

  const handleCheckboxChange = (planet: Planets, checked: boolean) => {
    if (checked) {
      setSelected((prevSelected) => [...prevSelected, planet]);
    } else {
      setSelected((prevSelected) =>
        prevSelected.filter(
          (selectedPlanet) => selectedPlanet.name !== planet.name,
        ),
      );
    }
  };

  const getUrl = () => {
    const csvContent = generateCSV(selected);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const handleOpen = (index: number) => {
    navigate(
      `?details=${(+(id ?? 1) - 1) * props.planets.length + +(index + 1)}`,
    );
  };

  return (
    <>
      {loading ? (
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
                        data-testid={`flyout-${index}`}
                        id=""
                        checked={
                          !!selected.find((el) => el.name === planet.name)
                        }
                        onChange={(e) =>
                          handleCheckboxChange(planet, e.target.checked)
                        }
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
            {details && <Details details={details} setDetails={setDetails} />}
          </div>
          {selected.length !== 0 && (
            <FlyOut
              selected={selected}
              onSetSelected={setSelected}
              downloadUrl={getUrl()}
            />
          )}
          <PageNumbers pageCount={props.pageCount} />
        </div>
      )}
    </>
  );
};

export default Main;
