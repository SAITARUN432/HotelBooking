import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
    const { state } = useLocation();
    const [bookingData, setBookingData] = useState(state || {});

    useEffect(() => {
        // If no state, try retrieving from local storage
        if (!state) {
            const storedData = localStorage.getItem("bookingData");
            if (storedData) {
                setBookingData(JSON.parse(storedData));
            }
        }
    }, [state]);

    if (!bookingData.name) return <div>No booking data found!</div>;

    return (
        <div>
            <h1>Booking Details</h1>
            <p><strong>Name:</strong> {bookingData.name}</p>
            <p><strong>City:</strong> {bookingData.city}</p>
            <p><strong>Days:</strong> {bookingData.days}</p>
        </div>
    );
}
