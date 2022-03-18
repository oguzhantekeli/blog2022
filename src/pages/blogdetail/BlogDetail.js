import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, getBlogs } from "../../features/blog/blogSlice";
import { getComments } from "../../features/comment/commentSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import "./blogdetail.css";
import Aside from "../../components/aside/Aside";
import Comments from "../../components/comments/Comments";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const blogItemId = useParams();
  const { blog, blogs, isError, message, isloading } = useSelector(
    (state) => state.blog
  );
  const { comments } = useSelector((state) => state.comment);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getBlogs());
    dispatch(getBlog(blogItemId.blogItemId));
    dispatch(getComments(blogItemId.blogItemId)); //todo:rejected fix///
  }, [dispatch, isError, message, blogItemId]);

  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }
  const blogData = blogs;
  const itemTags = blog.tags.split(",");
  return (
    <>
      <div className="blog-detail-page">
        <div className="blog-detail">
          <div className="blog-deatail-header">
            <div className="category-badge">{blog.category}</div>
            <div className="blog-title">
              <h2>{blog.title}</h2>
            </div>
            <div className="blog-item-meta">
              <p>
                {blog.registered} / {blog.author}
              </p>
            </div>
            <div className="blog-detail-social-share">
              <div className="social-share">
                <i className="fab fa-facebook-square"></i>
              </div>
              <div className="social-share">
                <i className="fab fa-twitter-square"></i>
              </div>
              <div className="social-share">
                <i className="fab fa-instagram-square"></i>
              </div>
            </div>
          </div>
          <div className="blog-detail-content">
            <div className="blog-detail-image">
              <img src={blog.imageBigUrl} alt={blog.title} />
            </div>
            <div className="blog-detail-text">
              <p>{blog.text}</p>
            </div>
          </div>
          <div className="blog-detail-tags">
            <div className="detail-tag-title">
              <p>Tags</p>
            </div>
            <div className="detail-tags">
              {itemTags.map((tag, idx) => {
                return (
                  <a href={`/search/${tag}`} key={idx}>
                    <div className="tag-item">{tag}</div>
                  </a>
                );
              })}
            </div>
          </div>
          <Comments commentsData={comments} />
        </div>
        <Aside asideData={blogData} />
      </div>
    </>
  );
};
export default BlogDetail;
