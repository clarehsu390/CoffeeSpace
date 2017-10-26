import React from 'react';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (

        <section className="navbar">
          <input type="text" className="search" placeholder="Search"/>
          <i className="fa fa-user fa-2x"
            aria-hidden="true"
            onClick={this.handleUserClick}>
          </i>
          <i className="fa fa-safari fa-2x"
            aria-hidden="true"
            onClick={this.handleDiscoverClick}>
          </i>
          <i className="fa fa-sign-out fa-2x"
            aria-hidden="true"
            onClick={this.handleClick}>

          </i>
        </section>
      );
    }
  }
}
