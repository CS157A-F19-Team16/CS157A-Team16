import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ParksRoutesBrowser extends Component {
  static propTypes = {
    // routes: PropTypes.array.isRequired,
    // getRoutes: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      fromParksBrowse: props.match.params.value || "unknown"
    };
  }

  componentDidMount() {
    // this.props.getRoutes();
  }

  render() {
    return (
      <Fragment>
        <label>{this.state.fromParksBrowse}</label>
        {/* <div className="card-deck mt-3">
          {this.props.routes.map(route => (
            <div key={route.name} className="col-sm-6 mt-3">
              <div className="card">
                <Link to="/routesbrowse" className="nav-link">
                  <div className="card-body">
                    <h5 className="card-title">Some route description</h5>
                    <p className="card-text">Some route information</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   routes: state.routes.routes
// });

// export default connect(
//   mapStateToProps,
//   { getRoutes }
// )(ParksRoutesBrowse);

export default ParksRoutesBrowser;
