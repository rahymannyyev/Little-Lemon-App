import BookingForm from "./BookingForm";
export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="Booking-Header">
      <h1>Book Now</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}
