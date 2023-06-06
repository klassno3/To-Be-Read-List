import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
  const [ title, setTitle ] = useState( "" )
  
  const handleChange = (e) => {
    setTitle( e.target.value );
  }
  const handleSubmit = ( e ) => {
    e.preventDefault();
    onCreate( title )
    setTitle("") 
  }
  return (
    <div className='book-create'>
      <form onSubmit={ handleSubmit }>
        <div className="create">

        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!!</button>
        </div>

      </form>
    </div>
  )
}
export default BookCreate
