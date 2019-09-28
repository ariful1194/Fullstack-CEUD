import React, { Component } from "react";
import axios from "axios";
import Article from "./Article";
import AddArticle from "./AddArticle";
export class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get("http://localhost:9000/api/aritcles/").then(data => {
      this.setState({ ...this.state, articles: data.data });
    });
  }

  submitHandler = article => {
    axios.post("http://localhost:9000/api/aritcles/", article).then(data => {
      this.setState({
        ...this.state,
        articles: [data.data, ...this.state.articles]
      });
    });
  };
  deleteHandler = id => {
    axios.delete(`http://localhost:9000/api/aritcles/${id}`).then(data => {
      this.setState({
        ...this.state,
        articles: this.state.articles.filter(article => article._id != id)
      });
    });
  };
  render() {
    const postView = this.state.articles.map(article => (
      <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    ));
    return (
      <div className="container">
        <AddArticle submitHandler={this.submitHandler} />

        {this.state.articles.map(article => (
          <Article deleteHandler={this.deleteHandler} article={article} />
        ))}
      </div>
    );
  }
}

export default Articles;
