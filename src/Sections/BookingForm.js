import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const BookingForm = ({ availableTimes, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };
  const submitAPI = function (formData) {
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests,
      occasion,
    };

    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmed", { state: formData }); // Pass formData via navigate's state
    }
  };

  const TimesAvailable = (times) => {
    return times.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="left">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={selectedDate}
            onChange={handleDateChange}
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {TimesAvailable(availableTimes)}
          </select>
        </div>

        <div className="right">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder={1}
            min={1}
            max={10}
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
      </div>

      <div className="button">
        <input
          className="button-self"
          type="submit"
          value="Make Your reservation"
        />
      </div>
    </form>
  );
};

export default BookingForm;
