import "./aside.css";
const Aside = () => {
  return (
    <>
      <div className="aside">
        <div className="aside-search">
          <h2>Search</h2>
          <div className="search-group">
            <input type="text" placeholder="search blog..." />
            <button className="btn-aside-search">Search "icon"</button>
          </div>
        </div>
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="recent-posts-items">
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src="#" alt="recentitem" />
              </div>
              <div className="reecent-post-text">
                <div className="recent-post-title">
                  blog title 001 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src="#" alt="recentitem" />
              </div>
              <div className="reecent-post-text">
                <div className="recent-post-title">
                  blog title 002 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
            <div className="recent-post-item">
              <div className="recent-thumb">
                <img src="#" alt="recentitem" />
              </div>
              <div className="reecent-post-text">
                <div className="recent-post-title">
                  blog title 003 goes here
                </div>
                <div className="recent-post-date">11.12.2020</div>
              </div>
            </div>
          </div>
        </div>
        <div className="advertise">
          <h2>Check This...</h2>
          <img src="#" alt="advertiseimage" />
        </div>
        <div className="aside-social-feed">
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
          <img src="//" alt="socialfeed" />
        </div>
        <div className="aside-categories">
          <h2>Categories</h2>
          <div className="aside-category-list">
            <div className="aside-category-item">
              <p>Category Name 1</p>
              <p>(items count: 22)</p>
            </div>
            <div className="aside-category-item">
              <p>Category Name 2</p>
              <p>(items count: 14)</p>
            </div>
            <div className="aside-category-item">
              <p>Category Name 3</p>
              <p>(items count: 33)</p>
            </div>
            <div className="aside-category-item">
              <p>Category Name 4</p>
              <p>(items count: 72)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
