import React from 'react'
import {Form,Button} from 'react-bootstrap';


const SearchForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    let userInput = event.target.value
    props.setUserInput(userInput)

  }

  
  return(
    <Form className="search" >
      <Form.Group >
        <Form.Control name="query" placeholder="Search for city" onChange={handleSubmit} />
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form.Group>
    </Form>
 
  )
}

export default SearchForm