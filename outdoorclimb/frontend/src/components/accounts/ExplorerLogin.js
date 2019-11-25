import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, explorerLogin } from "../../actions/auth";

export class ExplorerLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    explorerLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isExplorerAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    if (this.props.isAuthenticated) {
      this.props.explorerLogin();
    }
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    if (this.props.isExplorerAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div>
        <div className="pt-8">
          <Link to="/login">Normal Climber? Over Here</Link>
        </div>
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">Explorer Login</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/explorerregister/">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = state => ({
  isExplorerAuthenticated: state.auth.isAuthenticated,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateTopProps, {
  login,
  explorerLogin
})(ExplorerLogin);
