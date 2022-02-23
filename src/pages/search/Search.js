import { useRef } from "react";
import { useParams } from "react-router-dom";
import "./search.css";
import Aside from "../../components/aside/Aside";
import Bloglist from "../../components/bloglist/BlogList";
import { searchBlog, searchBlogCategory } from "../../actions/BlogActions";
const Search = ({ blogData, type }) => {
  const searchPage = useRef(null);
  const searchTerm = useParams();
  const categoryName = useParams();
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
