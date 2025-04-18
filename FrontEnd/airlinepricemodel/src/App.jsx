import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { About } from './Component/About';
import AdminDashboard from './Component/Admin/AdminDashboard';
import ViewUser from './Component/Admin/ViewUser';
import AddFlightSchedule from './Component/Admin/AddFlightSchedule';
import ViewFlights from './Component/Admin/ViewFlights';
import ViewBookings from './Component/Admin/VIewBookings'; // correct the typo: VIewBooking -> ViewBookings
import { Contact } from './Component/Contact'; // correct 'contact' -> 'Contact'
import AddFlight from './Component/Admin/AddFlight';
import AddAirport from './Component/Admin/AddAirport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          {/* Default page inside Admin Dashboard */}
          <Route index element={<h2>Welcome to Admin Dashboard</h2>} />

          {/* Nested Admin Pages */}
          <Route path="users" element={<ViewUser />} />
          <Route path="bookings" element={<ViewBookings />} />
          <Route path="addflights" element={<AddFlightSchedule />} />
          <Route path="add-flight" element={<AddFlight />} />
          <Route path="add-airport" element={<AddAirport />} />
          <Route path="view-schedule" element={<ViewFlights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
