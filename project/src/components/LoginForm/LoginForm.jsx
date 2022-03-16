import React, { useState } from 'react';
import './LoginForm.scss';

export default function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:'', email:'', password: ''});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);

    }


  return (
      <div>
        <form onSubmit={submitHandler}>
            <div className='card-login'>
                <h2 className='card-login__saludo'>¡Hola!</h2>
                {(error !== '') ? ( <div className='error'>{error}</div> ) : ''}
                <div className='card-login__usuario'>
                   <h3>Usuario</h3>
                   <input type='text'
                    name='name' id='name'
                    onChange={e => setDetails({...details, name: e.target.value})}
                    value={details.name} className='card-login__usuario__input'/>
                </div>
                <div className='card-login__email'>
                    <h3>Email</h3>
                    <input type='email'
                    name='email' id='email'
                    onChange={e => setDetails({...details, email: e.target.value})}
                    value={details.email} className='card-login__email__input' />
                </div>
                <div className='card-login__contraseña'>
                    <h3>Contraseña</h3>
                    <input type='password'
                    name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})}
                    value={details.password} className='card-login__contraseña__input'/>
                </div>
                <input type='submit' value='Login' className='card-login__btn'/>
            </div>
        </form>
        </div>
  )
}
