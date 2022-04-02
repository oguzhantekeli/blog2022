import "./blogitem.css";
const BlogItem = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="blog-list-item">
        <div className="thumb-image">
          <img
            src={require(`../../images/blog/${data.imageBigUrl}`)}
            alt={data.title}
          />
        </div>
        <div className="blog-item-text">
          <div className="category-badge">
            <a href={`/category/${data.category}`}>{data.category}</a>
          </div>
          <div className="blog-title">
            <a href={`/blog/${data._id}`}>{data.title}</a>
          </div>
          <div className="blog-abstract">
            {data.text.length > 200
              ? `${data.text.slice(0, 200)}[...]`
              : data.text}
          </div>
          <div className="blog-item-meta">
            <p>
              {new Date(data.updatedAt).toLocaleDateString()} / {data.author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogItem;
