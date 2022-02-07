import "./blogdetail.css";
import Aside from "../aside/Aside";
import blogImage from "../../images/header-image.png";
const BlogDetail = () => {
  return (
    <>
      <div className="blog-detail">
        <div className="blog-deatail-header">
          <div className="category-badge">Category Name</div>
          <div className="blog-title">
            <h2>Category Title</h2>
          </div>
          <div className="blog-item-meta">
            <p>11.12.2020 / author name / read</p>
          </div>
          <div className="blog-detail-social-share">
            <div className="social-share">Facebook</div>
            <div className="social-share">Twitter</div>
            <div className="social-share">Instagram</div>
          </div>
        </div>
        <div className="blog-detail-content">
          <div className="blog-detail-image">
            <img src={blogImage} alt="blogimage" />
          </div>
          <div className="blog-detail-text">
            <p>
              tor faucibus a. Vivamus vulputate feugiat risus vel dapibus. Ut
              nec nisi nec lorem consequat ullamcorper. Aenean hendrerit nisl
              sed lacus iaculis sodales. Morbi finibus elementum consequat.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Praesent fringilla at ante ultricies
              auctor. Mauris eu dolor rhoncus, venenatis dolor non, interdum ex.
              Quisque non enim nec metus sagittis fringilla ut laoreet purus.
              Suspendisse at ipsum tincidunt, placerat ipsum tempor, pharetra
              ipsum. Mauris at nisi commodo urna blandit pellentesque. Nullam
              vitae quam eget libero congue commodo quis eu eros. Nulla
              facilisi. Nulla sit amet sem sed felis tincidunt pretium. Nulla
              facilisi. Nulla at lobortis nisi. Quisque sollicitudin feugiat
              fermentum. Quisque eget enim sodales, mollis mi in, ornare ex.
              Mauris ligula libero, bibendum ac gravida et, accumsan in velit.
              Vivamus velit mi, gravida porttitor lorem ut, eleifend imperdiet
              est. Nulla sed ipsum vel quam feugiat mollis at nec lacus. Mauris
              libero massa, tincidunt eget condimentum finibus, malesuada at
              risus. Vestibulum quis viverra enim. Donec ut diam sit amet arcu
              blandit viverra scelerisque a lacus. Etiam tempor consectetur
              magna, sed aliquet justo mattis eget. Fusce accumsan mauris vitae
              maximus interdum. Proin cursus ultricies hendrerit. Curabitur
              vulputate elit a est imperdiet fringilla.
            </p>
          </div>
        </div>
      </div>
      <Aside />
    </>
  );
};
export default BlogDetail;
