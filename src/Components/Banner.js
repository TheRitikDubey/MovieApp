import React, { Component } from "react";
import moviefront from "./Image/moviefront.jpg";
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
