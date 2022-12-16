import React, { Component } from "react";
import { movies } from "./Getmovie";
export default class Banner extends Component {
  render() {
    let movie = movies.results[11];
    //let movie = "";
    return (
      <>
        {movie === "" ? (
          <div>
            <div class="spinner-grow text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card  banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 class="card-title banner-title">{movie.original_title}</h5>
              <p class="card-text banner-text">
                Add your favorite Movies to your list and watch that when ever you find time.
              </p>
              {/*<a href="#" class="btn btn-primary banner-btn">
                Go somewhere
        </a>*/}
            </div>
          </div>
        )}
      </>
    );
  }
}
