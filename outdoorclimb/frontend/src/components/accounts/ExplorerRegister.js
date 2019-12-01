import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register, explorerRegister } from "../../actions/auth";
import { returnErrors, createMessage } from "../../actions/messages";

export class ExplorerRegister extends Component {
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

  static propTypes = {
    register: PropTypes.func.isRequired,
    explorerRegister: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isExplorerAuthenticated: PropTypes.bool
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
      items.push(
        <option key={i} value={this.state[i]} onChange={this.onChange}>
          {this.states[i]}
        </option>
      );
    }
    return items;
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
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
    if (password != password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      this.props.register(username, password, email);
      // //Add the user to the explorer table
    }
  };

  componentDidUpdate(nextProps) {
    const newValue = nextProps.isAuthenticated;
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
    if (newValue !== this.props.isAuthenticated && newValue == true) {
      this.props.explorerRegister(email, address, city, state, zip, phone);
    }
  }
  render() {
    if (this.props.isExplorerAuthenticated) {
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
                  placeholder="superman"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email@email.com"
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
                  placeholder="Malibu"
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
                    value={state}
                    onChange={this.onChange}
                  >
                    <option key={-1} value="Choose" defaultValue>
                      Choose...
                    </option>
                    {this.createStateOptions()}
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    id="inputZip"
                    name="zip"
                    type="number"
                    className="form-control"
                    placeholder="1111"
                    onChange={this.onChange}
                    value={zip}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPhone">Phone</label>
                <input
                  id="inputPhone"
                  type="number"
                  placeholder="1-234-567-8910"
                  className="form-control"
                  name="phone"
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isExplorerAuthenticated: state.auth.isExplorerAuthenticated
});

export default connect(mapStateToProps, {
  register,
  explorerRegister,
  createMessage
})(ExplorerRegister);
