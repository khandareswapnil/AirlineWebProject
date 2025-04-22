import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Sidebar - Fixed */}
      <div
        style={{
          width: '20%',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#f8f9fa',
          overflowY: 'auto',
          borderRight: '1px solid #dee2e6',
        }}
      >
        <AdminNavbar />
      </div>

      {/* Content Area - Scrollable */}
      <div
        style={{
          marginLeft: '25%',
          width: '80%',
          padding: '20px',
          overflowY: 'auto',
          maxHeight: '100vh',
        }}
      >
        <Outlet />
      </div>

    </div>
  );
};

export default AdminDashboard;
