import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListOfShelves from "./listOfShelves.js";

class Home extends Component {
  render() {
    return (
      <div>
        <ListOfShelves />
        <div className="open-search">
        <Link to="/search">
          <button>
            Add book
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
