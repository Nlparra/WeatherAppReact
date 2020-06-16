import React, {Fragment,useEffect,useState} from 'react'



const City = props => {

  const [forecast, setForecast] = useState({});

  

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${props.match.params.cityId}`)
      .then(res => res.json())
      .then(results => setForecast(results))
      .catch(err => console.log(err))
  })



console.log(forecast)
  
  return(
    <Fragment>
    <div className="container"> 
      <div className="inner-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eeaeca" fillOpacity="1" d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,149.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    
           {
             forecast.map(day => {
                return (console.log(day))

             })}



         </div>
    </Fragment>
  )}

export default City