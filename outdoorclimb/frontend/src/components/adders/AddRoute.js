import React, { Component } from "react";
import { getParks } from "../../actions/parks";
import { addRoute } from "../../actions/routes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class AddRoute extends Component {
  state = {
    parkName: "",
    routeType: "",
    gradeNumber: "",
    gradeLetter: "",
    routeName: "",
    routeDescription: ""
  };

  static propTypes = {
    parks: PropTypes.array.isRequired,
    getParks: PropTypes.func.isRequired,
    addRoute: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getParks();
  }

  onSubmit = e => {
    e.preventDefault();
    grade = gradeNumber;
    if (gradeLetter != "") {
      grade += gradeLetter;
    }
    const {
      parkName,
      routeType,
      gradeNumber,
      gradeLetter,
      routeName,
      routeDescription
    } = this.state;
    if (parkName != "" && routeName != "") {
      this.props.addRoute(
        parkName,
        routeType,
        routeName,
        grade,
        routeDescription,
        ""
      );
      this.setState({
        parkName: "",
        routeType: "",
        gradeNumber: "",
        gradeLetter: "",
        routeName: "",
        routeDescription: ""
      });
    }
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleChange(selectedOption) {
    this.setState({ routeType: selectedOption.target.value });
  }

  createRouteGrades() {
    let items = [];
    for (let i = 0; i < 15; i++) {
      let second = 2 + i;
      let gradeNumber = "5." + second;
      items.push(
        <option key={"ropeGrade" + i} value={gradeNumber}>
          {gradeNumber}
        </option>
      );
    }
    return items;
  }

  createBoulderGrades() {
    let items = [];
    for (let i = 0; i < 16; i++) {
      let grade = "V" + i;
      items.push(
        <option key={"boulderGrade" + i} value={grade}>
          {grade}
        </option>
      );
    }
    return items;
  }

  createParksOptions() {
    let items = [];
    for (let i = 0; i < this.props.parks.length; i++) {
      let displayString = this.props.parks[i].name;
      items.push(
        <option key={"park" + i} name="parkName" value={displayString}>
          {displayString}
        </option>
      );
    }
    return items;
  }

  render() {
    const {
      parkName,
      routeType,
      gradeNumber,
      gradeLetter,
      routeName,
      routeDescription
    } = this.state;

    const ropeGrade = (
      <div className="form-row">
        <div className="form-group col-md-2.5">
          <label htmlFor="gradeNumber">Grade</label>
          <select
            id="gradeNumber"
            name="gradeNumber"
            className="form-control"
            onChange={this.onChange}
            value={gradeNumber}
          >
            <option defaultValue>Number</option>
            {this.createRouteGrades()}
          </select>
        </div>
        <div className="form-group col-md-1.5 pt-2">
          <label htmlFor="gradeLetter"></label>
          <select
            id="gradeLetter"
            name="gradeLetter"
            className="form-control"
            onChange={this.onChange}
            value={gradeLetter}
          >
            <option defaultValue>Letter</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
        </div>
      </div>
    );

    const boulderGrade = (
      <div className="form-row">
        <div className="form-group col-md-2.5">
          <label htmlFor="gradeNumber">Grade</label>
          <select
            id="gradeNumber"
            name="gradeNumber"
            className="form-control"
            onChange={this.onChange}
            value={gradeNumber}
          >
            <option defaultValue>Number</option>
            {this.createBoulderGrades()}
          </select>
        </div>
      </div>
    );
    return (
      <div>
        <form onSubmit={this.onSubmit} className="py-5">
          <div className="container">
            <div className="row">
              <div className="form-row">
                <div className="col-md-40 form-group form-large">
                  <label className="center" htmlFor="ParkSelectGroup">
                    Which Park is this Route In
                  </label>
                  <select
                    className="form-control"
                    id="ParkSelectGroup"
                    onChange={this.onChange}
                    name="parkName"
                    value={parkName}
                  >
                    <option defaultValue>Choose a park</option>
                    {this.createParksOptions()}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label htmlFor="routeTypeSelect">
                      What Type of Route Have You Discovered
                    </label>
                    <select
                      className="custom-select col-md-5"
                      id="routeTypeSelect"
                      name="routeType"
                      onChange={e => this.handleChange(e)}
                      value={routeType}
                    >
                      <option value="sport">Sport</option>
                      <option value="bouldering">Bouldering</option>
                      <option value="traditional">Traditional</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label htmlFor="Route Name">Route Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputRouteName"
                      aria-describedby="routeNameHelp"
                      placeholder="Give a name"
                      name="routeName"
                      onChange={this.onChange}
                      value={routeName}
                    />
                    <small id="routeNameHelp" className="form-text text-muted">
                      We will let you know if this is already taken but you may
                      still use it.
                    </small>
                  </div>
                </div>
                {this.state.routeType == "bouldering"
                  ? boulderGrade
                  : ropeGrade}
                <div className="form-row">
                  <label htmlFor="routeDescription">Route Description</label>
                  <textarea
                    className="form-control"
                    id="routeDescription"
                    name="routeDescription"
                    rows="10"
                    placeholder="Description"
                    onChange={this.onChange}
                    value={routeDescription}
                  ></textarea>
                </div>
                <div className="form-row pt-3">
                  <button
                    onClick={this.props.addRoute.bind(
                      this,
                      parkName,
                      routeType,
                      routeName,
                      gradeNumber + gradeLetter,
                      routeDescription,
                      ""
                    )}
                    className="btn btn-primary btn-lg"
                  >
                    Add Route
                  </button>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-row">
                  <label>Route profile picture</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                      >
                        Choose file
                      </label>
                      <small
                        id="inputGroupFile01"
                        className="form-text text-muted"
                      >
                        Please make sure it is a clear and complete photo.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parks: state.parks.parks
});

export default connect(mapStateToProps, { getParks, addRoute })(AddRoute);
