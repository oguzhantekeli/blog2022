import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, reset } from "../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "./home.css";
import Bloglist from "../../components/bloglist/BlogList";
import Aside from "../../components/aside/Aside";
import Featured from "../../components/featured/Featured";

const Home = () => {
  const homeRef = useRef(null);
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
