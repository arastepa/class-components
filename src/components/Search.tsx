import styles from '../Styles/app.module.css';
import React from 'react';

interface SearchProps {
  onHandleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  onHandleChange: (value: string) => void;
}

const Search = (props: SearchProps) => {
  return (
    <div className={styles.search}>
      <form onSubmit={props.onHandleSubmit}>
        <input
          type="text"
          defaultValue={
            localStorage.getItem('previous')
              ? `${localStorage.getItem('previous')}`
              : ''
          }
          onChange={(val) => {
            props.onHandleChange(val.target.value);
          }}
          className={styles.input}
          name="search"
          data-testid="search"
        />
        <input type="submit" value="find" />
      </form>
    </div>
  );
};

export default Search;
