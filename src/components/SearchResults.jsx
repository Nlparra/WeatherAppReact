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
    <section>
      <h1>Results</h1>
      <ul>
        {/* {
          cities.map((city, index) => { 
            return (<Link to="/city"><li key={index}>{city.name}</li></Link>)})
        } */}
        

        <li><Link to="/city">hello world</Link></li>
        
      </ul>
    </section>
  )
}

export default SearchResults