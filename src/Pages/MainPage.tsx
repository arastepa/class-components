import { useEffect, useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styles from '../Styles/app.module.css';
import { Planets } from '../Types/appTypes';
import { getPlanets } from '../Services/getPlanets';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorBtn from '../ErrorBoundary/ErrorBtn';
import React from 'react';
import useHandleLS from '../Hooks/useHandleLS';

const App = () => {
  const [search, setSearch] = useState('');
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const { prevSearch, setPrevSearch } = useHandleLS();

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (search === '' && previous === '') {
      setIsloading(true);
      getPlanets(`https://swapi.dev/api/planets/?search=&page=1`).then(
        (response) => {
          setIsloading(false);
          if (response) setPlanets(response);
        },
      );
    } else if (previous && search === '') {
      setIsloading(true);
      getPlanets(
        `https://swapi.dev/api/planets/?search=${previous.trim()}&page=1`,
      ).then((response) => {
        setIsloading(false);
        if (response) setPlanets(response);
      });
    }
  }, [search]);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      await getResponse();
    } catch (error) {
      return null;
    }
  }

  const getResponse = async () => {
    try {
      setIsloading(true);
      let response;
      if (search === '' && prevSearch === '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=&page=1`,
        );
      } else if (search !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${search.trim()}&page=1`,
        );
      } else if (prevSearch !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${prevSearch.trim()}&page=1`,
        );
      }
      if (response !== undefined) {
        setPlanets(response);
      }
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      return null;
    }
  };

  const handleChange = (val: string) => {
    setSearch(val);
    setPrevSearch(val);
  };

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <ErrorBtn />
        <Search onHandleSubmit={handleSubmit} onHandleChange={handleChange} />
        <hr />
        {isLoading ? (
          <div className={styles.spinner}></div>
        ) : (
          <Main planets={planets} />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
