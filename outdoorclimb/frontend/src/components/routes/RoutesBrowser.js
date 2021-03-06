import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { searchRoutesOfPark } from "../../actions/routes";

export class RoutesBrowser extends Component {
  state = {
    parkkey: ""
  };
  static propTypes = {
    routes: PropTypes.array.isRequired,
    searchRoutesOfPark: PropTypes.func.isRequired
  };

  componentDidMount() {
    const foo = this.props.location.query.parkkey;
    this.setState({
      parkkey: foo
    });
    this.props.searchRoutesOfPark(foo);
  }

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
            {this.props.routes[0] != null && this.props.routes[0].length > 0 ? (
              this.props.routes[0].map(route => (
                <tr key={route.routes_id}>
                  <td>{route.route_name}</td>
                  <td>{route.grade}</td>
                  <td>{route.park_name}</td>
                  <td>
                    {
                      <Link
                        to={{
                          pathname: "/routesviewer/",
                          query: { routes_id: route.routes_id }
                        }}
                        className="nav-link"
                      >
                        <button className="btn btn-danger btn-sm">
                          Details
                        </button>
                      </Link>
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr key="NoRoute">
                <td>{"No Routes"}</td>
                <td>{"No Routes"}</td>
                <td>{"No Routes"}</td>
                <td>{"No Routes"}</td>
              </tr>
            )}
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

export default connect(mapStateToProps, { searchRoutesOfPark })(RoutesBrowser);
