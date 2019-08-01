import React from 'react'
import PropTypes from 'prop-types'

const BookItem = props => {
  const {cover, shelf, title, author} = props
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" >
          <img alt={''} src={cover} style={{display:'inherit'}} />
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event)=>{console.log('onChange: ',event.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  )
}

BookItem.propTypes = {
  cover: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  //onShelfChanged: PropTypes.func.isRequired
}
export default BookItem