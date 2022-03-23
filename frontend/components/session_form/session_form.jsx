import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  } 

  renderErrors() {
    const { errors } = this.props
    return(
      <ul className ="session-errors">
        {(errors.length === 0) ? (
          null
        ) : (
          errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
          ))
        )}
      </ul>
    );
  }

  handleDemoLogin() {
    this.setState({
      email: "",
      password: "",
    });
    const email = "demo@email.com";
    const password = "password"

    let count = 0;
    this.loginDemoInterval = setInterval(() => {
      this.setState({
        email: count < email.length ? (this.state.email.concat(email[count])) : email,
        password: count < password.length ? (this.state.password.concat(password[count])) : password,
      });
      count++;
      
      if (count === 20) {
        clearInterval(this.loginDemoInterval);
      }
    }, 80);
  }

  demoLoginButton() {
    return (
      (this.props.formType === "Signup") ? (
        null
      ) : (
        <button
          className="demo-login"
          onClick={
            (e) => {
              e.preventDefault();
              this.handleDemoLogin();
            }
          }
        >
          Guest Account
        </button>
      )
    )
  }

  registrationForm() {
    return (
      this.props.formType === "Signup" ? (
        <div>
          <label>First Name
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="session-input"
            />
          </label>
          <br/>
          <label>Last Name
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="session-input"
            />
          </label>
        </div>
      ) : ( null )
    )
  }

  render() {
    const { formType } = this.props
    const register = (formType === "Signup");
    
    return (
      <div className="session-form-container">
        <h3>Login or Register</h3>
        <h2>
          { register ? 'Create your account' : 'Welcome To Bold' }
        </h2>

        { this.renderErrors() }

        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">
            <br/>
            <label>Email
              <input 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </label>
            <br/>
            <label>Password
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br/>
            { this.registrationForm() }
            <br/>
            <input 
              className="session-submit"
              type="submit"
              value="Continue"
            />
          </div>
          { this.demoLoginButton() }
        </form>
        <Link
          to={ register ? "/login" : "/signup" }
          className="switch-form-link"
        >
          {register ? "Sign In" : "Don't have an account? Sign Up"}
        </Link>
      </div>
    );
  }
}

export default SessionForm;
