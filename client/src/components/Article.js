import React, { Component } from "react";

export class Article extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1 className="text-center">{this.props.article.title}</h1>
        <p>
          <u>{this.props.article.date.split("T")[0]}</u>
        </p>
        <p>{this.props.article.body}</p>
      </div>
    );
  }
}

export default Article;
