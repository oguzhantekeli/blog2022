import React, { useState, useEffect } from "react";
import "./bloglist.css";
import BlogItem from "../blogitem/BlogItem";
import Paginate from "../paginate/Paginate";
import { paginateAction } from "../../actions/PaginationActions";

const Bloglist = ({ blogData, refItem }) => {
  const perPage = 15;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(blogData);
  }, [data, blogData, setData]);
  return (
    <>
      <div className="blog-list">
        <Paginate
          refItem={refItem}
          blogData={blogData}
          pageNumber={pageNumber}
          perPage={perPage}
          setPageNumber={setPageNumber}
        />
        <div className="blog-items">
          {paginateAction(data, perPage, pageNumber).map((d, k) => {
            return <BlogItem data={d} key={k} />;
          })}
        </div>
        <Paginate
          refItem={refItem}
          blogData={blogData}
          pageNumber={pageNumber}
          perPage={perPage}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
};
export default Bloglist;
