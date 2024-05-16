
// import axios from 'axios'
import React from 'react'
import {
  initMercadoPago,
  createCardToken,
  CardNumber,
  SecurityCode,
  ExpirationDate,
} from "@mercadopago/sdk-react";

initMercadoPago("APP_USR-44f608af-4cd8-4676-a64d-e88b49592df7");


function PayForm():React.ReactElement {
  const cardToken = async () => {
    const response = await createCardToken({
      cardholderName: "APRO",
      identificationType: "DNI",
      identificationNumber: "12345678",
    });
    console.log("Card Token Response = ", response);
  };

  return (
    <div className='my-20'>
      <CardNumber placeholder="Card Number" />
      <SecurityCode placeholder="Security Code" />
      <ExpirationDate placeholder="Expiration Date" mode="short" />
      <button onClick={() => cardToken()}>Pay</button>
    </div>
  )
}

export default PayForm