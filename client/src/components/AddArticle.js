import React, { Component } from "react";

export class AddArticle extends Component {
  state = {
    title: "",
    body: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const newArticle = {
      title,
      body
    };
    this.props.submitHandler(newArticle);
    this.setState({
      title: "",
      body: ""
    });
  };
  render() {
    return (
      <div>
        <h2>Add An Article</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Article Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Give a title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Article Body</label>
            <textarea
              className="form-control"
              name="body"
              rows={3}
              defaultValue={""}
              placeholder="Article body here ...."
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <div className="form-gorup text-center">
            <input
              style={{ width: 250 }}
              className="btn btn-success"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddArticle;
