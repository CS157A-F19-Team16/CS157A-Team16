import React, { Component } from "react";

export default class SearchRoutes extends Component {
  state = {
    boulderingChecked: false,
    sportChecked: false,
    traditionalChecked: false,
    routeName: "",
    boulderingLower: "",
    boulderingHigher: "",
    routeLower: "",
    routeHigher: ""
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick = e =>
    this.setState({
      //This
      [e.target.name]: e.target.checked
    });

  onSubmit() {
    console.log("Trying to Submit");
  }
  createRouteGrades() {
    let items = [];
    let letters = ["a", "b", "c", "d"];
    for (let i = 0; i < 15; i++) {
      let second = 2 + i;
      let gradeNumber = "5." + second;
      if (second > 9) {
        for (let j = 0; j <= 3; j++) {
          items.push(
            <option key={"ropeGrade" + i + j} value={gradeNumber + letters[j]}>
              {gradeNumber + letters[j]}
            </option>
          );
        }
      } else {
        items.push(
          <option key={"ropeGrade" + i} value={gradeNumber}>
            {gradeNumber}
          </option>
        );
      }
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

  render() {
    const boulderGradeRange = (
      <td>
        <div className="col-sm">
          <div className="form-row">
            <select className="form-control form-control-md">
              <option>Grade Level</option>
              {this.createBoulderGrades()}
            </select>
            <p className="pt-3 text-center">to</p>
            <select className="form-control form-control-md">
              <option>Grade Level</option>
              {this.createBoulderGrades()}
            </select>
          </div>
        </div>
      </td>
    );
    const routesGradeRange = (
      <td>
        <div className="col-sm">
          <div className="form-row">
            <select className="form-control form-control-md">
              <option>Grade Level</option>
              {this.createRouteGrades()}
            </select>
            <p className="pt-3 text-center">to</p>
            <select className="form-control form-control-md">
              <option>Grade Level</option>
              {this.createRouteGrades()}
            </select>
          </div>
        </div>
      </td>
    );
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Climb Type</th>
              {this.state.boulderingChecked == true ? (
                <th>Bouldering Grade Range</th>
              ) : null}
              {this.state.traditionalChecked || this.state.sportChecked ? (
                <th>Rope Grade Range</th>
              ) : null}
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    name="sportChecked"
                    onClick={this.onClick}
                    className="form-check-input"
                    type="checkbox"
                    value={this.state.sportChecked}
                    id="sportCheck"
                  />
                  <label className="form-check-label" htmlFor="sportCheck">
                    Sport
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="traditionalChecked"
                    onClick={this.onClick}
                    className="form-check-input"
                    type="checkbox"
                    value={this.state.traditionalChecked}
                    id="traditionalCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="traditiona;Check"
                  >
                    Traditional
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="boulderingChecked"
                    onClick={this.onClick}
                    className="form-check-input"
                    type="checkbox"
                    value={this.state.boulderingChecked}
                    id="boulderingCheck"
                  />
                  <label className="form-check-label" htmlFor="boulderingCheck">
                    Bouldering
                  </label>
                </div>
              </td>
              {this.state.boulderingChecked ? boulderGradeRange : null}
              {this.state.traditionalChecked || this.state.sportChecked
                ? routesGradeRange
                : null}
            </tr>
          </tbody>
        </table>
        <div className="form-row pt-3 form-row-md-6">
          <div className="col-md-6">
            <input
              className="form-control"
              name="routeName"
              onChange={this.onChange}
              value={this.state.routeName}
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="col-md">
            <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
