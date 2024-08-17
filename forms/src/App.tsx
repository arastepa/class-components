import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import HookForm from './components/HookForm';
import Uncontrolled from './components/Uncontrolled';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hookform" element={<HookForm />} />
        <Route path="/uncontrolled" element={<Uncontrolled />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
