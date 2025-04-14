import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar - 25% */}
      <div style={{ width: '25%' }}>
        <AdminNavbar />
      </div>

      {/* Content Area - 75% */}
      <div style={{ width: '75%', padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
