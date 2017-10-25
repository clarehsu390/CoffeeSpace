import React from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="homepage">
          <h1>Welcome to Coffee Space</h1>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      );
    }
  }
}
