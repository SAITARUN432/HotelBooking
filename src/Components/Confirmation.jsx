import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "./Zustand";
import hotelsData from "../Data/Hotels.json";

export default function Confirmation() {
    const navigate = useNavigate();
    const { id } = useParams(); // Extract hotel ID from URL
    const selectedHotel = useStore((state) => state.selectedHotel);

    // Fallback if Zustand data is unavailable
    const hotel =
        selectedHotel && selectedHotel.id === id
            ? selectedHotel
            : hotelsData.hotels.find((hotel) => hotel.id === id);

    // Form state
    const [userData, setUserData] = useState({
        name: "",
        city: "",
        days: "",
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!userData.name || !userData.city || !userData.days) {
            alert("Please fill in all fields.");
            return;
        }

        const bookingData = {
            hotelId: hotel.id,
            hotelName: hotel.name,
            hotelLocation: hotel.location,
            ...userData,
        };

        // Save to local storage
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const updatedBookings = [...existingBookings, bookingData];
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));

        alert("Booking details saved successfully!");
    };

    if (!hotel) {
        return <div>Hotel not found!</div>;
    }

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Booking Confirmation</h1>
            <div className="card">
                <img
                    src={hotel.image}
                    className="card-img-top"
                    alt={hotel.name}
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h2>{hotel.name}</h2>
                    <p><strong>Location:</strong> {hotel.location}</p>
                    <p><strong>Description:</strong> {hotel.description}</p>
                    <p><strong>Rating:</strong> {hotel.rating}</p>
                    <p><strong>Price Range:</strong> {hotel.priceRange}</p>

                    {/* Form to collect user data */}
                    <form onSubmit={handleFormSubmit} className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={userData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-control"
                                value={userData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="days" className="form-label">Number of Days:</label>
                            <input
                                type="number"
                                id="days"
                                name="days"
                                className="form-control"
                                value={userData.days}
                                onChange={handleInputChange}
                                required
                                min="1"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => navigate('/bookingcomponent')}>Save Booking Details</button>
                    </form>
                </div>
            </div>
        </div>
    );
}