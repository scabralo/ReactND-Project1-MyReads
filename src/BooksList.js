import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const BooksList = (props) => {
  const {books, onShelfChange} = props

  return (
    <ol className="books-grid">
      {books.map((book) => {
        const authors = book.authors ? book.authors.toString() : ''
      return <BookItem key={book.id} onShelfChange={onShelfChange} id={book.id} title={book.title} author={authors} shelf={book.shelf ? book.shelf : 'none'} cover={book.imageLinks ? book.imageLinks.thumbnail : ''} />} )}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}
export default BooksList