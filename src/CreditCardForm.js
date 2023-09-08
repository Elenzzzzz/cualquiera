// src/CreditCardForm.js

import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function CreditCardForm() {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const [errors, setErrors] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handledata = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlenfoque = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    const newErrors = {
      number: state.number === '' ? 'El número de tarjeta es obligatorio' : '',
      name: state.name === '' ? 'El nombre en la tarjeta es obligatorio' : '',
      expiry: state.expiry === '' ? 'La fecha de vencimiento es obligatoria' : '',
      cvc: state.cvc === '' ? 'El CVC es obligatorio' : '',
    };

    setErrors(newErrors);

    // Si no hay errores, puedes enviar el formulario o realizar otras acciones.
    if (!Object.values(newErrors).some((error) => error !== '')) {
      // Envía el formulario o realiza otras acciones aquí.
    }
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        name={state.name}
        cvc={state.cvc}
        focused={state.focus}
      />

      <div className="credit-card-form">
        <h4>Ingrese los datos de su tarjeta de crédito</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Número de tarjeta:</label>
            <input
              className='cajas'
              type="number"
              onFocus={handlenfoque}
              name="number"
              id="number"
              onChange={handledata}
              placeholder="Numero de tarjeta"
            />
            <p className="error">{errors.number}</p>
          </div>
          <div>
            <label>Nombre en la tarjeta:</label>
            <input
              className='cajas'
              type="text"
              onFocus={handlenfoque}
              name="name"
              id="name"
              onChange={handledata}
              placeholder="Ingrese su nombre"
            />
            <p className="error">{errors.name}</p>
          </div>
          <div>
            <label>Fecha de vencimiento:</label>
            <input
              type="number"
              className='cajas'
              onFocus={handlenfoque}
              name="expiry"
              id="expiry"
              onChange={handledata}
              placeholder="MM/YY"
            />
            <p className="error">{errors.expiry}</p>
          </div>
          <div>
            <label>CVC:</label>
            <input
              type="number"
              className='cajas'
              onFocus={handlenfoque}
              name="cvc"
              id="cvc"
              onChange={handledata}
              placeholder="Ingrese CVC"
            />
            <p className="error">{errors.cvc}</p>
          </div>
          <div className='space'>
            <button className='btn' type="submit">Pagar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCardForm;