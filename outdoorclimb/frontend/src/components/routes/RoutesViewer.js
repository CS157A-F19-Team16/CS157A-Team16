import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getSingleRoute, getRouteType } from "../../actions/route";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class RoutesViewer extends Component {
  state = {
    route_id: ""
  };

  static propTypes = {
    getSingleRoute: PropTypes.func.isRequired
  };

  componentDidMount() {
    const foo = this.props.location.query.routes_id;
    this.setState({
      route_id: foo
    });
    this.props.getSingleRoute(foo);
  }

  render() {
    //TODO: Display this link
    if (this.props.route != null) {
      console.log(this.props.route[0].profile_picture);
    } else {
      console.log("Route is not null");
    }
    return (
      <div>
        <form className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label
                      style={{ fontSize: "30px" }}
                      htmlFor="routeTypeSelect"
                    >
                      Route Type:
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label>
                      {this.props.route != null
                        ? this.props.route[0].route_type
                        : "Route Not Found"}
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label style={{ fontSize: "30px" }} htmlFor="Route Name">
                      Route Name:
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label>
                      {this.props.route != null
                        ? this.props.route[0].route_name
                        : "Route Not Found"}
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label style={{ fontSize: "30px" }} htmlFor="Route Name">
                      Grade
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label>
                      {this.props.route != null
                        ? this.props.route[0].grade
                        : "Route Not Found"}
                    </label>
                  </div>
                </div>
                <div className="form-row">
                  <label
                    style={{ fontSize: "30px" }}
                    htmlFor="routeDescription"
                  >
                    Route Description
                  </label>
                  <textarea
                    /*Fill this area with the route in question's description */
                    className="form-control"
                    id="routeDescription"
                    rows="10"
                    readOnly
                    value={
                      this.props.route != null
                        ? this.props.route[0].description
                        : "Route Not Found"
                    }
                  ></textarea>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-row">
                  {this.props.route != null && this.props.route.length > 0 ? (
                    <img
                      src={
                        "/static/" +
                        this.props.route[0].profile_picture.substring(7)
                      }
                      className="img-fluid"
                      alt="Route Not Found"
                    />
                  ) : (
                    <p>Image Not Found</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="card card-body mt-5">
                <div className="row">
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
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
  route: state.route.route
});

export default connect(mapStateToProps, { getSingleRoute })(RoutesViewer);
