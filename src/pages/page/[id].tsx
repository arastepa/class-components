import { useContext, useEffect, useMemo, useState } from 'react';
import Search from '../../components/Search';
import Main from '../../components/Main';
import styles from '../../Styles/app.module.css';
import { Planets } from '../../Types/appTypes';
import ErrorBtn from '../../ErrorBoundary/ErrorBtn';
import React from 'react';
import useHandleLS from '../../Hooks/useHandleLS';
import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../../Store/Pagination/pageSlice';
import {
  planetsApi,
  useGetPlanetQuery,
  useGetPlanetsQuery,
} from '../../Store/api';
import { setPlanets } from '../../Store/Planets/planetSlice';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { RootState, wrapper } from '../../Store/store';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/query';

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { id } = context.query;
    store.dispatch(planetsApi.endpoints.getPlanets.initiate(id ? +id : 1));
    await Promise.all(store.dispatch(planetsApi.util.getRunningQueriesThunk()));
    return { props: {} };
  },
);

const MainPage = () => {
  const [search, setSearch] = useState('');
  const planetsData = useSelector((state: RootState) => state.planets.items);
  const { setPrevSearch } = useHandleLS();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { data: resultData } = useGetPlanetsQuery(id === undefined ? 1 : +id);

  const { data: prevSearchedData } = useGetPlanetQuery(
    typeof window !== 'undefined'
      ? localStorage.getItem('previous') || skipToken
      : skipToken,
  );
  const { data: searchedData } = useGetPlanetQuery(search ? search : skipToken);
  const searchedDataResult: Planets[] | undefined = useMemo(
    () =>
      searchedData
        ? searchedData.results.map((planet: Planets) => ({
            name: planet.name,
            climate: planet.climate,
            gravity: planet.gravity,
            population: planet.population,
          }))
        : undefined,
    [searchedData],
  );

  const prevSearchedDataResult: Planets[] | undefined = useMemo(
    () =>
      prevSearchedData
        ? prevSearchedData.results.map((planet: Planets) => ({
            name: planet.name,
            climate: planet.climate,
            gravity: planet.gravity,
            population: planet.population,
          }))
        : undefined,
    [prevSearchedData],
  );

  const pageResult: Planets[] | undefined = useMemo(
    () =>
      resultData
        ? resultData.results.map((planet: Planets) => ({
            name: planet.name,
            climate: planet.climate,
            gravity: planet.gravity,
            population: planet.population,
          }))
        : undefined,
    [resultData],
  );

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (pageResult) {
      dispatch(setPlanets(pageResult));
      dispatch(setPageCount((resultData?.count ?? 0) / pageResult.length));
    }
    if (previous && prevSearchedDataResult) {
      dispatch(setPlanets(prevSearchedDataResult));
      dispatch(
        setPageCount(pageResult ? Math.ceil(pageResult.length / 10) : 0),
      );
    }
  }, [dispatch, pageResult, resultData, prevSearchedDataResult]);

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (previous) setSearch(previous);
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      setPrevSearch(search);
      await getResponse();
    } catch (error) {
      return null;
    }
  }

  const getResponse = async () => {
    try {
      let response: Planets[] | undefined;
      if (search === '') {
        response = pageResult;
        console.log(response);
        if (pageResult) {
          dispatch(setPageCount((resultData?.count ?? 0) / pageResult.length));
        }
      } else if (search !== '') {
        response = searchedDataResult;
        dispatch(setPageCount(response ? Math.ceil(response.length / 10) : 0));
      }
      if (response !== undefined) {
        dispatch(setPlanets(response));
      }
    } catch (error) {
      return null;
    }
  };

  const handleChange = (val: string) => {
    setSearch(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btns}>
        <ErrorBtn />
        <button className={styles.switch} onClick={toggleTheme}>
          {`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
        </button>
      </div>
      <Search onHandleSubmit={handleSubmit} onHandleChange={handleChange} />
      <hr />
      <Main planets={planetsData} />
    </div>
  );
};

export default MainPage;
