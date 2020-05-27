import React from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card/Card";
import MovieSearch from "./components/MovieSearch/MovieSearch";

const tmdb = require('./components/assets/tmdb.png');
const API_KEY = "061c7695df470dcccd241c1baabf1508";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      movieId: 11,
      isLoaded: true,
      original_title: "",
      tagline: "",
      overview: "",
      poster: "",
      production: "",
      genre: "",
      release: null,
      vote: null,
      runtime: null,
      revenue: null,
      backdrop: "",
      data: []      
    }

  }

//Fetching movie from the start
  componentDidMount() {
    this.fetchMovie(this.state.movieId);
    if (this.state.isLoaded === false) {
      this.setState({
        isLoaded: true
    })
  }}

//Updating background while movie changes
  componentDidUpdate() {
    document.body.style.background = '#000 url(' + 'https://image.tmdb.org/t/p/original' + this.state.backdrop + ')  no-repeat top center / cover';
  }

//Fetching movie method
  fetchMovie = async (e) => {
    let movieID 
    if(e === 11) {
      movieID = e
    } else {
      movieID = e.target.name;
    }
    const results = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?&api_key=${API_KEY}`)
      this.setState({
        movieId: results.data.id,
        original_title: results.data.original_title,
        tagline: results.data.tagline,
        overview: results.data.overview,
        poster: results.data.poster_path,
        production: results.data.production_companies,
        genre: results.data.genres,
        release: results.data.release_date,
        vote: results.data.vote_average,
        runtime: results.data.runtime,
        revenue: results.data.revenue,
        backdrop: results.data.backdrop_path,
        isLoaded: false
      })
  }
 
  toTrue = async () => {
    this.setState({
      isLoaded: true
    })
  }

  toFalse = async (e) => {
    this.setState({
      isLoaded: false
    })
  }

  render() {
    
    return (
      <div onClick={this.toFalse} className="main">
        <div className="wrapper">
          <a href="./">
            <img className="logo" src={tmdb} alt="logo-img" />
          </a>
          <MovieSearch toTrue={this.toTrue} isLoaded={this.state.isLoaded} fetchMovie={this.fetchMovie} API_KEY={API_KEY}/>
          <Card data={this.state}/>
         </div> 
      </div>
      );
    }

  }

export default App;
