import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          An error occured
          <Link to="/">Click here </Link>to go the home
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
