import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div>
                <label>Username:
                <input type="text"
                value={this.state.username}
               /> 
                </label>

                <label>Password:
                    <input type="text"
                    value={this.state.password}
                     /> 

                </label>
            </div>
        );
    }

}

export default withRouter(SessionForm);