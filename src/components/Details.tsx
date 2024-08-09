import styles from '../Styles/app.module.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { setPlanetDetail } from '../Store/Planets/planetSlice';

const Details = () => {
  const details = useSelector((state: RootState) => state.planets.planetDetail);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const handleClose = () => {
    dispatch(setPlanetDetail(null));
    const { pathname, query } = router;
    if (pathname.startsWith('/page')) {
      router.push({
        pathname,
        query: { id: id },
      });
    } else if (!pathname.startsWith('/page') && query.details) {
      router.push('/');
    } else {
      router.push('/');
    }
  };
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
        <input type="submit" value="close" onClick={handleClose} />
      </div>
    );
  }
};

export default Details;
