import { Component } from 'react';
import styles from '../Styles/app.module.css';

interface SearchProps {
  onHandleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  onHandleChange: (value: string) => void;
  prevSearch: string;
}

export default class Search extends Component<SearchProps> {
  render() {
    return (
      <div className={styles.search}>
        <form onSubmit={this.props.onHandleSubmit}>
          <input
            type="text"
            defaultValue={this.props.prevSearch}
            placeholder="type text"
            onChange={(val) => {
              this.props.onHandleChange(val.target.value);
            }}
            className={styles.input}
          />
          <input type="submit" value="find" />
        </form>
      </div>
    );
  }
}
