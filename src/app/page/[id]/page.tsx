import { MainPage } from '../../../components/MainPage';
import { getPageCount, getPlanets } from '../../../Services/getPlanets';

const getPlanetsData = async (id: string) => {
  const res = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id}`,
  );
  return res;
};

const getNumPage = async () => {
  const res: number = await getPageCount();
  return res;
};

const PageDynamic = async (props: { params: { id: string } }) => {
  const id = props.params.id;
  const planetsData = await getPlanetsData(id ? id[0] : '1');
  const pageCount = await getNumPage();

  return <MainPage planetsData={planetsData} pageCount={pageCount} />;
};

export default PageDynamic;
