import React, { useState } from "react";
import "./header.css";
import headerImage from "../../images/header-image.png";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
            <button className="btn btn-search">Search</button>
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
              <a href="./">Category 1</a>
            </li>
            <li className="nav-item">
              <a href="./">Category 2</a>
            </li>
            <li className="nav-item">
              <a href="./">Category 3</a>
            </li>
            <li className="nav-item">
              <a href="./">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
