import { Component } from 'react';
import styles from '../Styles/app.module.css';

interface SearchProps {
  onHandleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  onHandleChange: (value: string) => void;
}

export default class Search extends Component<SearchProps> {
  render() {
    return (
      <div className={styles.search}>
        <form onSubmit={this.props.onHandleSubmit}>
          <input
            type="text"
            defaultValue={
              localStorage.getItem('previous')
                ? `${localStorage.getItem('previous')}`
                : ''
            }
            onChange={(val) => {
              console.log('zzz');
              this.props.onHandleChange(val.target.value);
            }}
            placeholder="type name of the planet"
            className={styles.input}
          />
          <input type="submit" value="find" />
        </form>
      </div>
    );
  }
}
