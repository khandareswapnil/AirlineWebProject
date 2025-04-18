import React, { useState } from "react";

import { addAirport } from "../../API/Service"; // 👈 import service here

const AddAirport = () => {
  const [form, setForm] = useState({
    cityName: "",
    airportName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("New Airport Submitted:", form);

    try {
      await addAirport(form); // 👈 calling API here
      alert("Airport added successfully!");
      setForm({ cityName: "", airportName: "" }); // reset form
    } catch (error) {
      alert("Failed to add airport!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h3 className="text-center text-primary mb-4">Add New Airport</h3>
        <form onSubmit={handleSubmit}>
          {/* City Name */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="cityName" className="form-label">
                City Name
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="cityName"
                name="cityName"
                className="form-control"
                placeholder="Enter City Name"
                value={form.cityName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Airport Name */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label htmlFor="airportName" className="form-label">
                Airport Name
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="airportName"
                name="airportName"
                className="form-control"
                placeholder="Enter Airport Name"
                value={form.airportName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Save Airport
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAirport;
