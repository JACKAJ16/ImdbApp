import React from 'react';
import "./MovieSearch.css";
import Suggestions from "../Suggestions/Suggestions";
import axios from "axios";

class MovieSearch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
    query: '',
    results: []
    }

  }

//Fetching method that compares input to search API and returns сoincidence
	getInfo = () => {
	    axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=${this.props.API_KEY}`)
	      .then(({ data }) => {
	        this.setState({
	          results: data.results
	        })
	      })
	 	}

	 handleInputChange = () => {
	 	if(this.state.query.length <= 2) {
	 		this.setState({
	 			results: []
	 		})
		}

		if(!this.props.isLoaded) {
			this.props.toTrue() 
		}

	    this.setState({
	      query: this.search.value,
	    }, () => {
	      if (this.state.query.length > 1) {
	          this.getInfo()
	        }
	      })
	    }
		
		handleFalseSubmit(e) {
			e.preventDefault()
		}	
	
 	render() {
 		return (
				<form className="searchForm" onSubmit={this.handleFalseSubmit}>
					<input
	          placeholder="Search for..."
	          ref={input => this.search = input}
	          onChange={this.handleInputChange}
	          name="movieTitle"
        	/>			
        	<Suggestions  isLoaded={this.props.isLoaded} fetchMovie={this.props.fetchMovie} results={this.state.results} />
				</form>
 			)
 		}
	}


export default MovieSearch;