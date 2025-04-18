// src/services/flightService.js

import axios from "axios";

// You can change this URL to your actual backend API URL
const API_URL = "http://localhost:8082";

export const addFlight = async (flightData) => {
  try {
    const response = await axios.post(`${API_URL}/addFlightDetails`, flightData);
    return response.data;
  } catch (error) {
    console.error("Error while adding flight:", error);
    throw error;
  }
};

export const addAirport = async (airportData) => {
    try {
        const response = await axios.post(`${API_URL}/addCityAirport`, airportData);

      return response.data;
    } catch (error) {
      console.error("Error while adding airport:", error);
      throw error;
    }
  };

 // Adjust your backend URL if needed
  
  export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/getAllUsers`); // assuming GET /users returns List<UserInfo>
      return response.data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  };
  
