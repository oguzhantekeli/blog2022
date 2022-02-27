import React, { useState } from "react";
import "./header.css";
import headerImage from "../../images/header-image.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const Onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div className="header-top">
        <div className="socials">
          <div className="social-item">
            <a href="./">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="social-item">
            <a href="./">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <div className="social-item">
            <a href="./">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="search-bar">
          <div className="top-nav">
            {user ? (
              <>
                <a href="/profile">{user.userName}</a>
                <button className="btn-logout" onClick={Onlogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login">Login</a>
                <a href="/register">Sign Up</a>
              </>
            )}
          </div>
          <form action={`/search/${searchTerm}`}>
            <input
              type="text"
              placeholder="search"
              required="required"
              name="headerSearch"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button className="btn-search">Search</button>
          </form>
        </div>
      </div>
      <header>
        <div className="header-image">
          <img src={headerImage} alt="headerimage" />
        </div>
        <nav>
          <ul className="navs">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/categories">Categories</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/newblog">Post New Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
