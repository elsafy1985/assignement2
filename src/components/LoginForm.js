import React, { Component } from "react";
import "../styles/LoginFormStyle.css";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.compateData = this.compateData.bind(this);
  }
  updateUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  updatePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  compateData(event) {
    if (this.state.username === "ITI" && this.state.password === "P@ssw0rd") {
      //alert("Welcome ITI")
      document.getElementById("message").innerHTML = "";
      document.getElementById(
        "message"
      ).innerHTML = `<div class="alert alert-success" role="alert">Welcome ITI</div>`;
    } else {
      //alert("Invalid login")
      document.getElementById("message").innerHTML = "";
      document.getElementById(
        "message"
      ).innerHTML = `<div class="alert alert-danger" role="alert">Invalid login</div>`;
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.compateData} className="col-12">
          <div className="form-floating mb-3">
            <input
              value={this.state.username}
              onChange={this.updateUsername}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={this.state.password}
              onChange={this.updatePassword}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="col-12">
            <button type="Submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
        <div className="row">
          <div id="message" className="col-12 mt-3"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
