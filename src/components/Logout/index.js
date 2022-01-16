// Write your code here

import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    const {logout} = this.props
    return (
      <button className="logout-button" type="button" onClick={logout}>
        Logout
      </button>
    )
  }
}

export default Logout
