import React, { Component } from "react"

const logError = (error, errorInfo) => {
  console.warn("Error in Matcha advisor: ", error, errorInfo)
}

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo)
  }

  render() {
    // const { children } = this.props
    const { hasError } = this.state
    console.log("hasError", hasError)
    return hasError ? <div>there is an error</div> : this.props.children
  }
}

export default ErrorBoundary
