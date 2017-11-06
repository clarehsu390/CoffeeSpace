import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }



  render() {
    if (this.props.currentUser) {
      return (

        <section className="navbar">
          <h2>Coffee Space</h2>
          <div className="inputs">
            <input type="text" className="search" placeholder="Search"/>
            <input type="text" placeholder="Location"/>
            <button>Submit</button>
          </div>
          <div className="icons">
            <Link to="/">Register your coffee shop</Link>
            <div className="profile">
              <i className="fa fa-user fa-2x"
                aria-hidden="true"
                onClick={this.handleUserClick}>
              </i>
            </div>
            <div className="logout">
              <i className="fa fa-sign-out fa-2x"
                aria-hidden="true"
                onClick={this.handleClick}>
              </i>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
