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
            <div
              className="featured-item"
              key={idx}
              style={{
                backgroundImage: `url("${require(`../../images/blog/${item.imageBigUrl}`)}")`,
              }}
            >
              <div className="category-badge">
                <a href={`/category/${item.category}`}>{item.category}</a>
              </div>
              <div className="featured-item-text">
                <a href={`/blog/${item._id}`}>
                  <h2>{item.title}</h2>
                  <div className="blog-meta">
                    <p>
                      {new Date(item.updatedAt).toLocaleDateString()} /{" "}
                      {item.author}
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
