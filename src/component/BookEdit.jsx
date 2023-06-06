import React, { useState } from 'react'

const BookEdit = ({book, onSubmit}) => {
  const [ title, setTitle ] = useState( book.title );
  

  const handleChange = ( e ) => {
    setTitle(e.target.value)
  }

  const handleSubmit = ( e ) => {
    onSubmit( book.id, title );
    e.preventDefault();
  }

  return (
    <div className='book-edit'>
      <form className="edit-form" onSubmit={ handleSubmit }>
        <label className='edit-label'>Title</label>
        <input value={ title }  onChange={handleChange}/>
      <button>Save</button>
      </form>
    </div>
  )
}
export default BookEdit
