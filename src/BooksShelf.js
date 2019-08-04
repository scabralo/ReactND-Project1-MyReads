import React from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

const BooksShelf = (props) => {
  const {books, shelfName} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BooksList books={books} />
      </div>
    </div>
  )
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
}

export default BooksShelf