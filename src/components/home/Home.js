import "./home.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Bloglist />
        <Aside />
      </div>
    </>
  );
};
export default Home;
