import { useContext, useState } from 'react';
import Search from '../components/Search';
import Main from '../components/Main';
import styles from '../Styles/app.module.css';
import ErrorBtn from '../ErrorBoundary/ErrorBtn';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { getPageCount, getPlanet, getPlanets } from '../Services/getPlanets';
import { PlanetDetails, Planets } from '../Types/appTypes';
import Header from '../components/Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { json } from '@remix-run/node';
import { useLoaderData, useNavigation } from '@remix-run/react';

export const loader = async ({ params, request }) => {
  const id = params.id;
  const url = new URL(request.url);
  const planetId = url.searchParams.get('details');
  let details: PlanetDetails | null = null;
  if (planetId)
    details = await getPlanet(`https://swapi.dev/api/planets/${planetId}`);
  const planetsData = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id ? id : 1}`,
  );
  const pageNum: number = await getPageCount();
  return json({ planetsData, pageNum, details });
};

export const MainPage = () => {
  const { planetsData, pageNum, details } = useLoaderData<{
    planetsData: Planets[];
    pageNum: number;
    details: PlanetDetails;
  }>();
  const navigation = useNavigation();
  const [pageCount, setPageCount] = useState(null);
  const [planets, setPlanets] = useState(null);
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
        {navigation.state === 'loading' ? (
          <div className={styles.spinner}></div>
        ) : (
          <>
            <div className={styles.btns}>
              <ErrorBtn />
              <button className={styles.switch} onClick={toggleTheme}>
                {`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
              </button>
            </div>
            <Search onGetResponse={getResponse} />
            <hr />
            <Main
              details={details}
              planets={planets ? planets : planetsData}
              pageCount={pageCount ? pageCount : pageNum}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default MainPage;
