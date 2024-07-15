import { useEffect, useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styles from '../Styles/app.module.css';
import { Planets } from '../Types/appTypes';
import { getPageCount, getPlanets } from '../Services/getPlanets';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorBtn from '../ErrorBoundary/ErrorBtn';
import React from 'react';
import useHandleLS from '../Hooks/useHandleLS';
import { useParams } from 'react-router-dom';

const MainPage = (props: {
  pageCount: number;
  setPageCount: (x: number) => void;
}) => {
  const [search, setSearch] = useState('');
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const { setPrevSearch } = useHandleLS();
  const { id } = useParams();

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    setIsloading(true);
    if (previous === '') {
      getPlanets(
        `https://swapi.dev/api/planets/?search=&page=${id === undefined ? 1 : id}`,
      ).then((response) => {
        setIsloading(false);
        getPageCount().then((res) => {
          if (res) props.setPageCount(res);
        });
        if (response) setPlanets(response);
      });
    } else if (previous) {
      getPlanets(
        `https://swapi.dev/api/planets/?search=${previous.trim()}`,
      ).then((response) => {
        setIsloading(false);
        if (response) setPlanets(response);
        props.setPageCount(response ? Math.ceil(response.length / 10) : 0);
      });
    }
  }, [id, props]);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      setPrevSearch(search);
      const prevoius = search;
      await getResponse(prevoius);
    } catch (error) {
      return null;
    }
  }

  const getResponse = async (prevoius: string) => {
    try {
      setIsloading(true);
      let response: Planets[] | undefined;
      if (search === '' && prevoius === '') {
        response = await getPlanets(`https://swapi.dev/api/planets/`);
        await getPageCount();
      } else if (search !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${search.trim()}`,
        );
        props.setPageCount(response ? Math.ceil(response.length / 10) : 0);
      } else if (prevoius !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${prevoius.trim()}`,
        );
        props.setPageCount(response ? Math.ceil(response.length / 10) : 0);
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
  };

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <ErrorBtn />
        <Search onHandleSubmit={handleSubmit} onHandleChange={handleChange} />
        <hr />
        {isLoading ? (
          <div className={styles.spinner} data-testid="spinner"></div>
        ) : (
          <Main pageCount={props.pageCount} planets={planets} />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default MainPage;
