import { Component } from 'react';
import styles from '../Styles/app.module.css';
import Wars from '../assets/star-wars.png';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Wars} alt="" />
        </div>
      </div>
    );
  }
}
