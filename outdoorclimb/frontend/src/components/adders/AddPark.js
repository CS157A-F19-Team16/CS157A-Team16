import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPark } from "../../actions/parks";
import { returnErrors, createMessage } from "../../actions/messages";

export class AddPark extends Component {
  state = {
    parkName: "",
    location: ""
  };

  static propTypes = {
    addPark: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    // e.preventDefault();
    const { parkName, location } = this.state;
    if (parkName != "" && location != "") {
      this.props.addPark(parkName, location);
      this.setState({
        parkName: "",
        location: ""
      });
      this.props.createMessage({ addedPark: "Successfully added a park" });
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { parkName, location } = this.state;
    return (
      <div>
        <form className="py-5">
          <div className="form-group">
            <div className="form-row">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text "
                    id="inputGroup-parkName-lg"
                  >
                    Park Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing park name input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="parkName"
                  onChange={this.onChange}
                  value={parkName}
                />
              </div>
            </div>
            <div className="form-row pt-5">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text "
                    id="inputGroup-parkName-lg"
                  >
                    Location
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing park name input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="location"
                  onChange={this.onChange}
                  value={location}
                />
              </div>
            </div>
            <div className="form-row pt-5">
              <label>Park profile picture</label>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="parkEnterProfile"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="parkEnterProfile"
                  >
                    Choose file
                  </label>
                  <small id="parkEnterProfile" className="form-text text-muted">
                    Please make sure it is a clear and complete photo.
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group pt-5">
              <button
                className="btn btn-primary"
                onClick={this.props.addPark.bind(this, parkName, location)}
              >
                Add Park
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addPark, createMessage })(AddPark);
