import React from 'react'
import { Row,Col,Form,Button} from 'react-bootstrap';


const SearchForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    props.setUserInput(event.target.query.value)
    event.target.reset()
  }

  return(

    <Form className="search" >
  <Row>
    <Col>
      <Form.Control  name="query" placeholder="Search for city" />
    </Col>
    <Col>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
    Search
  </Button>
    </Col>
  </Row>
</Form>
    
      
      

  )
}

export default SearchForm