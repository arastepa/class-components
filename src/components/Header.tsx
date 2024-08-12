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
          data-testid="headerImg"
          priority={true}
          width={200}
          height={50}
        />
      </div>
    </div>
  );
};

export default Header;
