import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRoutes } from "../../actions/routes";

export class RoutesBrowser extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    getRoutes: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { handle } = this.props.match.params;
  }
  constructor(props) {
    super(props);
    const { parkkey } = props.location.state;
  }

  componentDidMount() {
    this.props.getRoutes();
  }

  render() {
    console.log("Trying");
    return (
      <Fragment>
        <div className="card-deck mt-3">
          {this.props.routes.map(route => (
            <div key={route.id} className="col-sm-6 mt-3">
              <div className="card">
                <Link
                  to={{
                    pathname: "/routesviewer",
                    state: { routekey: route.id}
                  }}
                  className="nav-link"
                >
                  <img
                    className="card-img-top"
                    src={
                      "https://boxoffice.hotdocs.ca/images/user/bc_2338/Dawn-Wall1.jpg"
                    }
                  />
                  <div className="card-body">
                    <h5 className="card-title">{route.name}</h5>
                    <p className="card-text">{route.park_name}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default RoutesBrowser;
