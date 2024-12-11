import React from 'react';
import useStore from '../store/useStore';
import BookingCard from './BookingCard';

export default function BookingConfirmation() {
  const bookings = useStore((state) => state.bookings);

  return (
    <div className="container my-5">
      <h1 className="text-center">Booking Confirmation</h1>
      <div className="row">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} index={index} />
          ))
        ) : (
          <p>No bookings found. Please make a booking!</p>
        )}
      </div>
    </div>
  );
}
