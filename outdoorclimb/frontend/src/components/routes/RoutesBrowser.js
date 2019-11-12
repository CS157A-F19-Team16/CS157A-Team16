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
      <h3>{parkkey}</h3>
      // <div className="card-deck mt-3">
      //   {this.props.routes.map(route => (
      //     <div className="col-sm-6 mt-3">
      //       <div className="card">
      //         <div className="card-body">
      //           <h5 className="card-title">Special title treatment</h5>
      //           <p className="card-text">
      //             With supporting text below as a natural lead-in to additional
      //             content.
      //           </p>
      //           <a href="#" className="btn btn-primary">
      //             Go somewhere
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
    );
  }
}

export default RoutesBrowser;
