import "./editblog.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import blogService from "../../features/blog/blogService";
import { deleteBlog, getBlog, updateBlog } from "../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const EditBlog = () => {
  const { user } = useSelector((state) => state.auth);
  const { blog, isLoadingBlog, isErrorBlog, isSuccessBlog, messageBlog } =
    useSelector((state) => state.blog);
  const { blogItemId } = useParams();
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
      text: blogtext,
      imageBigUrl: blogImage,
      imageThumbUrl: blogImage,
      status: blogStatus,
      tags,
      token: user.token,
      id: blogItemId,
    };
    console.log("blogItemId:", blogItemId, "formBlogData", formBlogData);
    dispatch(updateBlog(formBlogData));
  };

  useEffect(() => {
    if (!blog.id) {
      dispatch(getBlog(blogItemId));
    }
    if (blog.id !== "") {
      blogService.getCategories().then((e) => setCategories(e));
      setBlogImage(blog.imageBigUrl);
      setBlogStatus(blog.status);
      setFormData({
        title: blog.title,
        category: blog.category,
        blogtext: blog.text,
        tags: blog.tags,
      });
    }
  }, [blog, dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isErrorBlog) {
      toast.error(messageBlog);
    }
    if (isSuccessBlog) {
      toast.success("Successfully Updated");
      navigate("/profile");
    }
  }, [user, navigate, isErrorBlog, messageBlog, isSuccessBlog]);

  if (isLoadingBlog) {
    return (
      <div style={{ margin: "0px auto" }}>
        <Oval color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
  const deleteOptions = {
    title: "Delete Post",
    message: "Are You Sure? You can not undo this.!!",
    buttons: [
      {
        label: "Delete this. I do not want to see it again...",
        onClick: () => {
          if (dispatch(deleteBlog({ id: blog.id, token: user.token }))) {
            toast.success("Successfully Deleted the post");
            navigate("/profile");
          }
        },
      },
    ],
    // customUI: ({ onClose }) => <div>Custom UI</div>,
    closeOnEscape: true,
    closeOnClickOutside: true,
  };

  return (
    <>
      <div className="newblog">
        <h3>Edit Blog</h3>
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
              <a href="/profile">Go Back</a>
              <div className="savebuttons">
                <button
                  type="button"
                  onClick={() => confirmAlert(deleteOptions)}
                  className="deletepost"
                >
                  Delete
                </button>
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

export default EditBlog;
