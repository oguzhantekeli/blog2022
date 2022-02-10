import React, { useState, useEffect } from "react";
import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
import Featured from "../featured/Featured";
import Paginate from "../paginate/Paginate";
import blogData from "../../blogdata.json";

const Home = () => {
  var perPage = 15;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blogData);
  }, []);
  const changePage = (n) => {
    setPageNumber(n);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };
  console.log(data);

  const idxLastItem = pageNumber * perPage;
  const idxFirstItem = idxLastItem - perPage;
  const currentItems = data.slice(idxFirstItem, idxLastItem);
  return (
    <>
      <Featured />
      <div className="home-container">
        <div className="blog-list">
          <Bloglist items={currentItems} />
          <Paginate
            perPage={perPage}
            itemsLength={data.length}
            changePage={changePage}
            nextPage={nextPage}
            prevPage={prevPage}
            pageNumber={pageNumber}
          />
          <div>
            {pageNumber} / {Math.ceil(data.length / perPage)}
          </div>
        </div>
        <Aside />
      </div>
    </>
  );
};
export default Home;
