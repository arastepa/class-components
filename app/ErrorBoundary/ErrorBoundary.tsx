import { Component } from 'react';
import { ErrorProps, ErrorState } from '../Types/errorBoundary';
import styles from '../Styles/app.module.css';

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('error from error boundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className={styles.errorBoundary}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
