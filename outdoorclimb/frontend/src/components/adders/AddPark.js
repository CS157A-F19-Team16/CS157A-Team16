import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPark } from "../../actions/parks";
import { returnErrors, createMessage } from "../../actions/messages";
import axios from "axios";

export class AddPark extends Component {
  state = {
    parkName: "",
    location: "",
    fileName: "Choose File",
    image: null
  };

  static propTypes = {
    addPark: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    
    reader.onloadend = () => {
      this.setState({
        image: file,
        fileName: file.name
      })
    }
    
    reader.readAsDataURL(file);
  }

  onSubmit = e => {
    e.preventDefault();
    const { parkName,location,image} = this.state;
    if (parkName != "" && location != "") {

      let form_data = new FormData();
      form_data.append("image", image, image.name);
      let url = "http://localhost:8000/api/posts/";
      var parkProfile = '';
      axios
        .post(url, form_data, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res.data);
          parkProfile = res.data.image;
          console.log("url is " + parkProfile);
          this.props.addPark(parkName, location, parkProfile);
        })
        .catch(err => console.log(err));

      this.setState({
        parkName: "",
        location: "",
        fileName: "Choose File",
        image: null
      });
      this.props.createMessage({ addedPark: "Successfully added a park" });
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { parkName, location } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text "
                    id="inputGroup-parkName-lg"
                  >
                    Park Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing park name input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="parkName"
                  onChange={this.onChange}
                  value={parkName}
                />
              </div>
            </div>
            <div className="form-row pt-5">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text "
                    id="inputGroup-parkName-lg"
                  >
                    Location
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing park name input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="location"
                  onChange={this.onChange}
                  value={location}
                />
              </div>
            </div>
            <div className="form-row pt-5">
              <label>Park profile picture</label>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="parkEnterProfile"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={e => this.handleImageChange(e)}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="parkEnterProfile"
                  >
                    {this.state.fileName}
                  </label>
                  <small id="parkEnterProfile" className="form-text text-muted">
                    Please make sure it is a clear and complete photo.
                  </small>
                </div>
              </div>
            </div>
            <div className="form-group pt-5">
              <button className="btn btn-primary">Add Park</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addPark, createMessage })(AddPark);
