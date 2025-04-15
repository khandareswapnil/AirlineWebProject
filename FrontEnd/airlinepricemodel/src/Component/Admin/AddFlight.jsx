import React, { useState } from "react";

const AddFlight = () => {
  const [fdata, setFData] = useState({
    fname: "",
    fnumber: "",
    ftype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFData({ ...fdata, [name]: value });
  };

  const handleFlight = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Flight Data Submitted:", fdata);
    // You can add your API POST call here
  };

  return (
    <div>
      <form onSubmit={handleFlight}>
        <h1>Add Flight Details</h1>
        <div>
          <input
            type="text"
            placeholder="Enter the Airline Name"
            name="fname"
            value={fdata.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the Flight Number"
            name="fnumber"
            value={fdata.fnumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the Aircraft Type"
            name="ftype"
            value={fdata.ftype}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
