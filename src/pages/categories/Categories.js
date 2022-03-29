import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, reset } from "../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

import "./categories.css";
import { getLiveCategories } from "../../actions/BlogActions";
import Featured from "../../components/featured/Featured";
const Categories = () => {
  const dispatch = useDispatch();
  const { blogs, isError, message, isloading } = useSelector(
    (state) => state.blog
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
    dispatch(getBlogs());
  }, [dispatch, isError, message]);
  const blogData = blogs;

  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }
  return (
    <>
      <h3 className="category-title">All Categories</h3>
      <div className="categories">
        {getLiveCategories(blogData).map((item, idx) => {
          return (
            <div key={idx} className="category-item">
              <a href={`/category/${item.categoryName}`}>
                {item.categoryName} <span>({item.categoryCount})</span>
              </a>
            </div>
          );
        })}
      </div>
      <Featured featuredItems={blogData} />
    </>
  );
};
export default Categories;
