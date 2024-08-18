import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import styles from './Main.module.css';

const Main = () => {
  const storeData = useSelector((state: RootState) => state.formData);
  return (
    <div className={styles.main}>
      {storeData.data.map((item, index, _arr) => {
        return (
          <div className={index === _arr.length - 1 ? styles.last : ''}>
            <p>name {item.name}</p>
            <p>age {item.age}</p>
            <p>country {item.country}</p>
            <p>email {item.email}</p>
            <p>gender {item.gender}</p>
            <p>
              <img src={item.picture} alt="" width={110} height={100} />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
