import "./newblog.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NewBlog = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    return !user ? navigate("/login") : null;
  }, [user, navigate]);
  return (
    <>
      <div className="newblog">
        <h3>Post New / Edit Blog</h3>
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
            <div className="form-group fileselect">
              <label htmlFor="image">Pick Blog image</label>
              <input type="file" name="image" id="image" />
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
