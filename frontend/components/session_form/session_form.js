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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="session-form">
                <h1>Login to continue</h1>
                <form className="login-form">
                <label>
                <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}/> 
                </label>
                <br/>
                <label>
                    <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}/> 

                </label>
                <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        );
    }

}

export default withRouter(SessionForm);