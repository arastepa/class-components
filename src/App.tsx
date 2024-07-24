import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { getPageCount } from './Services/getPlanets';
import AppRoutes from './AppRoutes';
import { useGetAllPlanetsQuery } from './Store/api';
import { useDispatch } from 'react-redux';
import { setPageCount } from './Store/Pagination/pageSlice';

const App = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllPlanetsQuery();
  useEffect(() => {
    if (data) {
      const count = getPageCount(data);
      dispatch(setPageCount(count));
    }
  }, [data, dispatch]);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
