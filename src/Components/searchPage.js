import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from './book';

class SearchPage extends Component {
    state = {
      books: [],
      search: "",
      shelvesUpdated: false
    }

    handleUpdateShelves = async () => {
      const allBooks = await BooksAPI.getAll();
      let curBooks = [...this.state.books];
      let tmp = [];
      for(let i=0; i<curBooks.length; i++){
        let valid = false;
        for(let j=0; j<allBooks.length; j++){
          if(allBooks[j].id === curBooks[i].id){
            tmp.push({...curBooks[i], shelf: allBooks[j].shelf});
            valid = true;
          }
        }
        if(!valid){
          tmp.push({...curBooks[i], shelf: "none"});
        }
      }
      this.setState({books: tmp, shelvesUpdated: true});
    }

    handleSearch = async (search) => {
      this.setState({search});

      let searchBooks = await BooksAPI.search(search);
      if(!searchBooks || searchBooks.error) searchBooks = [];
      this.setState({books: searchBooks, shelvesUpdated: false});
    }

    handleAddBookToShelf = async(book, shelf) => {
      let allBooks = [...this.state.books];
      const index = allBooks.indexOf(book);
      let curBook = allBooks[index];
      curBook.shelf = shelf;
      allBooks[index] = curBook;

      this.setState({allBooks});
      await BooksAPI.update(book, shelf);
    }
    componentDidUpdate() {
      if(!this.state.shelvesUpdated){
        this.handleUpdateShelves();
      }
    }

    render() { 
      let {books} = this.state;
      if(!this.state.search){
        books = [];
      }
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input
                 type="text"
                 placeholder="Search by title or author"
                 onChange={e => {
                   this.handleSearch(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {(books.length>0 ? books.map(book => (
                         <li key = {book.id}>
                             <Book  data={book} onShelfUpdate={this.handleAddBookToShelf}/>
                         </li>
                     )): <p>No data</p>)}
              </ol>
            </div>
          </div>
          );
    }
}
 
export default SearchPage;