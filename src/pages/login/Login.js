import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isloading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/profile");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };
  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }

  return (
    <>
      <div className="login">
        <h3>Login Your Account</h3>
        <div className="login-section">
          <form onSubmit={onSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={onChange}
                name="email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={onChange}
                name="password"
                required="required"
              />
            </div>
            <button className="btn-login">Login</button>
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
