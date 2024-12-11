import { useNavigate } from "react-router-dom";
import "../App.css";
import hotelsData from "../Data/Hotels.json"; // Adjust the path to your Hotels.json
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import useStore from "./Zustand"; // Import the Zustand store

export default function Home() {
    const navigate = useNavigate();
    const setSelectedHotel = useStore((state) => state.setSelectedHotel);

    const handleBookNow = (hotel) => {
        setSelectedHotel(hotel); // Save the selected hotel to the Zustand store
        console.log("Selected Hotel:", hotel);
        navigate(`/confirmation/${hotel.id}`); // Navigate to the confirmation page
    };

    return (
      <div className="container my-5">
      <h1 className="text-center mb-4">Available Hotels</h1>
      <div className='card'>
      <div className="row">
        {hotelsData.hotels.map((hotel) => (
          <div key={hotel.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {/* Hotel Image */}
              <img 
                src={hotel.image} 
                className="card-img-top" 
                alt={hotel.name} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                {/* Hotel Info */}
                <h5 className="card-title">{hotel.id}.{hotel.name}</h5>
                <p className="card-text">
                  <strong>Location:</strong> {hotel.location}<br />
                  <strong>Description:</strong> {hotel.description}<br />
                  <strong>Rating:</strong> {hotel.rating}<br />
                  <strong>Price Range:</strong> {hotel.priceRange}
                </p>
                {/* Amenities */}
                <p><strong>Amenities:</strong></p>
                <ul className="list-unstyled">
                  {hotel.amenities.map((amenity, index) => (
                    <li key={index}>&#x2022; {amenity}</li>
                  ))}
                </ul>
                {/* Reviews */}
                <p><strong>Reviews:</strong></p>
                {hotel.reviews.map((review, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <strong>{review.name}:</strong> {review.comment}
                    </p>  
                    <p>Rating: {review.rating}</p>
                  </div>
                ))}
                <button className='bookNow' style={{border:'1px solid black', borderRadius: '12px', padding: '5px', margin: '5px'}} 
                onClick={() => handleBookNow(hotel) }>
                    Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}