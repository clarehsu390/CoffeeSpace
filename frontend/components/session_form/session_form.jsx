import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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

    navLink() {
        if (this.props.formType === 'login') {
            return <Link to ='/signup'>sign up instead</Link>;
        } else {
            return <Link to='/login'>log in instead</Link>;
        }
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) =>  (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form">
                <div className="session-body">
                <h1>Coffee Space</h1>
                <h3>Please {this.props.formType} or {this.navLink()}</h3>
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
                {this.renderErrors()}
                <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
            </form>
                </div>
            </div>
        );
    }

}

export default withRouter(SessionForm);