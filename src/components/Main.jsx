import React, { Fragment, useState } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
// import { Card,Button} from 'react-bootstrap';


const Main = () => {
  const [userInput, setUserInput] = useState('')

  return(
    <Fragment>
      <div className="container"> 
        <div className="inner-container">
          <h1>Weather Forecast</h1>
          
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