import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import styles from './Main.module.css';

const Main = () => {
  const storeData = useSelector((state: RootState) => state.formData);
  return (
    <div className={styles.main}>
      {storeData.data.map((item) => {
        return (
          <div>
            <p>name {item.name}</p>
            <p>age {item.age}</p>
            <p>country {item.country}</p>
            <p>email {item.email}</p>
            <p>gender {item.gender}</p>
            <p>
              <img src={item.picture} alt="" />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
