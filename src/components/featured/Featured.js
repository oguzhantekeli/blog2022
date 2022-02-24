import "./featured.css";
const Featured = ({ featuredItems }) => {
  //featured items state
  const items = featuredItems.slice(0, 3);
  return (
    <>
      <h3 className="featured-title">Featured Blogs</h3>
      <div className="featured">
        {items.map((item, idx) => {
          return (
            <div className="featured-item" key={idx}>
              <div className="category-badge">
                <a href={`/category/${item.category}`}>{item.category}</a>
              </div>
              <div className="featured-item-text">
                <a href={`/blog/${item.id}`}>
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
      </div>
      <hr />
    </>
  );
};
export default Featured;
