import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../API/Service.js";
import 'bootstrap/dist/css/bootstrap.min.css'; //

import "../../CSS/ViewUser.css"


const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userList = await getAllUsers();
      setUsers(userList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="center-box">
      <div className="card-box">

        <h2 className="text-center mb-4" style={{ color: "#333" }}>
          All Users
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>UID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center mt-4 flex-wrap">
          <button
            className="btn btn-secondary mx-1"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`btn mx-1 ${
                currentPage === index + 1 ? "btn-dark" : "btn-outline-secondary"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="btn btn-secondary mx-1"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewUsers;
