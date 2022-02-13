import "./blogitem.css";
const BlogItem = ({ data }) => {
  return (
    <>
      <div className="blog-list-item">
        <div className="thumb-image">
          <img src={data.imageBigUrl} alt={data.title} />
        </div>
        <div className="blog-item-text">
          <div className="category-badge">
            <a href="./">{data.category}</a>
          </div>
          <div className="blog-title">
            <a href="./">{data.title}</a>
          </div>
          <div className="blog-abstract">{data.text}</div>
          <div className="blog-item-meta">
            <p>
              {data.registered} / {data.author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogItem;
