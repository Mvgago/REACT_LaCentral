import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Contacto.scss';


export default function Contacto() {
  
  
  const [ FormEnviado, setFormEnviado ] = useState(false)


    return (
      <div className='form'>
        <div className='form__card'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            mensaje: ''
          }}
          validate={(valores) => {
            let errors = {};

            //validacion nombre
            if(!valores.name){
              errors.name='Por favor ingresa un nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
              errors.name = 'El nombre solo puede contener letras y espacios'
            }
            
            //validacion mail
            if(!valores.email){
              errors.email='Por favor ingresa un email';
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
              errors.email = 'El nombre solo puede contener letras, números, puntos, guiones'
            }

            //validacion mensaje
            if(!valores.mensaje){
              errors.mensaje='Ingrese su comentario';
            } 

            return errors;
          }}

          onSubmit={(valores, {resetForm}) => {
            resetForm()
            console.log('formulario enviado');
            setFormEnviado(true);
            setTimeout(() => setFormEnviado(false), 5000);
          }}
        
        >
          {( { errors, handleSubmit } ) => (
            <Form className='formulario' onSubmit={handleSubmit}>
                <h3 className='formulario__title'>Comparte con nosotros tus <br />comentarios e inquietudes</h3>
                <div className='formulario__inputs'>
                  <label htmlFor='name' className='formulario__inputs__name'>Nombre</label>
                  <Field 
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Nombre'
                          className='formulario__inputs__holder'
                         
                  />
                  <ErrorMessage name='name' component={() => (
                    <div className='formulario__error'>{errors.name}</div>
                  )} />
                </div>

                <div className='formulario__inputs2'>
                  <label htmlFor='email' className='formulario__inputs2__email'>Email</label>
                  <Field
                          type='text'
                          id='email'
                          name='email'
                          placeholder='correo@correo.com'
                          className='formulario__inputs2__holder2'      
                  />
                  <ErrorMessage name='email' component={() => (
                    <div className='formulario__error'>{errors.email}</div>
                  )} />
                </div>

                <div className='formulario__end'>
                  <Field
                        name='cliente'
                        as='select'
                        className='formulario__end__susc'>
                        <option value='Soy suscriptor' className='formulario__end__susc__option'>Soy suscriptor </option>
                         <option value='No soy suscriptor' className='formulario__end__susc__option'>No soy suscriptor</option>
                  </Field>
                </div>

                <div>
                  <Field
                           name='mensaje'
                           as='textarea'
                           placeholder=''
                           className='formulario__comments'
                           />
                           
                  <ErrorMessage name='mensaje' component={() => (
                    <div className='formulario__error'>{errors.mensaje}</div>
                  )} />
                </div>
                <button type='submit' className='formulario__btn'>Enviar</button>
                { FormEnviado && <p className='exito'>Formulario enviado</p>}
              </Form>
          )}
            
        </Formik>
        </div>
      </div>
    )
    
}
