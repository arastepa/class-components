import styles from '../Styles/app.module.css';
import Wars from '../assets/star-wars.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header} data-testid="header">
      <div className={styles.logo}>
        <Image src={Wars} alt="" priority={true} />
      </div>
    </div>
  );
};

export default Header;
