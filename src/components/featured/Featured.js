import "./featured.css";
const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="featured-item">
          <div className="category-badge">CategoryName</div>
          <h2>Featured Item 1 Title </h2>
          <div className="blog-meta">
            <p>11.12.2020 / AuthorName</p>
          </div>
        </div>
        <div className="featured-item">
          <div className="category-badge">CategoryName</div>
          <h2>Featured Item 2 Title </h2>
          <div className="blog-meta">
            <p>11.12.2020 / AuthorName</p>
          </div>
        </div>
        <div className="featured-item">
          <div className="category-badge">CategoryName</div>
          <h2>Featured Item 3 Title </h2>
          <div className="blog-meta">
            <p>11.12.2020 / AuthorName</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featured;
