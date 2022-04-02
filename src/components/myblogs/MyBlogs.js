import "./myblogs.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBlogs } from "../../actions/BlogActions";
import { getBlogs } from "../../features/blog/blogSlice";
import { Oval } from "react-loader-spinner";

const MyBlogs = ({ userId }) => {
  const { blogs, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [userBlogs, setUserBlogs] = useState([]);
  useEffect(() => {
    if (!blogs.length) {
      dispatch(getBlogs());
    }
  }, [userBlogs, dispatch]);
  useEffect(() => {
    if (userId && blogs.length > 0) {
      setUserBlogs(getUserBlogs(blogs, userId));
    }
  }, [userId, blogs]);
  if (isLoading) {
    return (
      <div style={{ margin: "0px auto" }}>
        <Oval color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
  return (
    <>
      <div className="author-blogs">
        <h3>My Blogs</h3>
        {userBlogs.map((item, idx) => {
          return (
            <div className="author-blog-item" key={idx}>
              <a href={`/blog/${item._id}`}>
                <h3>
                  {item.title}
                  <span
                    className={
                      item.status === "Published"
                        ? `blogstatus-published`
                        : `blogstatus-draft`
                    }
                  >
                    {item.status}
                  </span>
                </h3>
                <p className="blog-text">
                  {item.text.length > 200
                    ? `${item.text.slice(0, 200)}[...]`
                    : item.text}
                </p>
                <p className="blog-date">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </p>
              </a>
              <div className="blog-controls">
                <a href={`/editblog/${item._id}`}>Edit This Post</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyBlogs;
