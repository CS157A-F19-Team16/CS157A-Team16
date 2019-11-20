import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class ExplorerRegister extends Component {
  state = {
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    password: "",
    password2: ""
  };

  states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
  ];

  createStateOptions() {
    let items = [];
    for (let i = 0; i < this.states.length; i++) {
      items.push(<option>{this.states[i]}</option>);
    }
    return items;
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password != password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const {
      username,
      email,
      address,
      city,
      state,
      zip,
      phone,
      password,
      password2
    } = this.state;

    return (
      <div>
        <div className="pt-8">
          <Link to="/login">Normal Climber? Over Here</Link>
        </div>
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">Explorer Register</h2>
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
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="address"
                  placeholder="1234 Main St"
                  onChange={this.onChange}
                  value={address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="inputCity"
                  onChange={this.onChange}
                  value={city}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select
                    id="inputState"
                    name="state"
                    className="form-control"
                    placeholder="Choose"
                    value={state}
                    onChange={this.onChange}
                  >
                    <option selected>Choose...</option>
                    {this.createStateOptions()}
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    value={zip}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={phone}
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
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                Already have an account? <Link to="/explorerlogin">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
