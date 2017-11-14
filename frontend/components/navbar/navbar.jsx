import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../shop/search';
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
            <input type="text" placeholder="Location"/>
            <button>Submit</button>
          </div>
          <div className="icons">
            <Link to="/">Register your coffee shop</Link>
            <div className="profile">
              <Link to={`/${this.props.currentUser.id}`}><i className="fa fa-user fa-2x"
                aria-hidden="true">
              </i>
              </Link>
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
