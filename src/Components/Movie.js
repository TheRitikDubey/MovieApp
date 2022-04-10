import React, { Component } from "react";
//import { movies } from "./Getmovie";
import axios from "axios";
export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
      favorites:[]
    };
  }
  async componentDidMount() {
    console.log("component did mount");
    //Side effects
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }
  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  };
  handleRight = () => {
    let temparr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      temparr.push(i);
    }
    this.setState(
      {
        parr: [...temparr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };
  handleLeft = () => {
    if (this.currPage !== 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };
  handleClick = (value) => {
    console.log("clicked");
    if (value !== this.state.currPage) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };
  addFav=(movie)=>{
    console.log("add fav");
    let oldData= JSON.parse(localStorage.getItem("movies") || "[]" );
    if(this.state.favorites.includes(movie.id))
    {
      oldData=oldData.filter((item)=>item.id!==movie.id);
    }
    else{
      oldData.push(movie);    
    }
    localStorage.setItem("movies",JSON.stringify(oldData));
    console.log("old Data:",oldData);
    this.handleFavoriteState();
}
handleFavoriteState=()=>{
  let oldData= JSON.parse(localStorage.getItem("movies") || "[]" );
  let temp=oldData.map((movie)=>movie.id);
  this.setState({
    favorites:[...temp],
  })
}
  

  render() {
    console.log("render");
    //let movie = movies.results;
    return (
      <>
        {this.state.movies.length === 0 ? (
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
          <div>
            <h3 className="Trend">
              <strong>Trending</strong>
            </h3>
            <div className="AllMovie">
              {this.state.movies.map((movieobj) => {
                return (
                  <div
                    className="MovieList"
                    onMouseEnter={() => this.setState({ hover: movieobj.id })}
                    onMouseLeave={() => this.setState({ hover: "" })}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${movieobj.poster_path}`}
                      class="card-img-top movie-img"
                      alt="..."
                    />
                    <div className="card-body movie-body">
                      <h5 class="card-title movie-title">
                        {movieobj.original_title}
                      </h5>
                      <p class="card-text movie-text">
                      </p>
                      <div>
                        <a       
                          class="btn btn-primary movie-btn"
                          onClick={() => this.addFav(movieobj)}
                        >
                          {this.state.favorites.includes(movieobj.id) ? "Remove from Favorites" : "Add to Favorites"}
                            
                          
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item" className="page-btn">
                    <a class="page-link" onClick={this.handleLeft}>
                      Previous
                    </a>
                  </li>
                  {this.state.parr.map((value) => (
                    <li class="page-item page-btn">
                      <a
                        class="page-link"
                        onClick={() => this.handleClick(value)}
                      >
                        {value}
                      </a>
                    </li>
                  ))}
                  <li class="page-item" className="page-btn">
                    <a class="page-link" onClick={this.handleRight}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
