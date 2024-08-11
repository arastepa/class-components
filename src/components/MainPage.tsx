'use client';

import { useContext, useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styles from '../Styles/app.module.css';
import ErrorBtn from '../ErrorBoundary/ErrorBtn';
import React from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { getPageCount, getPlanets } from '../Services/getPlanets';
import { Planets } from '../Types/appTypes';

export const MainPage = (props: {
  planetsData: Planets[];
  pageCount: number;
}) => {
  const [pageCount, setPageCount] = useState(props.pageCount);
  const [planets, setPlanets] = useState(props.planetsData);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getResponse = async (search: string) => {
    try {
      let response: Planets[] | undefined;
      if (search === '') {
        response = props.planetsData;
        setPageCount(await getPageCount());
      } else if (search !== '') {
        response = await getPlanets(
          `https://swapi.dev/api/planets/?search=${search}`,
        );
        setPageCount(response ? Math.ceil(response.length / 10) : 0);
      }
      if (response !== undefined) {
        setPlanets(response);
      }
    } catch (error) {
      return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.btns}>
        <ErrorBtn />
        <button className={styles.switch} onClick={toggleTheme}>
          {`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
        </button>
      </div>
      <Search onGetResponse={getResponse} onSetPlanets={setPlanets} />
      <hr />
      <Main planets={planets} pageCount={pageCount} />
    </div>
  );
};

export default MainPage;
