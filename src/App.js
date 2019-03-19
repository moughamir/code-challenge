import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignupAction } from './actions/auth'
import FormContainer from './components/formContainer'
import InputField from './components/inputField'
import Button from './components/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer>
          <InputField type='text' placeholder='username'/>
          <InputField type='email' placeholder='your email'/>
          <InputField type='password'/>
          <Button type='submit' text='sign up' handleClick={(e) => console.log(e)}/>
        </FormContainer>
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
