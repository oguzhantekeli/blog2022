import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
import Featured from "../featured/Featured";
import Paginate from "../paginate/Paginate";
import blogData from "../../blogdata.json";

const Home = () => {
  useEffect(() => {
    setData(blogData);
  }, []);

  //scroll state
  const homeRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const scrollPage = () => {
    scrollToRef(homeRef);
  };

  //pagination state
  var perPage = 15;
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);

  const changePage = (n) => {
    setPageNumber(n);
    scrollPage();
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    scrollPage();
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
    scrollPage();
  };

  // blog items per page status
  const idxLastItem = pageNumber * perPage;
  const idxFirstItem = idxLastItem - perPage;
  const currentItems = data.slice(idxFirstItem, idxLastItem);

  //featured items state
  const featuredItems = data.slice(0, 3);
  return (
    <>
      <Featured items={featuredItems} />
      <div className="home-container" ref={homeRef}>
        <div className="blog-list">
          <Paginate
            perPage={perPage}
            itemsLength={data.length}
            changePage={changePage}
            nextPage={nextPage}
            prevPage={prevPage}
            pageNumber={pageNumber}
          />
          <Bloglist items={currentItems} />
          <Paginate
            perPage={perPage}
            itemsLength={data.length}
            changePage={changePage}
            nextPage={nextPage}
            prevPage={prevPage}
            pageNumber={pageNumber}
          />
        </div>
        <Aside />
      </div>
    </>
  );
};
export default Home;
