import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getSingleRoute } from "../../actions/route";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class RoutesViewer extends Component {
  state = {
    route_id: "",
    route: null
  };

  static propTypes = {
    getSingleRoute: PropTypes.func.isRequired
  };

  componentDidMount() {
    const foo = this.props.location.query.route_id;
    this.setState({
      route_id: foo
    });
    this.props.getSingleRoute(foo);
  }

  render() {
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
                    <label>Placeholder{/*Figure out route type*/}</label>
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
                    <label>Placeholder{this.props.route[0].route_name}</label>
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
                    <label>{this.props.route[0].grade}</label>
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
                    value={this.props.route[0].description}
                  ></textarea>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-row">
                  <label>Route profile picture Put Picture Here</label>
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
