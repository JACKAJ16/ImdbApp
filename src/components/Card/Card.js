import React from 'react'
import "./Card.css"


const Card = (props) => {
	
 		return (
			<div className="card">
				<div className="img-container"><img src={'https://image.tmdb.org/t/p/w500' + props.data.poster} alt=""/></div>
				<div className="info-block">
					<h1>{props.data.original_title}</h1>
					<h2>{props.data.tagline}</h2>
					<p className="overview">{props.data.overview}</p>
					<h2>{props.data.genre[0] === undefined ? null : props.data.genre.map(name => name.name).join(", ")}</h2>
					<p>{props.data.production[0] === undefined ? null : props.data.production.map(name => name.name).join(", ")}</p>
					<div className="movie-numbers">
						<div>
							<p>Original Release:</p> 
							<h2>{props.data.release}</h2>
						</div>
						<div>
							<p>Running time:</p>
							<h2>{props.data.runtime} mins</h2>
						</div>
						<div>	
							<p>Box office:</p>
							<h2>${props.data.revenue == null ? null : props.data.revenue.toLocaleString('en-US')}</h2>
						</div>
						<div>	
							<p>Vote average:</p>
							<h2>{props.data.vote}/10</h2>
						</div>	
					</div>	
				</div>
			</div>
 		)
 	}



export default Card;