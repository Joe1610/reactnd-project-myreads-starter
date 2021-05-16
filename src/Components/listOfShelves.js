import React, { Component } from 'react';
import Bookshelf from './bookshelf.js'
import * as BooksAPI from '../BooksAPI'

class ListOfShelves extends Component {
    state = {
        allBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    async componentDidMount() {
        const allBooks = await BooksAPI.getAll();
        const currentlyReading = allBooks.filter(b => b.shelf === "currentlyReading");
        const wantToRead = allBooks.filter(b => b.shelf === "wantToRead");
        const read = allBooks.filter(b => b.shelf === "read");
        this.setState({allBooks, currentlyReading, wantToRead, read});
    }

    handleUpdateShelf = async(book, shelf) => {
        let allBooks = [...this.state.allBooks];
        const index = allBooks.indexOf(book);
        let curBook = allBooks[index];
        curBook.shelf = shelf;
        allBooks[index] = curBook;
        const currentlyReading = allBooks.filter(b => b.shelf === "currentlyReading");
        const wantToRead = allBooks.filter(b => b.shelf === "wantToRead");
        const read = allBooks.filter(b => b.shelf === "read");
        this.setState({allBooks, currentlyReading, wantToRead, read});
        await BooksAPI.update(book, shelf);
    }

    render() { 
        const {currentlyReading, wantToRead, read} = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                        name = "Currently Reading"
                        books = {currentlyReading}
                        onShelfUpdate = {this.handleUpdateShelf}
                        />
                        <Bookshelf
                        name = "Want to Read"
                        books = {wantToRead}
                        onShelfUpdate = {this.handleUpdateShelf}
                        />
                        <Bookshelf
                        name = "Read"
                        books = {read}
                        onShelfUpdate = {this.handleUpdateShelf}
                        />
                    </div>
                </div>
            </div>
          );
    }
}
 
export default ListOfShelves;