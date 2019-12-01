import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import { getSingleRoute } from "../../actions/singleroute";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class RoutesViewer extends Component {

    /**
     * Need to somehow get which route is being viewed and determine type of route
     */
    static propTypes = {
      route: PropTypes.array.isRequired,
      getSingleParks: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.getSingleParks(1);
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
                    <label style={{fontSize: '30px'}} htmlFor="routeTypeSelect">
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
                    <label style={{fontSize: '30px'}} htmlFor="Route Name">Route Name:</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label>Placeholder{/*{route.name}*/}</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label style={{fontSize: '30px'}} htmlFor="Route Name">Grade</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label>Placeholder{/*Figure out type of route and then put grade info*/}</label>
                  </div>
                </div>
                <div className="form-row">
                  <label style={{fontSize: '30px'}} htmlFor="routeDescription">Route Description</label>
                  <textarea
                    /*Fill this area with the route in question's description */
                    className="form-control"
                    id="routeDescription"
                    rows="10"
                    readOnly value="Description"
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
        )
    }
}

const mapStateToProps = state => ({
  route: state.route.route
});

export default connect(
  mapStateToProps,
  { getSingleRoute }
)(RoutesViewer);
