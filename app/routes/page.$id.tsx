import { useContext, useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styles from '../Styles/app.module.css';
import ErrorBtn from '../ErrorBoundary/ErrorBtn';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { getPageCount, getPlanets } from '../Services/getPlanets';
import { Planets } from '../Types/appTypes';
import Header from '../components/Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ params }) => {
  const id = params.id;
  const planetsData = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id ? id : 1}`,
  );
  const pageNum: number = await getPageCount();
  return json({ planetsData, pageNum });
};

export const MainPage = () => {
  const { planetsData, pageNum } = useLoaderData<{
    planetsData: Planets[];
    pageNum: number;
  }>();
  const [pageCount, setPageCount] = useState(pageNum);
  const [planets, setPlanets] = useState(planetsData);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getResponse = async (search: string) => {
    try {
      let response: Planets[] | undefined;
      if (search === '') {
        response = planetsData;
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
    <ErrorBoundary>
      <div className={styles.container}>
        <Header />
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
    </ErrorBoundary>
  );
};

export default MainPage;
