import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addComment } from "../../actions/comment";

export class CommentInput extends Component {
  static propTypes = {
    routeId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  state = {
    commentText: ""
  };

  onChange = e => 
    this.setState({
      commentText: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { commentText } = this.state;
    this.props.addComment(
      this.props.user.email,
      this.props.routeId,
      commentText
    );
    this.setState({
      commentText: ""
    });
    e.preventDefault();
  };

  render() {
    console.log("This is route ID" + this.props.routeId);
    return (
      <div>
        <div className="form-group">
          <label htmlFor="commentTextArea">
            {this.props.user ? this.props.user.username : "Guest"}
          </label>
          <textarea
            className="form-control"
            id="commentTextArea"
            rows="3"
            cols="50"
            onChange = {this.onChange}
          ></textarea>
          <button
            className="btn btn-primary"
            onClick={this.onSubmit.bind(this)}
          >
            Comment
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Hi I am here");
  return { comment: state.comment, user: state.auth.user };
}

export default connect(mapStateToProps, { addComment })(CommentInput);
