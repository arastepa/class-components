import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';
import { useEffect, useState } from 'react';
import { getPageCount } from './Services/getPlanets';

const App = () => {
  const [pageCount, setPageCount] = useState<number>(0);
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
          element={
            <MainPage pageCount={pageCount} setPageCount={setPageCount} />
          }
        />
        <Route
          path="/page/:id"
          element={
            <MainPage pageCount={pageCount} setPageCount={setPageCount} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
