import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page/:id" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
