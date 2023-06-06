import { useState, React } from 'react'
import BookEdit from "./BookEdit"

const BookShow = ( { book, onDelete, onEdit } ) => {
  const [showEdit,setShowEdit] = useState(false)
  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  const handleEditClick = () => {
    setShowEdit( !showEdit )
  }

  let content = <h3>{ book.title }</h3>
  
  if ( showEdit ) {
    content = <BookEdit onEdit={onEdit} book={book} />
  }
  return (
    <div>
      <div>{ content }</div>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  )
}

export default BookShow
