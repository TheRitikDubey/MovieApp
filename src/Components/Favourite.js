import React, { Component } from 'react';
import { movies } from './Getmovie'
class Favourite extends Component {
    render() {
        const movie = movies.results;
        //       console.log(movie);
        let genreids = {
            28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
            27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        };
        return (

            <div>
                <>
                    <div className='fav-page'>
                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <ul class="list-group">
                                        <li class="list-group-item active" aria-current="true">An active item</li>
                                        <li class="list-group-item">A second item</li>
                                        <li class="list-group-item">A third item</li>
                                        <li class="list-group-item">A fourth item</li>
                                        <li class="list-group-item">And a fifth one</li>
                                    </ul>
                                </div>
                                <div class="col-9 fav-input">
                                    Column-9
                                    <div className='row'>
                                        <input type="text" className="input-group-text col" />

                                        <input type="number" className="input-group-text col" />
                                    </div>
                                    {/*This is were we insert table   */}
                                    <div className='row'>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Genre</th>
                                                    <th scope="col">Popularity</th>
                                                    <th scope="col">Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    movie.map((movieobj) => (

                                                        <tr>
                                                            <td> <img
                      src={`https://image.tmdb.org/t/p/original${movieobj.poster_path}`}
                      class="card-img-top favmovie-img"
                      alt="..."
                    /></td>
                                                            
                                                            <td>{movieobj.original_title}</td>
                                                            <td>{genreids[movieobj.genre_ids[0]]} </td>
                                                            <td>{movieobj.popularity}</td>
                                                            <td>{movieobj.vote_average}</td>
                                                            <td><button type="button" class="btn btn-danger">Danger</button></td>
                                                            
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav aria-label="
                                    
                                     navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        );
    }
}

export default Favourite;