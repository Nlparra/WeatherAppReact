import React, { Fragment, useState } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
// import { Card,Button} from 'react-bootstrap';
import logo from './assets/EasyWeather.png'

const Main = () => {
  const [userInput, setUserInput] = useState('')

  return(
    <Fragment>
      <div className="container"> 
        <div className="inner-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eeaeca" fillOpacity="1" d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,149.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          <img src={logo} alt="logo"></img>
                <SearchForm setUserInput={setUserInput}/>
                  {
                    userInput && <SearchResults userInput={userInput} />
                  }
          </div>
      </div>    
    </Fragment>
  )
}

export default Main