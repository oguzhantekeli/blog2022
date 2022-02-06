import "./bloglist.css";
const Bloglist = () => {
  return (
    <>
      <div className="blog-list">
        <div className="blog-items">
          <div className="blog-item">blogitem</div>
          <div className="blog-item">blogitem</div>
          <div className="blog-item">blogitem</div>
          <div className="blog-item">blogitem</div>
          <div className="blog-item">blogitem</div>
          <div className="blog-item">blogitem</div>
        </div>
        <div className="blog-pagination">
          <a href="./">Previous</a>
          <a href="./">1</a>
          <a href="./">2</a>
          <a href="./">3</a>
          <a href="./">Next</a>
        </div>
      </div>
    </>
  );
};
export default Bloglist;
