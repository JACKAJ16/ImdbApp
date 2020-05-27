import React from 'react';
import "./Suggestions.css";



const Suggestions = (props) => {
  const options = props.results.slice(0, 5).map(r => (
    <input key={r.id} value={r.original_title} name={r.id} readOnly onClick={props.fetchMovie}/>   
  ))
  
  return (

	  <div className="suggestions-container"> 
	  	<div className="suggestions">{props.isLoaded === true ? options : null}</div>
	  </div>

  )
}


export default Suggestions