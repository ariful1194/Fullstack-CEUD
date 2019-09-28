import React, { Component } from "react";

export class Article extends Component {
  deleteClick = () => {
    const confirm = window.confirm("Are You sure to delete this Article ?");
    if (confirm) {
      this.props.deleteHandler(this.props.article._id);
    }
  };
  render() {
    return (
      <div>
        <hr />
        <h1 className="text-center">{this.props.article.title}</h1>
        <div className="mb-4">
          <u>{this.props.article.date.split("T")[0]}</u>
          <button
            onClick={this.deleteClick}
            className="float-right btn btn-danger "
          >
            Delete
          </button>
        </div>

        <p>{this.props.article.body}</p>
      </div>
    );
  }
}

export default Article;
