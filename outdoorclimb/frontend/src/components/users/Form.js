import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { addUser } from "../../actions/users";

export class Form extends Component {
  state = {
    name: "",
    email: ""
  };

  static propTypes = {
    addUser: Proptypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const user = { name, email, message };
    this.props.addUser(user);
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="card card-ody mt-4 mt-4">
        <h2>Add user</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addUser })(Form);
