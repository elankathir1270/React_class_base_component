import { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    //when a component has this method, it becomes an error boundary
    // when any error occurs in child component, this method will be called
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
