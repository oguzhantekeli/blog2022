import { useRef } from "react";
import { useParams } from "react-router-dom";
import "./search.css";
import Aside from "../aside/Aside";
import Bloglist from "../bloglist/BlogList";
import { searchBlog } from "../../actions/BlogActions";
const Search = ({ blogData }) => {
  const searchPage = useRef(null);
  const searchTerm = useParams();
  const resultData = searchBlog(blogData, searchTerm.searchTerm);
  return (
    <>
      <div className="search-results">
        <h2>Search Results</h2>
        <p>
          Found {resultData.length} results for "{searchTerm.searchTerm}"
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
