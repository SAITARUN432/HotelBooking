import { create } from "zustand";

const useStore = create((set) => ({
  selectedHotel: JSON.parse(localStorage.getItem("selectedHotel")) || null,
  setSelectedHotel: (hotel) => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    set({ selectedHotel: hotel });
  },

  bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  addBooking: (booking) => {
    set((state) => {
      const updatedBookings = [...state.bookings, booking];
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
      return { bookings: updatedBookings };
    });
  },
}));

export default useStore;
