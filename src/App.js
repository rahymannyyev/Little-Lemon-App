import { useState } from "react";
import React, { useReducer } from "react";
import "./App.css";
import Header from "./Sections/Header";
import Nav from "./Sections/Nav";
import Main from "./Sections/Main";
import Footer from "./Sections/Footer";
import BookingPage from "./Sections/BookingPage";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function to update times
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times. Later, add logic for filtering by date.
      return initializeTimes();
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [showBookingPage, setShowBookingPage] = useState(false);

  const handleReserveClick = () => {
    setShowBookingPage(true); // Show BookingPage when button is clicked
  };

  return (
    <>
      <Nav />
      {/* Conditionally render Header and Main or BookingPage */}
      {showBookingPage ? (
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      ) : (
        <>
          <Header onReserveClick={handleReserveClick} />{" "}
          {/* Pass the function as prop */}
          <Main />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
