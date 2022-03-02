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
            <a href={`/category/${data.category}`}>{data.category}</a>
          </div>
          <div className="blog-title">
            <a href={`/blog/${data._id}`}>{data.title}</a>
          </div>
          <div className="blog-abstract">{`${data.text.slice(
            0,
            200
          )}[...]`}</div>
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
