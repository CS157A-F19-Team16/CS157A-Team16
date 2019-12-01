import React, { Component } from "react";

export class RouteTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeType: "",
      file: '',
      imagePreviewUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  createRouteGrades() {
    let items = [];
    for (let i = 0; i < 15; i++) {
      let second = 2 + i;
      let grade = "5." + second;
      items.push(
        <option key={"ropeGrade" + i} value={grade}>
          {grade}
        </option>
      );
    }
    return items;
  }

  createRouteGrades() {
    let items = [];
    for (let i = 0; i < 16; i++) {
      let grade = "V" + i;
      items.push(
        <option key={"ropeGrade" + i} value={grade}>
          {grade}
        </option>
      );
    }
    return items;
  }

  handleChange(selectedOption) {
    console.log(selectedOption.target.value);
    this.setState({ routeType: selectedOption.target.value });
  }

  handleImageChange(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    const ropeGrade = (
      <div className="form-row">
        <div className="form-group col-md-2.5">
          <label htmlFor="gradeNumber">Grade</label>
          <select id="gradeNumber" className="form-control">
            <option defaultValue>Number</option>
            {this.createRouteGrades()}
          </select>
        </div>
        <div className="form-group col-md-1.5 pt-2">
          <label htmlFor="gradeLetter"></label>
          <select id="gradeLetter" className="form-control">
            <option defaultValue>Letter</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
        </div>
      </div>
    );

    const boulderGrade = (
      <div className="form-row">
        <div className="form-group col-md-2.5">
          <label htmlFor="gradeNumber">Grade</label>
          <select id="gradeNumber" className="form-control">
            <option defaultValue>Number</option>
            {this.createRouteGrades()}
          </select>
        </div>
      </div>
    );
    return (
      <div>
        <form className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label htmlFor="routeTypeSelect">
                      What Type of Route Have You Discovered
                    </label>
                    <select
                      className="custom-select col-md-5"
                      id="routeTypeSelect"
                      onChange={this.handleChange}
                      value={this.state.value}
                    >
                      <option value="sport">Sport</option>
                      <option value="bouldering">Bouldering</option>
                      <option value="traditional">Traditional</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-7 form-group form-large">
                    <label htmlFor="Route Name">Route Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputRouteName"
                      aria-describedby="routeNameHelp"
                      placeholder="Give a name"
                    />
                    <small id="routeNameHelp" className="form-text text-muted">
                      We will let you know if this is already taken but you may
                      still use it.
                    </small>
                  </div>
                </div>
                {this.state.routeType == "bouldering"
                  ? boulderGrade
                  : ropeGrade}
                <div className="form-row">
                  <label htmlFor="routeDescription">Route Description</label>
                  <textarea
                    className="form-control"
                    id="routeDescription"
                    rows="10"
                    defaultValue="Description:"
                  ></textarea>
                </div>
                <div className="form-row pt-3">
                  <button type="button" className="btn btn-primary btn-lg">
                    Add Route
                  </button>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-row">
                  <label>Route profile picture1</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={(e)=>this.handleImageChange(e)}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                      >
                        Choose file
                      </label>
                      <small
                        id="inputGroupFile01"
                        className="form-text text-muted"
                      >
                        Please make sure it is a clear and complete photo.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="preview">
                    {$imagePreview}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );  
  }
}

export default RouteTest;