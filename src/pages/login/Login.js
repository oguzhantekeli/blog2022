import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    useremail: "",
    userpassword: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { useremail, userpassword } = formData;
  return (
    <>
      <div className="login">
        <h3>Login Your Account</h3>
        <div className="login-section">
          <form onSubmit={onSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your email"
                value={useremail}
                onChange={onChange}
                name="useremail"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter password"
                value={userpassword}
                onChange={onChange}
                name="userpassword"
              />
            </div>
            <button className="btn-login">Login</button>
            <p>* With sending your data you accept the terms</p>
          </form>
          <div className="login-image">
            <img src="https://place-hold.it/300" alt="loginimage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
