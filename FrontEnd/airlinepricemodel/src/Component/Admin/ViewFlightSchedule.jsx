import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewFlightSchedules = () => {
  const [flightSchedules, setFlightSchedules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/viewFlightSchedule")
      .then((res) => res.json())
      .then((data) => {
        setFlightSchedules(data);
      })
      .catch((error) => {
        console.error("Error fetching flight schedules:", error);
      });
  }, []);

  // Dummy Update function
  const handleUpdate = (fsId) => {
    console.log("Update clicked for Flight Schedule ID:", fsId);
    // Redirect to update page or open a modal
  };

  // Dummy Delete function
  const handleDelete = (fsId) => {
    console.log("Delete clicked for Flight Schedule ID:", fsId);
    // Call delete API here
    // fetch(`http://localhost:8082/deleteFlightSchedule/${fsId}`, { method: 'DELETE' })
    //   .then(response => response.json())
    //   .then(data => {
    //     setFlightSchedules(flightSchedules.filter(flight => flight.fsId !== fsId));
    //   });
  };

  return (
    <div className="container-fluid mt-5" style={{ marginLeft: "0", paddingLeft: "0" }}>
      <h2 className="mb-4" style={{ textAlign: "left" }}>All Flight Schedules ✈️</h2>

      {flightSchedules.length === 0 ? (
        <div className="text-center">No flight schedules found.</div>
      ) : (
        <div className="table-responsive" style={{ overflowX: "auto", width: "100%" }}>
          <table className="table table-bordered table-striped" style={{ minWidth: "100%" }}>
            <thead className="table-dark">
              <tr>
                <th>Airline</th>
                <th>Aircraft</th>
                <th>Flight Number</th>
                <th>Departure City</th>
                <th>Arrival City</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Ticket Price</th>
                <th>Actions</th> {/* Single Actions column */}
              </tr>
            </thead>
            <tbody>
              {flightSchedules.map((schedule, index) => (
                <tr key={index}>
                  <td>{schedule.airline_name}</td>
                  <td>{schedule.aircra_name}</td>
                  <td>{schedule.fnumber}</td>
                  <td>{schedule.dep_city}</td>
                  <td>{schedule.arr_city}</td>
                  <td>{schedule.dep_date}</td>
                  <td>{schedule.dep_time}</td>
                  <td>{schedule.arr_date}</td>
                  <td>{schedule.arr_time}</td>
                  <td>{schedule.rate}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleUpdate(schedule.fsId)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(schedule.fsId)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewFlightSchedules;
