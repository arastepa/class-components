import { Component } from 'react';
import { Planets } from '../Types/appTypes';
import styles from '../Styles/app.module.css';

export default class Main extends Component<{ planets: Planets[] }> {
  constructor(props: { planets: Planets[] }) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className={styles.main}>
          {this.props.planets.map((planet: Planets, index: number) => {
            return (
              <li key={index}>
                <div>
                  <p className={styles.title}>Name: {planet.name}</p>
                  <p>Gravity: {planet.gravity}</p>
                  <p>Population: {planet.population}</p>
                  <p>Climate: {planet.climate}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
