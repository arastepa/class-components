import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';
import { useEffect, useState } from 'react';
import { getPageCount } from './Services/getPlanets';

const App = () => {
  const [pageCount, setPageCount] = useState<number | null>(null);
  useEffect(() => {
    getPageCount().then((result) => {
      if (result) setPageCount(result);
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={pageCount && <MainPage pageCount={pageCount} />}
        />
        <Route
          path="/page/:id"
          element={pageCount && <MainPage pageCount={pageCount} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
