import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import {Link} from 'react-router-dom'
import BookShelf from './BooksShelf'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar';
import { thisExpression } from '@babel/types';

class BooksApp extends React.Component {
  state = {
    books:[],
    shelves: [
      {id:'currentlyReading', title: 'Currently Reading'},
      {id:'wantToRead', title:'Want To Read'},
      {id:'read', title:'Read'}
    ],
    query: '',
    searchResults: []
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

  onChangeQuery = (input) => {
    console.log('input', input)
    this.setState(() => ({
      query: input
    }))
    this.getResults()
  }

  getResults = () => {
    BooksAPI.search(this.state.query, 10)
      .then((result) => {
        // console.log('result', result)
        this.setState(() => ({
          searchResults: result
        }))
      })
  }

  render() {
    const {books, shelves, query, searchResults} = this.state
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
            <SearchBar query={query} onInputChanged={this.onChangeQuery} />
            <SearchResults books={searchResults} onShelfChange={this.changeShelf} />
          </div>
        )} />
        
      </div>
    )
  }
}

export default BooksApp
