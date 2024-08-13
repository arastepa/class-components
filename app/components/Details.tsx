import styles from '../Styles/app.module.css';
import { useLocation, useNavigate } from '@remix-run/react';
import { PlanetDetails } from '~/Types/appTypes';

const Details = ({
  details,
  setDetails,
}: {
  details: PlanetDetails;
  setDetails: (details: PlanetDetails | null) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  if (details) {
    return (
      <div className={styles.details}>
        <p className={styles.title}>Name: {details?.name}</p>
        <p>Gravity: {details?.gravity}</p>
        <p>Population: {details?.population}</p>
        <p>Climate: {details?.climate}</p>
        <p>Orbital Period: {details?.orbital_period}</p>
        <p>Diameter: {details?.diameter}</p>
        <p>Rotation Period: {details?.rotation_period}</p>
        <p>Surface Water: {details?.surface_water}</p>
        <p>Terrain: {details?.terrain}</p>
        <input
          type="submit"
          value="close"
          onClick={() => {
            const { pathname, hash } = location;
            const newUrl = `${pathname}${hash}`;
            navigate(newUrl);
            setDetails(null);
          }}
          data-testid={`closeBtn`}
        />
      </div>
    );
  }
};

export default Details;
