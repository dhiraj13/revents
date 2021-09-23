import React from 'react'
import { ReactReduxContext } from 'react-redux'

export const withReducer = (key, reducer) => (WrappedComponent) => {
  class Extended extends React.Component {
    static WrappedComponent = WrappedComponent

    UNSAFE_componentWillMount() {
      const { store } = this.context

      store.injectReducer(key, reducer)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  Extended.contextType = ReactReduxContext

  return Extended
}

export default withReducer
