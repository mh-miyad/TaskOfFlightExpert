import { create } from "zustand";
import demo from "../Data/Demo.json"

const initialState = {
  status: false, // Initial loading state
  flights: [...demo.flightOffer], // Empty array to hold flight data
};
const useFlightStore = create((set) => ({
  ...initialState,
  setStatus: (status) => set({ status }), // Update status directly
  setFlights: (flights) => set({ flights }), // Update flights directly
}));
export default useFlightStore