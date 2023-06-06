import React from 'react'
import { useState } from "react"
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList"
const App = () => {
  const [ books, setBooks ] = useState( [] );
  const createBook = ( title ) => {
    const updateBooks = [
      ...books, { id: Math.floor(Math.random()*999), title:title}
    ]
    setBooks(updateBooks)
  }
  const deleteBooksById = ( id ) => {
    const updatedBooks = books.filter( ( book ) => {
      return book.id !== id;
    } );
    setBooks( updatedBooks );
  }
  const editBooksById = (  id,newTitle ) => {
    const updatedBooks = books.map( ( book ) => {
      if ( book.id === id ) {
        return { ...book, title: newTitle };

      }
      return book;
    } )
    setBooks( updatedBooks );
    console.log(newTitle)
  };
  return (
    <div>
      <BookList onEdit={editBooksById} books={books} onDelete={deleteBooksById} />
      <BookCreate onCreate={createBook}/>
    </div>
  )
}
export default App
