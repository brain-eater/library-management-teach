import React, { Component } from "react";

class BookDetails extends Component {
  render() {
    const data = this.props.data;

    let status = "Available";
    if (data.isBorrowed) {
      status = "Borrowed";
    }

    return (
      <div>
        <h2 className="book-title">
          <a href={data.link} target="_blank">
            {data.title}
          </a>
        </h2>
        <img src={data.imageLink} alt={"book"} />
        <p>By {data.author}</p>
        <p>Pages: {data.pages}</p>
        <p>Country: {data.country}</p>
        <p>Language: {data.language}</p>
        <p>Status: {status}</p>
      </div>
    );
  }
}

export default BookDetails;
