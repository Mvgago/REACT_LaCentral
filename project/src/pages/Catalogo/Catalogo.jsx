import React, { useState } from 'react';
import axios from 'axios';
import './Catalogo.scss';


export default function Catalogo() {

  const [ book, setbook ] = useState('');
  const [ result, setResult ] = useState([]);
  const [ apiKey, setApiKey ] = useState('AIzaSyCWVn-45LjZt1a_XbnTWpaWrhcVdlKLYqw');


  function handleChange(event) {
    const book = event.target.value;

    setbook(book);
  }

  function handleSubmit(event) {

    event.preventDefault();

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+ apiKey+'&maxResults=7')
    .then(data => {
      //console.log(data.data.items);
      setResult(data.data.items);
      console.log(data.data.items)
    })
  }

  return (
    <div className='page'>
      <div className='page__container'>
          <form onSubmit={handleSubmit}>
              <h2 className='page__container__title'>Encuentra por temáticas</h2>
              <input className='page__container__search'
                  type='text' onChange={handleChange}
                  placeholder='  Busca un libro'>
              </input>
              <button type='submit' className='page__container__btn'>Buscar</button>
          </form>
      </div>
      <div className='page__fondo'>
          <div className='page__fondo__results'> 
            {result.map((book, index) => (
                <div key={index}>
                  <a href={book.volumeInfo.previewLink} className='page__fondo__results__bloque'>
                      <img
                          src={book.volumeInfo.imageLinks.thumbnail}
                          alt={book.title} className='page__fondo__results__bloque__img'/>
                      <p className='page__fondo__results__bloque__title'>{book.volumeInfo.authors}</p>
                  </a>
                </div>
            ))}
          </div>
      </div>
    </div>
  )
}