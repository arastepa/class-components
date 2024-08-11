'use client';

import { useDispatch } from 'react-redux';
import styles from '../Styles/app.module.css';
import { Planets } from '../Types/appTypes';
import { clearSelected } from '../Store/Planets/planetSlice';

export const FlyOut = (props: { selected: Planets[]; downloadUrl: string }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.btns}>
      <p>{props.selected.length} items selected</p>
      <button className={styles.download}>
        <a
          href={props.downloadUrl}
          download={`${props.selected.length}_planets.csv`}
        >
          download
        </a>
      </button>
      <input
        type="submit"
        value="unselect all"
        onClick={() => {
          dispatch(clearSelected());
        }}
      />
    </div>
  );
};
