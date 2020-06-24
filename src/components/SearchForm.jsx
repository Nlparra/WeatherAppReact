import React from 'react'
import {Form} from 'react-bootstrap';


const SearchForm = props => {

  const handleSearch = event => {
    event.preventDefault()
    let userInput = event.target.value
    props.setUserInput(userInput)

  }


  
  return(
    <Form className="search" >
      <Form.Group >
        <Form.Control autocomplete="off" name="query" placeholder="Search for city" onChange={handleSearch}/>

      </Form.Group>
    </Form>
 
  )
}

export default SearchForm