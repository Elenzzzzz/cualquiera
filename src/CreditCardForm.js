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

  
  return   (
      
      <div>
        <Cards
        number={state.number}
        expiry={state.expiry}
        name={state.name}
        cvc={state.cvc}
        focused=""
      />

    <div className="credit-card-form">
      <h4 >Ingrese los datos de su tarjeta de crédito</h4>
      <form>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="number"
            name="number"
            id="number"
            onChange={handledata}
            placeholder="1234 5678 91011 121314"
          />
        </div>
        <div>
          <label>Nombre en la tarjeta:</label>
          <input
            type="name"
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
            name="cvc"
            id="cvc"
            onChange={handledata}
            placeholder="ingrese CVC"
          />
        </div>
      </form>
    </div>
    </div>
  );
}

export default CreditCardForm;
