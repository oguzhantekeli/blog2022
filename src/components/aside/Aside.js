import "./aside.css";
import recentThumb from "../../images/blogthumb.png";
import adv from "../../images/header-image.png";
import socialImage from "../../images/footer-image.png";

import { getCategories, getRecentItems } from "../../actions/BlogActions";
const Aside = ({ asideData }) => {
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
            {getRecentItems(asideData).map((item) => {
              return (
                <a href={`/blog/${item.id}`} key={item.id}>
                  <div className="recent-post-item">
                    <div className="recent-thumb">
                      <img src={recentThumb} alt={item.title} />
                    </div>
                    <div className="recent-post-text">
                      <div className="recent-post-title">{item.title}</div>
                      <div className="recent-post-date">{item.registered}</div>
                    </div>
                  </div>
                </a>
              );
            })}
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
            {getCategories(asideData).map((item, idx) => {
              return (
                <div className="aside-category-item" key={idx}>
                  <a href="./">
                    {item.categoryName} <span>({item.categoryCount})</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
