import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RoutesResults extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  };

  render() {
    return (
      <Fragment>
        <h2>Routes Found</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Park</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.routes.map(route => (
              <tr key={route[0].routes_id}>
                {console.log(route[0])}
                <td>{route[0].route_name}</td>
                <td>{route[0].grade}</td>
                <td>{route[0].park_name}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

//state of redux is mapped to props of this component
const mapStateToProps = state => ({
  //Get users reducer and in reducer get state
  routes: state.routes.routes
});

export default connect(mapStateToProps, {})(RoutesResults);
