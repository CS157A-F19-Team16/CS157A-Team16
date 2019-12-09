import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getParks } from "../../actions/parks";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ParksBrowse extends Component {
  static propTypes = {
    parks: PropTypes.array.isRequired,
    getParks: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getParks();
  }

  render() {
    return (
      <Fragment>
        <div className="card-deck mt-3">
          {this.props.parks.map(park => (
            <div key={park.name} className="col-sm-6 mt-3">
              <div className="card">
                <Link
                  to={{
                    pathname: "/routesbrowser",
                    query: { parkkey: park.name }
                  }}
                  className="nav-link"
                >
                  <img
                    className="card-img-top"
                    src={
                      "/static/" + park.profile_picture.substring(7)
                    }
                  />
                  <div className="card-body">
                    <h5 className="card-title">{park.name}</h5>
                    <p className="card-text">{park.location}</p>
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

const mapStateToProps = state => ({
  parks: state.parks.parks
});

export default connect(mapStateToProps, { getParks })(ParksBrowse);
