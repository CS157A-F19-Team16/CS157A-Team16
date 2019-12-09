import React, { Fragment, Component } from "react";
import { Comment } from "./Comment";
import { connect } from "react-redux";
import { CommentInput } from "./CommentInput";
import PropTypes from "prop-types";

export class Comments extends Component {
  static propTypes = {
    routeId: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired
  };

  render() {
    console.log("This is the comment method " + this.props.addComment);
    return (
      <Fragment>
        <CommentInput
          routeId={this.props.routeId}
          user={this.props.user}
          addComment={this.props.addComment}
        />
        <Comment />
      </Fragment>
    );
  }
}

export default connect(Comments);
