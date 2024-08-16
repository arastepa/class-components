import styles from '../Styles/app.module.css';
import Wars from '../assets/star-wars.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header} data-testid="header">
      <div className={styles.logo}>
        <Image
          src={Wars}
          alt=""
          width={200}
          height={50}
          data-testid="headerImg"
        />
      </div>
    </div>
  );
};

export default Header;
