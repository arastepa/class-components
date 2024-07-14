import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';

const AppRoutes = (props: {
  pageCount: number;
  setPageCount: (x: number) => void;
}) => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              pageCount={props.pageCount}
              setPageCount={props.setPageCount}
            />
          }
        />
        <Route
          path="/page/:id"
          element={
            <MainPage
              pageCount={props.pageCount}
              setPageCount={props.setPageCount}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
