import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { requestIncrement } from 'ducks'

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    requestIncrement: PropTypes.func.isRequired
  }

  render () {
    const { count, requestIncrement } = this.props

    return (
      <div>
        Count: { count }
        <button onClick={ requestIncrement } type="button">increment async</button>
      </div>
    )
  }
}

export default connect(state => {
  return {
    count: state.get('count')
  }
}, ({
  requestIncrement
}))(App)
