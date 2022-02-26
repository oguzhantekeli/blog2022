import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "./register.css";

// todo:
//logout actions

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { userName, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isloading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords not matched. ");
    } else {
      const userData = { userName, email, password };
      dispatch(register(userData));
    }
  };
  useEffect(() => {
    if (isError) {
      console.log("useeffect message:", message);
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/profile");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }

  return (
    <>
      <div className="register">
        <h3>Sign Up</h3>
        <div className="register-section">
          <form onSubmit={onSubmit} className="register-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter user name"
                value={userName}
                name="userName"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter password again"
                value={password2}
                name="password2"
                onChange={onChange}
                required="required"
              />
            </div>
            <button className="btn-register">Register</button>
            <p>* With sending your data you accept the terms</p>
          </form>
          <div className="register-image">
            <img src="https://place-hold.it/300" alt="registerimage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
