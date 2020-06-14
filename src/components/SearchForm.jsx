import React from 'react'



const SearchForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    props.setUserInput(event.target.query.value)
    event.target.reset()
  }

  return(
    <form  onSubmit={handleSubmit}>
      <label htmlFor="query" aria-label="Search for city"></label>
      <input type="search" name="query" placeholder="E.g.: London" required />
      <div>
        <input type="submit" value="Search"/>
      </div>
    </form>
  )
}

export default SearchForm