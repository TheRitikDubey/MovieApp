import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav">
          <h1 className="movie">Movies</h1>
          <h2>Favorites</h2>
        </div>
      </div>
    );
  }
}
