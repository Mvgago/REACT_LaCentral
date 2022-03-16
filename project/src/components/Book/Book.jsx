import React, { useState } from 'react';
import './Book.scss';


export default function Book({ book: { title, author, book_image, description, buy_links }}) {

  const [buyLink, setBuyLink] = useState(false)

  const buyClickHandler = () => {
    setBuyLink(true);

  }
  

  return (
    <div>
        <div className='card-book'>            
            <div className='card-book__img'>
                <img src={book_image} alt={title}/>
            </div>
            <div className='card-book__font'>
              <h4>{title}</h4>
              <p>{author}</p>

            </div>
            
            <ul className='card-book__list'>
              <button onClick={buyClickHandler} className='card-book__list__btn'>Ver más</button>
              { buyLink &&
                <div className='card-book__list__links'>
                  {description}
                  <br />
                  <br />
                  {buy_links.map((link) => {
                  const {name, url} = link
                  return (
                    <div key={name} className='card-book__list__links__'>
                      <a href={url}>{name}</a>

                    </div>
                    )
                  })}
                  
                  </div>
                  
              }
              
            </ul>
        </div>
    </div>
  )
}
