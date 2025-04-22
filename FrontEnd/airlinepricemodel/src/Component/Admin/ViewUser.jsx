import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../API/Service.js";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../CSS/ViewUser.css";

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const fileName = `User_Report_${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}.pdf`;

    const header = () => {
      doc.setFontSize(16);
      doc.setTextColor(40);
      doc.text("My Airline Ticket System", pageWidth / 2, 15, { align: "center" });

      doc.setFontSize(12);
      doc.text("User Report", pageWidth / 2, 23, { align: "center" });

      // Add date at top right
      doc.setFontSize(10);
      doc.text(`Date: ${formattedDate}`, pageWidth - 20, 10, { align: "right" });
    };

    const footer = (data) => {
      const str = "Page " + data.pageCount;
      doc.setFontSize(10);
      doc.text(str, data.settings.margin.left, pageHeight - 10);
    };

    const tableColumn = ["UID", "Name", "Email", "Contact", "Gender", "Role"];
    const tableRows = users.map((user) => [
      user.uid,
      user.name,
      user.email,
      user.contact,
      user.gender,
      user.role,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      margin: { top: 30 },
      didDrawPage: (data) => {
        header();
        footer(data);
      },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [0, 123, 255], // Bootstrap primary color
        textColor: 255,
      },
    });

    doc.save(fileName);
  };

  return (
    <div className="center-box">
      <div className="card-box">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center mb-0" style={{ color: "#333" }}>
            All Users
          </h2>
          <button className="btn btn-success" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>

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
