import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/AddFlightSchedule.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFlightSchedule = () => {
  const [flights, setFlights] = useState([]);
  const [selectedAirline, setSelectedAirline] = useState("");
  const [selectedAircraft, setSelectedAircraft] = useState("");
  const [selectedFlightNumber, setSelectedFlightNumber] = useState("");
  const [airportData, setAirportData] = useState([]);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");

  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:8082/viewFlights")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Flights:", data);
        setFlights(data);
      })
      .catch((err) => console.error("Error fetching flight data", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8082/viewAirport")
      .then((res) => res.json())
      .then((data) => setAirportData(data))
      .catch((err) => console.error("Error fetching airport data", err));
  }, []);

  // Filter based on selected airline
  const filteredFlights = flights.filter(
    (flight) => flight.airline_name === selectedAirline
  );

  const uniqueAirlines = [...new Set(flights.map((flight) => flight.airline_name))];
  const uniqueAircrafts = [...new Set(filteredFlights.map((flight) => flight.aircra_name))];
  const uniqueFlightNumbers = [...new Set(filteredFlights.map((flight) => flight.fnumber))];
  const uniqueCities = [...new Set(airportData.map((item) => item.cityName))];

  const handleDepartureCityChange = (e) => {
    const city = e.target.value;
    setDepartureCity(city);
    setDepartureAirport("");
    const airports = airportData.filter((item) => item.cityName === city);
    setDepartureAirports(airports);
  };

  const handleArrivalCityChange = (e) => {
    const city = e.target.value;
    setArrivalCity(city);
    setArrivalAirport("");
    const airports = airportData.filter((item) => item.cityName === city);
    setArrivalAirports(airports);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scheduleData = {
      selectedAirline,
      selectedAircraft,
      selectedFlightNumber,
      departureCity,
      departureAirport,
      arrivalCity,
      arrivalAirport,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
    };
    console.log("Submitted Schedule:", scheduleData);
    // Here you can POST the data to backend if you want
  };

  const filteredArrivalCities = uniqueCities.filter((city) => city !== departureCity);
  const availableArrivalAirports = arrivalAirports.filter((airport) => airport.airportName !== departureAirport);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-5 flight-schedule-title">Add Flight Schedule</h2>

      <form onSubmit={handleSubmit}>
        {/* Flight Information Section */}
        <div className="card p-4 shadow-sm mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
    <h3 className="text-primary">Flight Information</h3>
    <Link to="/admin/add-flight" className="btn btn-success">
      Add New Flight
    </Link>
  </div>

          {/* Airline Name */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Airline Name:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={selectedAirline}
                onChange={(e) => {
                  setSelectedAirline(e.target.value);
                  setSelectedAircraft("");
                  setSelectedFlightNumber("");
                }}
              >
                <option value="">Select Airline Name</option>
                {uniqueAirlines.map((airline, index) => (
                  <option key={index} value={airline}>
                    {airline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Aircraft Type */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Aircraft Type:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={selectedAircraft}
                onChange={(e) => setSelectedAircraft(e.target.value)}
                disabled={!selectedAirline}
              >
                <option value="">Select Aircraft Type</option>
                {uniqueAircrafts.map((aircraft, index) => (
                  <option key={index} value={aircraft}>
                    {aircraft}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Flight Number */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Flight Number:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={selectedFlightNumber}
                onChange={(e) => setSelectedFlightNumber(e.target.value)}
                disabled={!selectedAirline}
              >
                <option value="">Select Flight Number</option>
                {uniqueFlightNumbers.map((number, index) => (
                  <option key={index} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Route Information Section */}
        <div className="card p-4 shadow-sm mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-primary">Route Information</h3>
            <Link to="/admin/add-airport" className="btn btn-success">
              Add New Airport
            </Link>
          </div>

          {/* Departure City */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Departure City:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={departureCity}
                onChange={handleDepartureCityChange}
              >
                <option value="">Select Departure City</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Departure Airport */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Departure Airport:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={departureAirport}
                onChange={(e) => setDepartureAirport(e.target.value)}
                disabled={!departureCity}
              >
                <option value="">Select Departure Airport</option>
                {departureAirports.map((airport, index) => (
                  <option key={index} value={airport.airportName}>
                    {airport.airportName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrival City */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Arrival City:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={arrivalCity}
                onChange={handleArrivalCityChange}
              >
                <option value="">Select Arrival City</option>
                {filteredArrivalCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrival Airport */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Arrival Airport:</label>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                value={arrivalAirport}
                onChange={(e) => setArrivalAirport(e.target.value)}
                disabled={!arrivalCity}
              >
                <option value="">Select Arrival Airport</option>
                {availableArrivalAirports.map((airport, index) => (
                  <option key={index} value={airport.airportName}>
                    {airport.airportName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Date and Time Section */}
        <div className="card p-4 shadow-sm mb-5">
          <h3 className="text-primary mb-4">Date And Time Information</h3>

          {/* Departure Date and Time */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="departureDate" className="form-label">Departure Date</label>
              <input
                type="date"
                id="departureDate"
                className="form-control"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="departureTime" className="form-label">Departure Time</label>
              <input
                type="time"
                id="departureTime"
                className="form-control"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </div>
          </div>

          {/* Arrival Date and Time */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
              <input
                type="date"
                id="arrivalDate"
                className="form-control"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
              <input
                type="time"
                id="arrivalTime"
                className="form-control"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Flight Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFlightSchedule;
