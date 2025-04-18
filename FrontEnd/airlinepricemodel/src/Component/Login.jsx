import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    userEmail: '',
    userContact: '',
    gender: ''
  });
  const [userRole, setUserRole] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpInputs, setShowOtpInputs] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [backendOtp, setBackendOtp] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyClick = async () => {
    if (email.trim() === '') {
      alert('Please enter your email first');
    } else {
      try {
        const response = await axios.post('http://localhost:8082/verifyEmail', { email });
        const { otp: receivedOtp, role: receivedRole } = response.data;
        console.log("Received OTP from backend:", receivedOtp);
        console.log("Received Role from backend:", receivedRole);
        setBackendOtp(receivedOtp);
        setUserRole(receivedRole);
        setShowOtpInputs(true);
      } catch (error) {
        console.error(error);
        alert('Failed to verify email. Please make sure the email is registered.');
      }
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // 🛠️ Moved OTP checking logic here:
  const handleLoginClick = () => {
    if (!showOtpInputs) {
      alert('Please verify your email first!');
      return;
    }

    const enteredOtp = otp.join('');
    console.log("Entered OTP:", enteredOtp);
    console.log("Backend OTP:", backendOtp);

    if (enteredOtp === backendOtp) {
      alert('OTP Verified Successfully! 🎉');

      if (userRole === "admin") {
        navigate('/admin');
      } else if (userRole === "user") {
        navigate('/userDashboard');
      } else {
        alert('Unknown user role!');
      }

    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/addUser', formData);
      console.log(response.data);

      if (response.data === "User already exists") {
        alert("User already exists. Please login.");
      } else if (response.data === "User Add Success") {
        alert("User registered successfully! 🎉");
        setFormData({
          username: '',
          userEmail: '',
          userContact: '',
          gender: ''
        });
      } else {
        alert("Failed to register user. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert('Server Error');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box container-fluid">
        <div className="row">
          {/* Login Section */}
          <div className="col-12 col-md-6 login-section d-flex flex-column align-items-center">
            <h2 className="mb-4">Login</h2>

            <div className="mb-3 w-100">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="d-flex flex-column flex-md-row gap-2 login-verify">
                <input
                  type="email"
                  className="form-control input-height"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="button" onClick={handleVerifyClick} className="btn btn-outline-primary button-height">
                  Verify
                </button>
              </div>
            </div>

            {/* OTP Section */}
            {showOtpInputs && (
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex gap-2 mb-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      className="form-control text-center"
                      style={{ width: "50px", height: "50px", fontSize: "24px" }}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                    />
                  ))}
                </div>
                {/* ❌ Removed Submit OTP button */}
              </div>
            )}

            {/* Login Button */}
            <div className="d-flex flex-column flex-md-row w-100 justify-content-between gap-2 mt-3">
              <button className="btn btn-primary w-100" onClick={handleLoginClick}>
                Login
              </button>
              <button className="btn btn-outline-secondary w-100">
                Forgot Password
              </button>
            </div>
          </div>

          {/* Registration Section */}
          <div className="col-12 col-md-6 register-section d-flex flex-column align-items-center">
            <h2 className="mb-4">Register</h2>

            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="Enter your email"
                  value={formData.userEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="userContact" className="form-label">Contact</label>
                <input
                  type="tel"
                  className="form-control"
                  id="userContact"
                  placeholder="Enter your contact number"
                  value={formData.userContact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select
                  className="form-select"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn btn-secondary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
