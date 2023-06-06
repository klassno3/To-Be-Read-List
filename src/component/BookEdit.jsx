import React, { useState } from 'react'

const BookEdit = ({book, onEdit}) => {
  const [ title, setTitle ] = useState( book.title );
  

  const handleChange = ( e ) => {
    setTitle(e.target.value)
  }

  const handleSubmit = ( e ) => {
    onEdit( book.id, title );
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>Title</label>
        <input value={ title }  onChange={handleChange}/>
      <button>Save</button>
      </form>
    </div>
  )
}
export default BookEdit
