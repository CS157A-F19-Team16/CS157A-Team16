import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Comments extends Component {
    state = {
      subject: "",
      comment: ""
    };
   
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
      };
      onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.subject, this.state.comment);
      };
    
      onChange = e =>
        this.setState({
          [e.target.name]: e.target.value
        });
    
      render() {
        if (this.props.isAuthenticated) {
          return <Redirect to="/" />;
        }
        const { subject, comment } = this.state;
        return (         

<div className="container">
  <div className="row">
    <div className="col-sm-10 col-sm-offset-1">
        <div className="page-header">
            <h3 class="reviews">Leave your comment</h3>         
            </div>
        </div>
        </div>
        </div>
        <div class="comment-tabs">
            <ul class="nav nav-tabs" role="tablist">
                <li class="active"><a href="#comments-logout" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Comments</h4></a></li>
                <li><a href="#add-comment" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Add comment</h4></a></li>
            </ul>  
            </div>          
            <div class="tab-content">
                <div class="tab-pane active" id="comments-logout">                
                    <ul class="media-list">
                      <li class="media">
                        <a class="pull-left" href="#">
                        </a>
                        </li>
                        </ul>
                        </div>
                        <div class="media-body">
                          <div class="well well-lg">
                              <h4 class="media-heading text-uppercase reviews">Username </h4>
                              <ul class="media-date text-uppercase reviews list-inline">
                                <li class="mm">11</li>
                                <li class="dd">22</li>
                                <li class="aaaa">2019</li>
                              </ul>
                              <p class="media-comment">
                                Commenting about....
                              </p>
                              <a class="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span class="glyphicon glyphicon-share-alt"></span> Reply</a>
                              <a class="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span class="glyphicon glyphicon-comment"></span> Replies </a>
                          </div>              
                        </div>
                        </div>
                        );
                        }
                        }
                        
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { comment }
)(Comments);
