import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const BooksList = (props) => {
  const {books} = props
  return (
    <ol className="books-grid">
      book.map((book) => ({
        <li><BookItem title={books.title} author={books.authors[0]} shelf={books.shelf} cover={books.imageLinks.thumbnail} /></li>
      }))
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
}
export default BooksList