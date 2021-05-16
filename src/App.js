import React from 'react'
import { Switch, Route} from "react-router-dom";
import Home from './Components/home.js'
import './App.css'
import SearchPage from './Components/searchPage.js';

class BooksApp extends React.Component {
  state = { }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
