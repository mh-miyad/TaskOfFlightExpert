import { create } from "zustand";


export const flightStore = create((set) => ({
    flights: [],
    setFlights: (flights) => set({ flights }),
}))