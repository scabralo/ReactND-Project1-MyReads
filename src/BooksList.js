import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const BooksList = (props) => {
  const {books} = props

  return (
    <ol className="books-grid">
      {books.map((book) => <BookItem key={book.id} title={book.title} author={book.authors[0]} shelf={book.shelf} cover={book.imageLinks.thumbnail} /> )}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
}
export default BooksList