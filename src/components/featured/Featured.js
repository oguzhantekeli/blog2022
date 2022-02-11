import "./featured.css";
const Featured = ({ items }) => {
  return (
    <>
      <div className="featured">
        {items.map((item, idx) => {
          return (
            <div className="featured-item" key={idx}>
              <div className="category-badge">
                <a href="./">{item.category}</a>
              </div>
              <div className="featured-item-text">
                <a href="./">
                  <h2>{item.title}</h2>
                  <div className="blog-meta">
                    <p>
                      {item.registered} / {item.author}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
        {/* <div className="featured-item">
          <div className="category-badge">
            <a href="./">CategoryName</a>
          </div>
          <div className="featured-item-text">
            <a href="./">
              <h2>Featured Item 2 Title </h2>
              <div className="blog-meta">
                <p>11.12.2020 / AuthorName</p>
              </div>
            </a>
          </div>
        </div>
        <div className="featured-item">
          <div className="category-badge">
            <a href="./">CategoryName</a>
          </div>
          <div className="featured-item-text">
            <a href="./">
              <h2>Featured Item 3 Title </h2>
              <div className="blog-meta">
                <p>11.12.2020 / AuthorName</p>
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Featured;
