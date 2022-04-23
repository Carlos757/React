import { Component } from "react";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }  

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    alert(`Email: ${this.state.email} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Iniciar Sesion</h2>

          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>

          <p></p>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>

          <p></p>
          <button type="submit">Login</button>

        </form>
      </div>
    );
  }
}
export default AppClass;