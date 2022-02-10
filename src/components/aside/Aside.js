import "./aside.css";
import recentThumb from "../../images/blogthumb.png";
import adv from "../../images/header-image.png";
import socialImage from "../../images/footer-image.png";
const Aside = () => {
  return (
    <>
      <div className="aside">
        <div className="aside-search">
          <h2>Search</h2>
          <div className="search-group">
            <input type="text" placeholder="search blog..." />
            <button className="btn-aside-search">
              Search <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="recent-posts-items">
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src={recentThumb} alt="recentitem" />
              </div>
              <div className="recent-post-text">
                <div className="recent-post-title">
                  blog title 001 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src={recentThumb} alt="recentitem" />
              </div>
              <div className="recent-post-text">
                <div className="recent-post-title">
                  blog title 002 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src={recentThumb} alt="recentitem" />
              </div>
              <div className="recent-post-text">
                <div className="recent-post-title">
                  blog title 003 goes here title 003 goes heretitle 003 goes
                  heretitle 003 goes heretitle 003 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
          </div>
        </div>
        <div className="advertise">
          <img src={adv} alt="advertiseimage" />
        </div>
        <div className="aside-social-feed">
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
          <img src={socialImage} alt="socialfeed" />
        </div>
        <div className="aside-categories">
          <h2>Categories</h2>
          <div className="aside-category-list">
            <div className="aside-category-item">
              <a href="./">
                Category Name 1 <span>(22)</span>
              </a>
            </div>
            <div className="aside-category-item">
              <a href="./">
                Category Name 2 <span>(14)</span>
              </a>
            </div>
            <div className="aside-category-item">
              <a href="./">
                Category Name 3 <span>(33)</span>
              </a>
            </div>
            <div className="aside-category-item">
              <a href="./">
                Category Name 4 <span>(72)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
