import { useEffect, useState } from "react";

export default function BookingComponent() {
    const [bookings, setBookings] = useState([]);

    // Fetch data from local storage
    useEffect(() => {
        const savedBookings = localStorage.getItem("bookings");
        if (savedBookings) {
            setBookings(JSON.parse(savedBookings));
        }
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Your Bookings</h1>
            {bookings.length === 0 ? (
                <p>No bookings found!</p>
            ) : (
                bookings.map((booking, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{booking.hotelName}</h5>
                            <p><strong>Location:</strong> {booking.hotelLocation}</p>
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>City:</strong> {booking.city}</p>
                            <p><strong>Number of Days:</strong> {booking.days}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
