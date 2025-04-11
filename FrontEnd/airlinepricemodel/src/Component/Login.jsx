import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Login.css"; // Ensure to create and style this CSS file

export const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 auth-container">
      {/* Outer container */}
      <div className="auth-box d-flex flex-row w-75">
        {/* Login Section */}
     
        <div className="login-section w-50 p-4 d-flex flex-column align-items-center">
  <h2 className="mb-4">Login</h2>

  {/* Email Input with Verify Button */}
  <div className="mb-3 w-100 ">
    <label htmlFor="email" className="form-label">Email</label>
    <div className="d-flex align-items-center gap-2 login-verify">
      <input
        type="email"
        className="form-control flex-grow-1 input-height"
        id="email"
        placeholder="Enter your email"
      />
      <button className="btn btn-outline-primary button-height">
        Verify
      </button>
    </div>
  </div>

  {/* Login and Forgot Password Buttons */}
  <div className="d-flex flex-row w-100 justify-content-between gap-3">
    <button className="btn btn-primary w-50">Login</button>
    <button className="btn btn-outline-secondary w-50">Forgot Password</button>
  </div>
</div>

 

        {/* Registration Section */}
        <div className="register-section w-50 p-4 d-flex flex-column align-items-center">
          <h2 className="mb-4">Register</h2>
          
          <div className="mb-3 w-100">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="emailRegister" className="form-label">Email</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="emailRegister"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="contactRegister" className="form-label">Contact</label>
            <input
              type="tel"
              className="form-control"
              id="contactRegister"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-select" id="gender" defaultValue="">
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button className="btn btn-secondary w-100">Register</button>
        </div>
      </div>
    </div>
  );
};
