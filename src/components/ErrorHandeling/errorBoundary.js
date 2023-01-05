// The componentDidCatch() method works like a JavaScript catch {} block, but for components. 
// Only class components can be error boundaries. In practice, most of the time you’ll want to declare 
// an error boundary component once and use it throughout your application.

// Also bear in mind that try/catch blocks won't work on all cases.
// If a component deep in the hierarchy tries to updates and fails, the try/catch block in one of the parents 
// won't work -- because it isn't necessarily updating together with the child.

// Introducing Error Boundaries:
// The premise upon which the Error Boundaries idea in React was born from is that JavaScript errors in the
//user interface should not be allowed to break the whole application.
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
// and does something worthwhile with it like displaying a fallback interface instead of the component tree
//that crashed or logging the exact error. Error boundaries catch errors during rendering, in lifecycle methods,
// and in constructors of the whole tree below them, unmount the component tree while maintaining the usual
//workings and renderings of the rest of the React application.

// Error Boundaries in React:
// An Error Boundary in React is therefore defined as a Class Component that defines one or both of static
//getDerivedStateFromError() or componentDidCatch()lifecycle methods.
//The first one, static getDerivedStateFromError() is used to render a fallback user interface after an error
//has been thrown and the second one, componentDidCatch() is used to log error information to an error tracking
// say Sentry. This is the official syntax below:

import React, { Component } from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Render children if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;

// Caution Tips
// Error boundaries do not catch errors for:
// Event handlers.
// setTimeout or requestAnimationFramecallbacks.
// Server side rendering.
// Errors thrown in the error boundary itself, rather than in its children.
