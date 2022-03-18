import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "./changePassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    password2: "",
  });
  const { currentPassword, password, password2 } = formData;
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
      const userData = {
        id: user.id,
        token: user.token,
        currentPassword,
        password,
      };
      dispatch(changePassword(userData));
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
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
      <div className="changepassword">
        <h3>Change Password</h3>
        <div className="changepassword-section">
          <form onSubmit={onSubmit} className="changepassword-form">
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your current password"
                value={currentPassword}
                name="currentPassword"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                name="password"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter new password again"
                value={password2}
                name="password2"
                onChange={onChange}
                required="required"
              />
            </div>
            <div className="buttons">
              <button className="btn-changepassword">Change Password</button>
              <button
                id="btn-cancel"
                type="button"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="changepassword-image">
            <img src="https://place-hold.it/300" alt="changepasswordimage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
