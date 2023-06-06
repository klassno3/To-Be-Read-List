import React from 'react'
import BookShow from "./BookShow"

const BookList = ( { books, onDelete, onEdit} ) => {
  const renderdBooks = books.map( ( book ) => {
    return <div className='list'>
      <BookShow onEdit={ onEdit } key={ book.id } book={ book } onDelete={ onDelete } />
      </div>
  } );

  return (

    <div className=''>
      <div className='book-list'>

      { renderdBooks }
      </div>
    </div>
  )
}

export default BookList
