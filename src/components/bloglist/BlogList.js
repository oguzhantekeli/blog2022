import React from "react";
import "./bloglist.css";
import BlogItem from "../blogitem/BlogItem";

const Bloglist = ({ items }) => {
  return (
    <>
      <div className="blog-items">
        {items.map((d, k) => {
          return <BlogItem data={d} key={k} />;
        })}
      </div>
    </>
  );
};
export default Bloglist;
