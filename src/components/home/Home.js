import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
import Featured from "../featured/Featured";
const Home = () => {
  return (
    <>
      <Featured />
      <div className="home-container">
        <Bloglist />
        <Aside />
      </div>
    </>
  );
};
export default Home;
