import "./blogitem.css";
const BlogItem = () => {
  return (
    <>
      <div className="blog-list-item">
        <div className="thumb-image">
          <img src="" alt="blogitem" />
        </div>
        <div className="blog-text">
          <div className="category-badge">Category name</div>
          <div className="blog-title">Blog title goes here</div>
          <div className="blog-abstract">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
            sagittis ligula. Sed elit ex, fermentum sit amet elit sit amet,
            viverra eleifend eros. Ut vestibulum, enim sed consectetur sodales,
            lacus diam blandit metus, non placerat metus nulla in mauris.
            Aliquam erat volutpat. Donec nec consectetur turpis. Sed volutpat
            pulvinar consequat. Proin purus eros, porta ac rutrum non, vehicula
            quis massa. In et nunc enim. Sed sed metus ut tur
          </div>
          <div className="blog-item-meta">
            <p>Read count: 123 / 11.12.2020 / Author Name</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogItem;
