import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  /**
   * Handles successful submission by setting a JWT token cookie and redirecting to the home page.
   * @param {string} jwtToken - The JSON Web Token received upon successful submission.
   * @returns {void} This method doesn't return a value.
   */
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  ```
  /**
   * Handles the failure case when submitting a form
   * @param {string} errorMsg - The error message to be displayed
   * @returns {void} This method doesn't return a value
   */
  ```
  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  /**
   * Handles form submission for user login
   * @param {Event} event - The form submission event
   * @returns {Promise<void>} Nothing
   */  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  /**
   * Updates the username state when the user enters input in the username field.
   * @param {Object} event - The event object from the input change.
   * @returns {void} This method doesn't return a value.
   */
  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  ```
  /**
   * Updates the password state when the password input changes.
   * @param {Object} event - The event object from the input change.
   * @returns {void} This method doesn't return a value.
   */
  ```
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  /**
   * Renders the username input field with label
   * @returns {JSX.Element} A fragment containing a label and an input element for the username
   */
  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="label" htmlFor="userName">
          USERNAME
        </label>
        <input
          type="text"
          id="userName"
          placeholder="Username"
          className="user-input"
          value={username}
          onChange={this.onEnterUsername}
        />
      </>
    )
  }

  /**
   * Renders the password input field with a label
   * @returns {JSX.Element} A React fragment containing a label and password input element
   */
  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="user-input"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="jobby-app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
