import React, { useRef } from "react";
import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
import Featured from "../featured/Featured";

const Home = ({ blogData }) => {
  const homeRef = useRef(null);
  return (
    <>
      <Featured featuredItems={blogData} />
      <div className="home-container" ref={homeRef}>
        <Bloglist blogData={blogData} refItem={homeRef} />
        <Aside asideData={blogData} />
      </div>
    </>
  );
};
export default Home;
