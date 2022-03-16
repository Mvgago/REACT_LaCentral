import React from 'react';
import './_card.scss';


export default function Card(props) {
  return (
    <div className='card'>
        <div className='card__overflow'>
            <img src={props.imgsrc} alt='Equipo' className='card__overflow__img'/>
        </div>
        <h4 className='card__title'>{props.title}</h4>
        <div className='card__parraf'>
            <p className='card__parraf__text'>{props.parraf}</p>
        </div>
        
        <a href='https://www.youtube.com/watch?v=iX7VQkCj9hI' className='card__btn'>Saber más</a>
    </div>
  )
}
