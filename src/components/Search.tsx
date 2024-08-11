'use client';

import styles from '../Styles/app.module.css';
import React, { useEffect, useState } from 'react';
import useHandleLS from '../Hooks/useHandleLS';
import { Planets } from '../Types/appTypes';
import { getPlanets } from '../Services/getPlanets';

interface SearchProps {
  onGetResponse: (value: string) => void;
  onSetPlanets: (value: Planets[]) => void;
}

const Search = (props: SearchProps) => {
  const { setPrevSearch } = useHandleLS();
  const [search, setSearch] = useState('');
  const setPlanets = props.onSetPlanets;
  useEffect(() => {
    const previous = localStorage.getItem('previous');
    if (previous) {
      getPlanets(`https://swapi.dev/api/planets/?search=${previous}`).then(
        (planets: Planets[]) => {
          setPlanets(planets);
        },
      );
      setSearch(previous);
    }
  }, [setPlanets]);
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      setPrevSearch(search);
      await props.onGetResponse(search);
    } catch (error) {
      return null;
    }
  }
  const handleChange = (val: string) => {
    setSearch(val);
  };

  return (
    <>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={
              typeof window !== 'undefined'
                ? (localStorage.getItem('previous') ?? '')
                : ''
            }
            onChange={(val) => {
              handleChange(val.target.value);
            }}
            className={styles.input}
            name="search"
            data-testid="search"
          />
          <input type="submit" value="find" data-testid="searching" />
        </form>
      </div>
    </>
  );
};

export default Search;
