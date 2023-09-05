// src/CreditCardForm.js


import React, { useState } from 'react';
import './CreditCardForm.css';
var image = document.createElement("img");
image.src = "img/logo.jpeg";
document.body.appendChild(image);
function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'cardName':
        setCardName(value);
        break;
      case 'cardExpiry':
        setCardExpiry(value);
        break;
      case 'cardCVC':
        setCardCVC(value);
        break;
      default:
        break;
    }

  };

  return (
    <div className="credit-card-form">
      <h6>Ingrese los datos de su tarjeta de crédito</h6>
    
      <form>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label>Nombre en la tarjeta:</label>
          <input
            type="text"
            name="cardName"
            value={cardName}
            onChange={handleInputChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <label>Fecha de vencimiento:</label>
          <input
            type="text"
            name="cardExpiry"
            value={cardExpiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVC:</label>
          <input
            type="password"
            name="cardCVC"
            value={cardCVC}
            onChange={handleInputChange}
            placeholder="ingrese CVC"
          />
        </div>
      </form>
    </div>
  );
}

export default CreditCardForm;
