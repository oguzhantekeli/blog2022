import "./newblog.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NewBlog = ({ isNew }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const blogImages = []; //45 items
  for (let i = 1; i <= 45; i++) {
    blogImages.push(`bi_${i}.png`);
  }

  const [blogImage, setBlogImage] = useState("default.png");
  //TODO: BLOG CATEGORY EKLENECEK

  useEffect(() => {
    return !user ? navigate("/login") : null;
  }, [user, navigate]);
  return (
    <>
      <div className="newblog">
        <h3>{isNew ? "New Blog Post" : "Edit Blog"}</h3>
        <div className="newblog-form">
          <form action="" method="post">
            <div className="form-group">
              <label htmlFor="title">Blog Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter title here."
                required="required"
              />
            </div>
            <div className="select-image">
              <div className="imagebig">
                <p>Pick Blog Image</p>
                <img
                  src={require(`../../images/blog/${blogImage}`)}
                  alt="bigimage"
                />
              </div>
              <div className="blog-images">
                {blogImages.map((item, idx) => {
                  return (
                    <img
                      src={require(`../../images/blog/${item}`)}
                      alt="blogimage"
                      onClick={() => {
                        setBlogImage(item);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="blogtext">Blog Text</label>
              <textarea
                name="blogtext"
                placeholder="Write your blog.."
                minLength="100"
                required="required"
              ></textarea>
            </div>
            <div className="newblogbuttons">
              <a href="./">Go Back</a>
              <div className="savebuttons">
                <button className="savedraft">Save as Draft</button>
                <button className="publish">Publish</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
