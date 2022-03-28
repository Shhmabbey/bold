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
            <li key={`error-${i}`} className="error">
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
      first_name: "Demo",
      last_name: "User"
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
          <p className="Session_Form_Label" >First Name</p>
          <label htmlFor="first-name" >
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="Session_Form_Input"
            />
          </label>
          <br/>
          <p className="Session_Form_Label" >Last Name</p>
          <label htmlFor="last-name" >
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="Session_Form_Input"
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
        <div>
          <p className="Login_Header">Login or Register</p>
        </div>
        <div>
          <p className="Login_Header_Greeting">
            { register ? 'Create your account' : 'Welcome To Bold' }
          </p>
          <form onSubmit={this.handleSubmit} className="Session_Form_Box">
            <div className="session-form">
              <br/>
              <p className="Session_Form_Label">Email</p>
              <label htmlFor="email" ></label>
                <input 
                  id="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="Session_Form_Input"
                  />
              <br/>
              <p className="Session_Form_Label">Password</p>
              <label htmlFor="password"></label>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="Session_Form_Input"
              />
              { this.renderErrors() }
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
      </div>
    );
  }
}

export default SessionForm;
