import { MainPage } from '../components/MainPage';
import { getPageCount, getPlanet, getPlanets } from '../Services/getPlanets';

const getPlanetsData = async (id: string) => {
  const res = await getPlanets(
    `https://swapi.dev/api/planets/?search=&page=${id}`,
  );
  return res;
};

export const getDetails = async (planetId: string) => {
  const res = getPlanet(`https://swapi.dev/api/planets/${planetId}`);
  return res;
};

const getNumPage = async () => {
  const res: number = await getPageCount();
  return res;
};

const Page = async (props: {
  params: { id: string };
  searchParams: { details: string };
}) => {
  const id = props.params.id;
  const detail = props.searchParams.details;
  let details = null;
  if (detail) details = await getDetails(detail);
  const planetsData = await getPlanetsData(id ? id[0] : '1');
  const pageCount = await getNumPage();

  return (
    <MainPage
      details={details}
      planetsData={planetsData}
      pageCount={pageCount}
    />
  );
};

export default Page;
