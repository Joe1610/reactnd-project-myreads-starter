import React, { Component } from 'react';
import Book from './book.js'
class Bookshelf extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                 <ol className="books-grid">
                     <Book/>
                 </ol>
            </div>
        </div>
         );
    }
}
 
export default Bookshelf;