import { useContext, useEffect, useMemo, useState } from 'react';
import Search from '../../components/Search';
import Main from '../../components/Main';
import styles from '../../Styles/app.module.css';
import { Planets } from '../../Types/appTypes';
import ErrorBtn from '../../ErrorBoundary/ErrorBtn';
import React from 'react';
import useHandleLS from '../../Hooks/useHandleLS';
import { useDispatch } from 'react-redux';
import { setPageCount } from '../../Store/Pagination/pageSlice';
import { useGetPlanetQuery, useGetPlanetsQuery } from '../../Store/api';
import { setPlanets } from '../../Store/Planets/planetSlice';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { useRouter } from 'next/router';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [planetsData, setPlanetsData] = useState<Planets[]>([]);
  const { setPrevSearch } = useHandleLS();
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const {
    data: prevSearchedData,
    isLoading: searchLoading,
    isFetching: searchFetching,
  } = useGetPlanetQuery(
    typeof window !== 'undefined'
      ? (localStorage.getItem('previous') ?? '')
      : '',
  );
  const { data: searchedData } = useGetPlanetQuery(search);
  const {
    data: resultData,
    isLoading: pageLoading,
    isFetching: pageFetching,
  } = useGetPlanetsQuery(id === undefined ? 1 : +id);

  const loading =
    searchLoading || pageLoading || searchFetching || pageFetching;

  const searchedDataResult: Planets[] | undefined = useMemo(
    () =>
      searchedData?.results.map((planet: Planets) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population,
      })),
    [searchedData],
  );

  const prevSearchedDataResult: Planets[] | undefined = useMemo(
    () =>
      prevSearchedData?.results.map((planet: Planets) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population,
      })),
    [prevSearchedData],
  );

  const pageResult: Planets[] | undefined = useMemo(
    () =>
      resultData?.results.map((planet: Planets) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population,
      })),
    [resultData],
  );

  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (previous === '') {
      if (pageResult) {
        setPlanetsData(pageResult);
        dispatch(setPlanets(pageResult));
        dispatch(setPageCount((resultData?.count ?? 0) / pageResult.length));
      }
    } else if (previous) {
      if (prevSearchedDataResult) {
        setPlanetsData(prevSearchedDataResult);
      }
      dispatch(
        setPageCount(
          prevSearchedDataResult
            ? Math.ceil(prevSearchedDataResult.length / 10)
            : 0,
        ),
      );
    }
  }, [dispatch, pageResult, prevSearchedDataResult, resultData?.count]);

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      setPrevSearch(search);
      const prevoius = localStorage.getItem('previous') || search;
      await getResponse(prevoius);
    } catch (error) {
      return null;
    }
  }

  const getResponse = async (prevoius: string) => {
    try {
      let response: Planets[] | undefined;
      if (search === '' && prevoius === '') {
        response = pageResult;
        if (pageResult) {
          dispatch(setPageCount((resultData?.count ?? 0) / pageResult.length));
        }
      } else if (search !== '') {
        response = searchedDataResult;
        dispatch(setPageCount(response ? Math.ceil(response.length / 10) : 0));
      } else if (prevoius !== '') {
        response = prevSearchedDataResult;
        dispatch(setPageCount(response ? Math.ceil(response.length / 10) : 0));
      }
      if (response !== undefined) {
        setPlanetsData(response);
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
      {loading ? (
        <div className={styles.spinner} data-testid="spinner"></div>
      ) : (
        <Main planets={planetsData} />
      )}
    </div>
  );
};

export default MainPage;
