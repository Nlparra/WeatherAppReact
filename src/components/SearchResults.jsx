import React, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";

const SearchResults = props => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${props.userInput}`)
      .then(res => res.json())
      .then(cities => setCities(cities))
      .catch(err => console.log(err))
  }, [props.userInput])





  return(
    <section className="search-results">
      <ul>
        {
          cities.map((city, index) => { 
            return (<li key={index}><Link to={"/city/"+ city.id}>{city.name}</Link></li>)})
        } 
      </ul>
    </section>
  )
}

export default SearchResults