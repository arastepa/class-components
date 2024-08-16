'use client';

import { Component } from 'react';
import styles from '../Styles/app.module.css';

interface Props {}
interface State {
  error: boolean;
}
export default class ErrorBtn extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }
  handleError = () => {
    this.setState({ error: true });
  };
  render() {
    if (this.state.error === true) throw new Error('error from error btn');
    return (
      <div>
        <button className={styles.errorBtn} onClick={this.handleError}>
          throw error
        </button>
      </div>
    );
  }
}
