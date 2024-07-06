import { Component } from 'react';
import { Planets } from '../Types/appTypes';

export default class Main extends Component<{ planets: Planets[] }> {
  constructor(props: { planets: Planets[] }) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.planets.map((planet: Planets, index: number) => {
            return (
              <li key={index}>
                <div>
                  <p>{planet.name}</p>
                  <p>{planet.gravity}</p>
                  <p>{planet.population}</p>
                  <p>{planet.climate}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
