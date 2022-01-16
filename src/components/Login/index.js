// Write your code here

import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {login} = this.props
    return (
      <button className="login-button" type="button" onClick={login}>
        Login
      </button>
    )
  }
}

export default Login
