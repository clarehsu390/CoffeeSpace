import React from 'react';
import { Redirect, withRouter, Link, Route} from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveCurrentUser(this.props.match.params.userId);
    }

    render() {
        if ( this.props.loggedIn) {
            return (
                <div className='profile'>
                    <h3>{this.props.currentUser.username}</h3>
                    <img src="{this.props.currentUser.image_url}" alt=""/>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default withRouter(UserProfile);
