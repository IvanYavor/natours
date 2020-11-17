/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Ho5GeJChwhCejvzDtbRaGyrtoEGwEKioSuf3m0VcmTYWdw0cTwofNFMIi3KJXb6Lxi8EquiSKkHTOljbKlw3RIr00OrWU94RI'
);

export const bookTour = async tourId => {
  try {
    // Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //   Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
