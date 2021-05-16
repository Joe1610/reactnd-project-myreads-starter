import React, { Component } from "react";

class Book extends Component {
  state = {};
  handleGenerateImage = () => {
    if (this.props.data.imageLinks) {
      return `url("${this.props.data.imageLinks.thumbnail}")`;
    } else {
      return 'url(http://static1.squarespace.com/static/5bd5bff894d71a95eac2b9c8/5bf8b9b84ae237e15d431b12/5bf8bff38a922de88ed2f33d/1547880699400/no-image-icon-1.jpg?format=1500w)';
    }
  };
  render() {
    const { data: book, onShelfUpdate } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: this.handleGenerateImage(),
              backgroundPosition: "center"
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={(e) => onShelfUpdate(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors ? (
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        ) : (
          <div className="book-authors">N/A</div>
        )}
      </div>
    );
  }
}

export default Book;
