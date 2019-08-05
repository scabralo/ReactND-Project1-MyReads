import React from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

const BooksShelf = (props) => {
  const {books, shelfName, onShelfChange} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BooksList books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  )
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksShelf