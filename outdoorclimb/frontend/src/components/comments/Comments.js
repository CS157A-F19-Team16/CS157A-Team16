import React, { Fragment, Component } from "react";
import { Comment } from "./Comment";
import { connect } from "react-redux";
import { CommentInput } from "./CommentInput";
import PropTypes from "prop-types";

export class Comments extends Component {
  static propTypes = {
    routeId: PropTypes.string.isRequired
  };

  render() {
    return (
      <Fragment>
        <CommentInput routeId={this.props.routeId} />
        <Comment />
      </Fragment>
    );
  }
}

export default connect(Comments);
