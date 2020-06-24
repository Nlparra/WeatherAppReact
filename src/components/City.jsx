import React, {Fragment,useEffect,useState} from 'react'




const City = props => {

  const [forecast, setForecast] = useState([]);

  

  useEffect(() => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${props.match.params.cityId}`)
      .then(res => res.json())
      .then(results => setForecast(results.forecasts))
      .catch(err => console.log(err))
  },[])

  const goBack = () => {
		// let id = e.target.cellIndex;
		window.location.href = "/";
	};


console.log(forecast)
  
  return(
    <Fragment>
      <div className="container"> 
        <div className="inner-container">
          <div className="weathergroup">
          {forecast.map((item,index) => {
          
            return(
              <div className="weatherDiv" key={index}>
                <img src={item.image}></img>
                <div className="weathercontainer">
                  <span className="subTitles">Date:</span>{item.date}</div>
                <div className="weathercontainer">
                  <span className="subTitles">Humidity:</span>
                  {item.humidity}
                </div>
                <div className="weathercontainer">
                  <span className="subTitles">MaxTemp:</span>
                  {Math.round(item.max_temp)}
                </div>
                <div className="weathercontainer">
                  <span className="subTitles">MinTemp: </span>
                  {Math.round(item.min_temp)}
                </div>
                <div className="weathercontainer">
                  <span className="subTitles">Weather:</span>
                  {item.weather}
                </div>
              </div>
            )
          })}
            <button type="button" onClick={goBack} className="backbutton">
								Go back
						</button>
          </div>
        </div>
      </div>
    </Fragment>
  )}

export default City