import React, { useState, useEffect } from 'react'
import Book from '../../components/Book/Book';

import './Home.scss';

export default function Home() {

  const [books, setBooks] = useState([])

  useEffect(() => {

    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8t68HJYeBJDpRK28n4bbukc9DXSyHNAH')
    .then(data => data.json())
    .then(data => setBooks(data.results.books))
    //.then(data => console.log(data.results.books))
    
  }, [])

  

  return (
    <div>
      <h2 className='title'>Últimos libros editados</h2>
      <div className='post-cont'>
          {books.map((book) => {
            return (
              <Book key={book.rank} book={book}/>
            )
          })}
      </div>
  </div>
  )
}

