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
import { useParams } from 'react-router-dom';

const App = (props: { pageCount: number }) => {
  const [search, setSearch] = useState('');
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const { prevSearch, setPrevSearch } = useHandleLS();
  const { id } = useParams();

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (search === '' && previous === '') {
      setIsloading(true);
      getPlanets(
        `https://swapi.dev/api/planets/?search=&page=${id === undefined ? 1 : id}`,
      ).then((response) => {
        setIsloading(false);
        if (response) setPlanets(response);
      });
    } else if (previous && search === '') {
      setIsloading(true);
      getPlanets(
        `https://swapi.dev/api/planets/?search=${previous.trim()}&page=${id === undefined ? 1 : id}`,
      ).then((response) => {
        setIsloading(false);
        if (response) setPlanets(response);
      });
    }
  }, [search, id]);

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
          `https://swapi.dev/api/planets/?search=&page=${id === undefined ? 1 : id}`,
        );
      } else if (search !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${search.trim()}&page=${id === undefined ? 1 : id}`,
        );
      } else if (prevSearch !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${prevSearch.trim()}&page=${id === undefined ? 1 : id}`,
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
          <Main pageCount={props.pageCount} planets={planets} />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
