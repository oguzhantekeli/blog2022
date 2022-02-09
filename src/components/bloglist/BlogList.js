import "./bloglist.css";
import BlogItem from "../blogitem/BlogItem";

const Bloglist = () => {
  return (
    <>
      <div className="blog-list">
        <div className="blog-items">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
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
