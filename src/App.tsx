import { Component } from 'react';
import Search from './components/Search';
import Main from './components/Main';
import styles from './Styles/app.module.css';
import { PropsApp, State } from './Types/appTypes';
import { getPlanets } from './Services/getPlanets';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ErrorBtn from './ErrorBoundary/ErrorBtn';
import Header from './Header/Header';

export default class App extends Component<PropsApp, State> {
  constructor(props: PropsApp) {
    super(props);
    this.state = {
      value: '',
      planets: [],
      prevSearch: '',
      isLoading: false,
    };
  }
  async componentDidMount() {
    const previous = localStorage.getItem('previous');
    if (previous) {
      this.setState(
        {
          prevSearch: previous,
        },
        async () => {
          await this.getResponse();
        },
      );
    } else await this.getResponse();
  }
  getResponse = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      let response;
      if (this.state.value === '' && this.state.prevSearch === '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=&page=1`,
        );
      } else if (this.state.value !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${this.state.value.trim()}&page=1`,
        );
      } else if (this.state.prevSearch !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${this.state.prevSearch.trim()}&page=1`,
        );
      }
      if (response !== undefined) {
        this.setState({
          planets: response,
        });
      }
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
      return null;
    }
  };

  handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      await this.getResponse();
    } catch (error) {
      return null;
    }
  };
  handleChange = (val: string) => {
    this.setState({
      value: val,
      prevSearch: '',
    });
    localStorage.setItem('previous', val);
  };
  render() {
    return (
      <ErrorBoundary>
        <div className={styles.container}>
          <Header />
          <ErrorBtn />
          <Search
            onHandleSubmit={this.handleSubmit}
            onHandleChange={this.handleChange}
          />
          <hr />
          {this.state.isLoading ? (
            <div className={styles.spinner}></div>
          ) : (
            <Main planets={this.state.planets} />
          )}
        </div>
      </ErrorBoundary>
    );
  }
}
