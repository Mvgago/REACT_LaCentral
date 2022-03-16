import React, { useState, useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import libro from '../../assets/libro.png';



import './Login.scss';


export default function LogIn() {

  //const isLogin = useContext(LoginContext)

  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');


  const Login = details => {
    //console.log(details);
    
    if (details.email === adminUser.email && details.password === adminUser.password)
      console.log('youre in');
      setUser({
        name: details.name,
        email: details.email
      });
  }


  return (
    <div className='login'>
            {(user.email !== '') ? (
              <div className='login__welcome'>
                <div className='login__welcome__menu'>
                <h2 className='login__welcome__title'>Hola <span>{user.name}</span></h2>

                  <div className='login__welcome__menu__items'>
                    <p>Libros editados</p>
                    <p>Lanzamientos pendientes</p>
                    <p>Historial personal</p>
                    <p>Próximos eventos</p>
                    <hr className='login__welcome__divider'></hr>
                    <div className='login__welcome__menu__items'>
                      <img src={libro} alt='libro' className='login__welcome__menu__items__libro'></img>
                    </div>                   
                  </div>               
                </div>
              </div>
            ) : (
            <LoginForm Login={Login} error={error} />
          )}
    </div>
  )
}
