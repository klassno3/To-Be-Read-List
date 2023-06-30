import { useState, React } from 'react'
import BookEdit from "./BookEdit"
import {FaEdit} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"


const BookShow = ( { book, onDelete, onEdit } ) => {

  const [ showEdit, setShowEdit ] = useState( false );
  const handleDeleteClick = () => {

    onDelete( book.id );
  }

  const handleEditClick = () => {
    setShowEdit( !showEdit )
  }
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
   setShowEdit(false)
  }

  let content = <h3>{ book.title }</h3>

  if ( showEdit ) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }
  return (
    <div className='show'>
   
      <div className='show-img'>
        
      <img src={`https://picsum.photos/seed/${book.id}/200/100`} alt="" />
      <div>{ content }</div>
</div>
      <div className="edit">
      
      <button onClick={handleDeleteClick} ><FaTrash/></button>
      <button onClick={handleEditClick} ><FaEdit/></button>
      </div>
      </div>
   
  )
}

export default BookShow
