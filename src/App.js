import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import {Link} from 'react-router-dom'
import BookShelf from './BooksShelf'

class BooksApp extends React.Component {
  state = {
    books:[],
    shelves: [
      {id:'currentlyReading', title: 'Currently Reading'},
      {id:'wantToRead', title:'Want To Read'},
      {id:'read', title:'Read'}
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(()=>({
          books
        }))
      })
  }

  changeShelf = (bookId, newShelf) => {
    
    this.setState((prevState) => ({
      books: prevState.books.map((book)=>{
        let newBook = book
        if(book.id === bookId) {
          newBook.shelf = newShelf
          BooksAPI.update(newBook, newShelf)
        }
        return newBook
      })
    }))
  }

  render() {
    const {books, shelves} = this.state
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => 
                  <BookShelf key={ shelf.id } onShelfChange={this.changeShelf} shelfName={ shelf.title } books={ books.filter((book) => book.shelf === shelf.id) } />
                )}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={({ history })=>(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/' >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )} />
        
      </div>
    )
  }
}

export default BooksApp
