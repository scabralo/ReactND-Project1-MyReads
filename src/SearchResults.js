import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const SearchResults = props => {
  const {books} = props
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {console.log('SearchResults', books)}
        {books.map((book) => <BookItem key={book.id} onShelfChange={props.onShelfChange} id={book.id} title={book.title} author={book.authors[0]} shelf={book.shelf} cover={book.imageLinks.thumbnail} /> ) }
      </ol>
    </div>
  )
}

export default SearchResults