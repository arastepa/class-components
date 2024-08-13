import { useEffect, useState } from 'react';

const UseHandleLS = () => {
  const [prevSearch, setPrevSearch] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('previous') : '',
  );
  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem('previous', prevSearch);
  }, [prevSearch]);
  return { prevSearch, setPrevSearch };
};

export default UseHandleLS;
