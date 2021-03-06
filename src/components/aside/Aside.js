import React, { useState } from "react";
import "./aside.css";
import adv from "../../images/header-image.png";
import { getLiveCategories, getRecentItems } from "../../actions/BlogActions";
const Aside = ({ asideData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="aside">
        <div className="aside-search">
          <h2>Search</h2>
          <div className="search-group">
            <form action={`/search/${searchTerm}`}>
              <input
                type="text"
                placeholder="search blog..."
                name="search"
                required="required"
                autoComplete="off"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button className="btn-aside-search">
                Search <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="recent-posts-items">
            {getRecentItems(asideData).map((item) => {
              return (
                <a href={`/blog/${item._id}`} key={item._id}>
                  <div className="recent-post-item">
                    <div className="recent-thumb">
                      <img
                        src={require(`../../images/blog/${item.imageThumbUrl}`)}
                        alt={item.title}
                      />
                    </div>
                    <div className="recent-post-text">
                      <div className="recent-post-title">{item.title}</div>
                      <div className="recent-post-date">
                        {item.author}
                        {" / "}
                        {new Date(item.updatedAt).toLocaleDateString()}
                      </div>
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
        <div className="aside-categories">
          <h2>Categories</h2>
          <div className="aside-category-list">
            {getLiveCategories(asideData).map((item, idx) => {
              return (
                <div className="aside-category-item" key={idx}>
                  <a href={`/category/${item.categoryName}`}>
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
