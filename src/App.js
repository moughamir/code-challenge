import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignupAction } from './actions/auth'

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  signUp: () => dispatch(SignupAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
