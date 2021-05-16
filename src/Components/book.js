import React, { Component } from "react";

class Book extends Component {
  state = {};
  handleGenerateImage = () => {
    if (this.props.data.imageLinks) {
      return `url("${this.props.data.imageLinks.thumbnail}")`;
    } else {
      return `url(https://drive.google.com/file/d/1F9SjlVTllkX32FnfWk38vmgqQlRm3hlo/view?usp=sharing)`;
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
