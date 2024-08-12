import styles from '../Styles/app.module.css';
import React, { useEffect } from 'react';

interface SearchProps {
  onHandleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  search: string;
  setSearch: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const setSearch = props.setSearch;
  useEffect(() => {
    const prev = localStorage.getItem('previous');
    if (prev) {
      setSearch(prev);
    }
  }, [setSearch]);
  return (
    <div className={styles.search}>
      <form onSubmit={props.onHandleSubmit}>
        <input
          type="text"
          value={props.search}
          onChange={(val) => {
            props.setSearch(val.target.value);
          }}
          className={styles.input}
          name="search"
          data-testid="search"
        />
        <input type="submit" value="find" data-testid="searching" />
      </form>
    </div>
  );
};

export default Search;
