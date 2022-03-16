import React from 'react';
import Card from './Card';
import us from '../../assets/us.jpg';
import manifest from '../../assets/manifest.jpg';
import cozy from '../../assets/cozy.jpg';
import './__cards.scss';


export default function Cards() {
  return (
    <div>
        <div className='row'>
            <div className='row'>
                <div className='row__card'>
                    <Card imgsrc={us}
                        title='Nuestro equipo'
                        parraf='Somos un equipo formado en 2003 dedicado a la publicación de libros de jóvenes autores comprometidos con el debate social y la divulgación de ideas.'/>
                </div>
                <div className='row__card'>
                    <Card imgsrc={manifest}
                        title='Nuestra filosofía'
                        parraf='Placerat sed mus risus habi parturient mollis rutrum, nisi potenti aptent mauris rhoncus senectus phasellus porta nascetur nisl, condimentum blandit eget nullam nam iaculis interdum dignissim.'/>
                </div>
                <div className='row__card'>
                    <Card imgsrc={cozy}
                        title='Nuestro espacio'
                        parraf='Lorem ipsum dolor sit amet consectetur adipiscing elit magna, neque ac imperdiet maecenas quis porttitor lectus class, tellus honcus mollis lacus tristique nulla felis laoreet.'/>
                </div>
            </div>
        </div>
    </div>
  )
}
