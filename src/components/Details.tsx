'use client';

import styles from '../Styles/app.module.css';
import { useParams, useRouter } from 'next/navigation';
import { PlanetDetails } from '../Types/appTypes';
import { usePathname, useSearchParams } from 'next/navigation';

const Details = ({
  details,
  setDetails,
}: {
  details: PlanetDetails;
  setDetails: (details: PlanetDetails | null) => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const handleClose = () => {
    setDetails(null);
    const details = searchParams.get('details');
    if (pathname.startsWith('/page')) {
      router.push(`/page/${id}`);
    } else if (!pathname.startsWith('/page') && details) {
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
