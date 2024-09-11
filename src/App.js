import { useState } from "react";
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header";
import Nav from "./Sections/Nav";
import Main from "./Sections/Main";
import Footer from "./Sections/Footer";
import BookingPage from "./Sections/BookingPage";
import ConfirmedBooking from "./Sections/ConfirmedBooking"; // New component

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

const submitAPI = function (formData) {
  return true;
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [showBookingPage, setShowBookingPage] = useState(false);

  const handleReserveClick = () => {
    setShowBookingPage(true);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            showBookingPage ? (
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            ) : (
              <>
                <Header onReserveClick={handleReserveClick} />
                <Main />
              </>
            )
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
