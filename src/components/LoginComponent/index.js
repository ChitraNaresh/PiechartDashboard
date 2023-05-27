import {Component} from 'react'

import './index.css'

class LoginComponent extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: false,
    isLoad: false,
  }

  onSubmitSuccess = () => {
    this.setState({errorMsg: true})
    const {history} = this.props
    this.setState({isLoad: false})
    history.replace('/Home')
  }

  onSubmitFailure = () => {
    this.setState({errorMsg: true, isLoad: false})
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    this.setState({username: '', password: '', isLoad: true})
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value, errorMsg: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, errorMsg: false})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password : rahul@2021 (use this password)"
          id="password"
          className="input-el"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          placeholder="User name : rahul (use this name)"
          type="text"
          id="username"
          className="input-el"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {errorMsg, isLoad} = this.state
    return (
      <div className="login-form-container">
        <h1 className="login-heading">Login to go ahead...</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div>{this.renderUsernameField()}</div>
          <div>{this.renderPasswordField()}</div>
          <div className="btn-card">
            <button type="submit" className="login-btn">
              Login
            </button>
            {isLoad && <p className="loading">Loading...</p>}
            {errorMsg && (
              <p className="err-msg">Invalid password or Username</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginComponent
