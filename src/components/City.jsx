import React, {Fragment,useEffect,useState} from 'react'



const City = props => {

  const [forecast, setForecast] = useState({});

  

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${props.match.params.cityId}`)
      .then(res => res.json())
      .then(results => console.log(results))
      .catch(err => console.log(err))
  })



console.log(forecast)
  
  return(
    <Fragment>
    <div className="container"> 
      <div className="inner-container">
        Hello world
      </div>
    
        



         </div>
    </Fragment>
  )}

export default City