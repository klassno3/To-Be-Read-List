import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList"
import "./component/index.css"


const App = () => {
  useEffect( () => {
    fetchBooks();

 },[])


  const [ books, setBooks ] = useState( [] );
  
  const fetchBooks = async () => {
    const response = await axios.get( ' http://localhost:3001/books' )
    setBooks( response.data )
    
  };

  const createBook = async ( title ) => {
    
    const response = await axios.post(' http://localhost:3001/books', 
      {
        title 
      } );
    
    console.log( response );
    const updateBooks = [
      ...books,
     response.data
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
    <div className='app'>
      <h1>Reading List</h1>
      <BookList onEdit={editBooksById} books={books} onDelete={deleteBooksById} />
      <BookCreate onCreate={createBook}/>
    </div>
  )
}
export default App
