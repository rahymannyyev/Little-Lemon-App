import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};

  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation. We look forward to seeing you!</p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Guests:</strong> {guests}
      </p>
      <p>
        <strong>Occasion:</strong> {occasion}
      </p>
    </div>
  );
};

export default ConfirmedBooking;
