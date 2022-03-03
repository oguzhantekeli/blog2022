import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, reset } from "../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import "./search.css";
import Aside from "../../components/aside/Aside";
import Bloglist from "../../components/bloglist/BlogList";
import { searchBlog, searchBlogCategory } from "../../actions/BlogActions";
const Search = ({ type }) => {
  const searchPage = useRef(null);
  const searchTerm = useParams();
  const categoryName = useParams();
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

  var resultData;
  if (type === "search") {
    resultData = searchBlog(blogData, searchTerm.searchTerm);
  } else if (type === "category") {
    resultData = searchBlogCategory(blogData, categoryName.categoryName);
  } else {
    return "--type-- not provided...!";
  }

  return (
    <>
      <div className="search-results">
        <h2>Search Results</h2>
        <p>
          Found {resultData.length} results for "
          {type === "search"
            ? searchTerm.searchTerm
            : `Category: ${categoryName.categoryName}`}
          "
        </p>
      </div>
      <div className="search-page" ref={searchPage}>
        <Bloglist blogData={resultData} refItem={searchPage} />
        <Aside asideData={blogData} />
      </div>
    </>
  );
};
export default Search;
