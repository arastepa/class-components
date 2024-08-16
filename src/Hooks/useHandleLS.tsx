import { useEffect, useState } from 'react';

const UseHandleLS = () => {
  let prev: string = '';
  if (typeof window !== 'undefined') {
    prev = localStorage.getItem('previous') ?? '';
  }
  const [prevSearch, setPrevSearch] = useState(
    typeof window !== 'undefined' ? prev : '',
  );
  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem('previous', prevSearch);
  }, [prevSearch]);
  return { prevSearch, setPrevSearch };
};

export default UseHandleLS;
