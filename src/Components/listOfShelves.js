import React, { Component } from 'react';
import Bookshelf from './bookshelf.js'

class ListOfShelves extends Component {
    state = {  }
    render() { 
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf/>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default ListOfShelves;