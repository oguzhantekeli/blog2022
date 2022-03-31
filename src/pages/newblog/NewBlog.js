import "./newblog.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import blogService from "../../features/blog/blogService";
import { createNewBlog } from "../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const NewBlog = ({ isNew }) => {
  const { user } = useSelector((state) => state.auth);
  const { blog, isloading, isError, isSuccess, message } = useSelector(
    (state) => state.blog
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [blogStatus, setBlogStatus] = useState("Published");
  const [blogImage, setBlogImage] = useState("default.png");
  const [formData, setFormData] = useState({
    title: "",
    category: "General",
    blogtext: "",
    tags: "",
  });
  const { title, category, blogtext, tags } = formData;
  const blogImages = []; //45 items
  for (let i = 1; i <= 45; i++) {
    blogImages.push(`bi_${i}.png`);
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formBlogData = {
      title,
      category,
      blogtext,
      blogImage,
      tags,
      authorName: user.userName,
      authorId: user.id,
      token: user.token,
      status: blogStatus,
    };
    dispatch(createNewBlog(formBlogData));

    console.log(formBlogData);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Successfully Posted");
      navigate("/profile");
    }
    if (!categories.length) {
      blogService.getCategories().then((e) => setCategories(e));
    }
  }, [categories, user, navigate, isError, message, isSuccess, blog]);

  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }
  return (
    <>
      <div className="newblog">
        <h3>{isNew ? "New Blog Post" : "Edit Blog"}</h3>
        <div className="newblog-form">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="title">Blog Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter title here."
                required="required"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select
                name="category"
                onChange={onChange}
                value={category}
                required="required"
              >
                {categories.map((item, idx) => {
                  return (
                    <option key={idx} value={item.category}>
                      {item.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="image-picker">
              <p>Pick Blog Image</p>
              <div className="picker">
                <div className="imagebig">
                  <img
                    src={require(`../../images/blog/${blogImage}`)}
                    alt="bigimage"
                  />
                </div>
                <div className="blog-images">
                  {blogImages.map((item, idx) => {
                    return (
                      <img
                        key={idx}
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
            </div>
            <div className="form-group">
              <label htmlFor="blogtext">Blog Text</label>
              <textarea
                name="blogtext"
                placeholder="Write your blog.."
                minLength="100"
                required="required"
                value={blogtext}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="title">
                Blog Tags (Comma Seperated. = "life,best,music")
              </label>
              <input
                type="text"
                name="tags"
                placeholder="life,best,music"
                value={tags}
                onChange={onChange}
              />
            </div>
            <div className="newblogbuttons">
              <a href="./">Go Back</a>
              <div className="savebuttons">
                <button
                  type="submit"
                  onClick={() => setBlogStatus("Draft")}
                  className="savedraft"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="publish"
                  onClick={() => setBlogStatus("Published")}
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
