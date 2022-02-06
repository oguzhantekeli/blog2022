import "./header.css";
import headerImage from "../../images/header-image.png";
const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="socials">
          <div className="social-item">
            <a href="./">Facebook</a>
          </div>
          <div className="social-item">
            <a href="./">Twitter</a>
          </div>
          <div className="social-item">
            <a href="./">Instagram</a>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search" />
          <button className="btn btn-search">Search</button>
        </div>
      </div>
      <header>
        <div className="header-image">
          <img src={headerImage} alt="headerimage" />
        </div>
        <nav>
          <ul className="navs">
            <li className="nav-item">Home</li>
            <li className="nav-item">Category 1</li>
            <li className="nav-item">Category 2</li>
            <li className="nav-item">Category 3</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
