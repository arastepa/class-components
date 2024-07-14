import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPageCount } from './Services/getPlanets';
import AppRoutes from './AppRoutes';

const App = () => {
  const [pageCount, setPageCount] = useState<number>(0);
  useEffect(() => {
    getPageCount().then((result) => {
      if (result) setPageCount(result);
    });
  }, []);
  return (
    <BrowserRouter>
      <AppRoutes pageCount={pageCount} setPageCount={setPageCount} />
    </BrowserRouter>
  );
};

export default App;
