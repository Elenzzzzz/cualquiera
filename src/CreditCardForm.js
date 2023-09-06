// src/CreditCardForm.js


import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';



function CreditCardForm() {

const [state, setState]= useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',

});

const handledata = (e) =>{
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
}


const handlenfoque = (e) =>{
    setState({
        ...state,
      focus: e.target.name
    });
}
  
  return   (
      
      <div>
        <Cards
        number={state.number}
        expiry={state.expiry}
        name={state.name}
        cvc={state.cvc}
        focused={state.focus}
      />

    <div className="credit-card-form">
      <h4 >Ingrese los datos de su tarjeta de crédito</h4>
      <form>
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
        </div>
        <div>
          <label>Nombre en la tarjeta:</label>
          <input
            className='cajas'
            type="name"
            onFocus={handlenfoque}
            name="name"
            id="name"
            onChange={handledata}
            placeholder="Ingrese su nombre"
          />
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
            placeholder="ingrese CVC"
          />
        </div>
        
        <div className='space'>
        <button className='btn'>pagar</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CreditCardForm;
