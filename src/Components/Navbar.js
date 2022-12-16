import React, { Component } from "react";
import Favourite from "./Favourite";
//import Navbar from "./Navbar";
import Movie from "./Movie";
import Banner from "./Banner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="nav">
            <div className="nav-content">
              <Link className="route" to="/">
                <h1 className="movie">Movies</h1>
              </Link>
              <Link className="route" to="/favourite">
                <h2 className="fa">My List</h2>
              </Link>
            </div>
          </div>
          <Switch>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route path="/">
              <Banner />
              <Movie />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
