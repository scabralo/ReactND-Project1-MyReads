import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const SearchBar = props => {
  const {query, onInputChanged} = props
  return (
    <div className="search-books-bar">
      <Link className='close-search' to='/' >Close</Link>
      <div className="search-books-input-wrapper">
        
        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => onInputChanged(event.target.value)} />

      </div>
    </div>
  )
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired
}

export default SearchBar