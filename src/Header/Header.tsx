import styles from '../Styles/app.module.css';
import Wars from '../assets/star-wars.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Wars} alt="" />
      </div>
    </div>
  );
};

export default Header;
