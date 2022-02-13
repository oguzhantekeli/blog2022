import React from "react";
import "./paginate.css";
import {
  changePage,
  prevPage,
  nextPage,
} from "../../actions/PaginationActions";

const Paginate = ({
  blogData,
  refItem,
  perPage,
  pageNumber,
  setPageNumber,
}) => {
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(blogData.length / perPage); i++) {
    pageNums.push(i);
  }
  return (
    <>
      <div className="blog-pagination">
        {pageNumber > 1 ? (
          <button onClick={() => prevPage(pageNumber, setPageNumber, refItem)}>
            Previous
          </button>
        ) : (
          ""
        )}

        {pageNums.map((item) => {
          return (
            <button
              className={item === pageNumber ? "active" : ""}
              key={item}
              onClick={() => {
                changePage(item, setPageNumber, refItem);
              }}
            >
              {item}
            </button>
          );
        })}
        {pageNumber < pageNums.length ? (
          <button onClick={() => nextPage(pageNumber, setPageNumber, refItem)}>
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Paginate;
