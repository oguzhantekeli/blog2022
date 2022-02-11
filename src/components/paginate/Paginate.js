import React from "react";
import "./paginate.css";
const Paginate = ({
  changePage,
  itemsLength,
  perPage,
  nextPage,
  prevPage,
  pageNumber,
}) => {
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(itemsLength / perPage); i++) {
    pageNums.push(i);
  }
  return (
    <>
      <div className="blog-pagination">
        {pageNumber > 1 ? (
          <button onClick={() => prevPage()}>Previous</button>
        ) : (
          ""
        )}

        {pageNums.map((item) => {
          return (
            <button
              className={item === pageNumber ? "active" : ""}
              key={item}
              onClick={() => {
                changePage(item);
              }}
            >
              {item}
            </button>
          );
        })}
        {pageNumber < pageNums.length ? (
          <button onClick={() => nextPage()}>Next</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Paginate;
