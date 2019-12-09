import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Comment extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    commentText: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="media">
        <div className="media-body">
          <h5 className="mt-0">{this.props.username}</h5>
          {this.props.commentText}
        </div>
      </div>
    );
  }
}

export default connect()(Comment);
