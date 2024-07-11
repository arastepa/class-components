import { useEffect, useState } from 'react';

const UseHandleLS = () => {
  const [prevSearch, setPrevSearch] = useState(
    localStorage.getItem('previous') ?? '',
  );
  useEffect(() => {
    return () => {
      localStorage.setItem('previous', prevSearch);
    };
  }, [prevSearch]);
  return { prevSearch, setPrevSearch };
};

export default UseHandleLS;
