import { Component } from 'react';
import Search from './components/Search';
import Main from './components/Main';
import styles from './Styles/app.module.css';
import { PropsApp, State } from './Types/appTypes';
import { getPlanets } from './Services/getPlanets';

export default class App extends Component<PropsApp, State> {
  constructor(props: PropsApp) {
    super(props);
    this.state = {
      value: '',
      planets: [],
      prevSearch: '',
    };
  }
  componentDidMount() {
    const previous = localStorage.getItem('previous');
    if (previous) {
      this.setState({
        prevSearch: previous,
      });
    }
    console.log(previous);
  }
  handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      let response;
      if (this.state.value === '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=&page=1`,
        );
      } else {
        console.log(this.state.value);
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${this.state.value.trim()}&page=1`,
        );
      }
      if (response !== undefined) {
        this.setState({
          planets: response,
        });
      }
    } catch (error) {
      return null;
    }
  };
  handleChange = (val: string) => {
    this.setState({
      value: val,
    });
    localStorage.setItem('previous', val);
  };
  render() {
    return (
      <div className={styles.container}>
        <Search
          prevSearch={this.state.prevSearch}
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
        />
        <hr />
        <Main planets={this.state.planets} />
      </div>
    );
  }
}
