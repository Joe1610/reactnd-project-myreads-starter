import React, { Component } from 'react';
import Book from './book.js'
class Bookshelf extends Component {  
    state = { 
        name: "",
        books: []
     }

     componentDidMount() {
         this.setState( {name: this.props.name, books: this.props.books});
     }
     componentDidUpdate() {
         if(this.props.books !== this.state.books){
             this.setState({ name: this.props.name, books: this.props.books });
         }
     }

    render() { 
        const { name, books } = this.state
        return ( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                 
                 <ol className="books-grid">
                     {(books.length>0 ? books.map(book => (
                         <li key = {book.id}>
                             <Book  data={book} onShelfUpdate={this.props.onShelfUpdate}/>
                         </li>
                     )): <p>No data</p>)}
                 </ol>
            </div>
        </div>
         );
    }
}
 
export default Bookshelf;