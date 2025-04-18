import { addFlight } from "../../API/Service.js";
import React, { useState } from "react";

const AddFlight = () => {
  const [fdata, setFData] = useState({
    airline_name: "",
    aircra_name: "",
    fnumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFData({ ...fdata, [name]: value });
  };

  const handleFlight = async (e) => {
    e.preventDefault();
    console.log("Flight Data Submitted:", fdata);

    try {
      const result = await addFlight(fdata);
      console.log("Flight Added Successfully:", result);
      alert("Flight added successfully!");
      
      // Optionally, reset the form after submission
      setFData({ airline_name: "", aircra_name: "", fnumber: "" });
    } catch (error) {
      console.error("Error while adding flight:", error);
      alert("Failed to add flight. Please try again.");
    }
  };


  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h3 className="text-center text-primary mb-4">Add Flight Details</h3>
        <form onSubmit={handleFlight}>
          {/* Airline Name */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="fname" className="form-label">
                Airline Name
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="airline_name"
                name="airline_name"
                className="form-control"
                placeholder="Enter the Airline Name"
                value={fdata.airline_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Flight Number */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="fnumber" className="form-label">
                Flight Number
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="aircra_name"
                name="aircra_name"
                className="form-control"
                placeholder="Enter the Aircraft Type"
                value={fdata.aircra_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Aircraft Type */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label htmlFor="ftype" className="form-label">
                Aircraft Type
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="fnumber"
                name="fnumber"
                className="form-control"
                placeholder="Enter the Flight Number"
                value={fdata.fnumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Add Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlight;
