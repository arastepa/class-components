import styles from '../Styles/app.module.css';
import { PlanetDetails } from '../Types/appTypes';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = (props: {
  details: PlanetDetails;
  setDetails: (details: PlanetDetails | null) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.details}>
      <p className={styles.title}>Name: {props.details.name}</p>
      <p>Gravity: {props.details.gravity}</p>
      <p>Population: {props.details.population}</p>
      <p>Climate: {props.details.climate}</p>
      <p>Orbital Period: {props.details.orbital_period}</p>
      <p>Diameter: {props.details.diameter}</p>
      <p>Rotation Period: {props.details.rotation_period}</p>
      <p>Surface Water: {props.details.surface_water}</p>
      <p>Terrain: {props.details.terrain}</p>
      <input
        type="submit"
        value="close"
        onClick={() => {
          const { pathname, hash } = location;
          const newUrl = `${pathname}${hash}`;
          navigate(newUrl);
          props.setDetails(null);
        }}
        data-testid={`closeBtn`}
      />
    </div>
  );
};

export default Details;
