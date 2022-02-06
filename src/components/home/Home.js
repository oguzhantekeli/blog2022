import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-blog-items">
          <Bloglist />
        </div>
        <div className="home-aside">
          <Aside />
        </div>
      </div>
    </>
  );
};
export default Home;
