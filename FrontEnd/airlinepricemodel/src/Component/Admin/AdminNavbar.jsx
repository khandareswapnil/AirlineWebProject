import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ height: '100vh' }}>
      <h4 className="mb-4 text-center">Admin Panel</h4>
      <ul className="nav flex-column gap-3 fs-5">
        <li>
          <NavLink to="/admin" className="nav-link text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/bookings" className="nav-link text-white">
            View Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className="nav-link text-white">
            View Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addflights" className="nav-link text-white">
            Add Flight Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/view-schedule" className="nav-link text-white">
            View Flight Schedule
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
