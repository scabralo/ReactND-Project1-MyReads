import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const SearchResults = props => {
  const {books, currentBooks, onShelfChange, addToShelves} = props
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        { books && (books.length > 0) && books.map((book) => {
          const bookFromState = currentBooks[0] ? currentBooks.filter((bookOnState) => {
            return bookOnState.id === book.id
          }) : []
          const shelfFromState = bookFromState[0] ? bookFromState[0].shelf : 'none'
          return <BookItem key={book.id} onShelfChange={shelfFromState === 'none' ? addToShelves : onShelfChange} id={book.id} title={book.title} author={book.authors ? book.authors[0] : ''} shelf={shelfFromState} cover={book.imageLinks ? book.imageLinks.thumbnail : ''} />
        }) }
      </ol>
    </div>
  )
}
//<SearchResults books={searchResults} currentBooks={this.state.books}  onShelfChange={this.changeShelf} addToShelves={this.addToShelves} />

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  currentBooks: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  addToShelves: PropTypes.func.isRequired
}

export default SearchResults