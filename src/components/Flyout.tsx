'use client';

import styles from '../Styles/app.module.css';
import { Planets } from '../Types/appTypes';

export const FlyOut = (props: {
  selected: Planets[];
  downloadUrl: string;
  onSetSelected: (planets: Planets[]) => void;
}) => {
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
          props.onSetSelected([]);
        }}
      />
    </div>
  );
};
