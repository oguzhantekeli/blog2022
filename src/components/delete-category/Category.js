import "./category.css";
import Bloglist from "../bloglist/BlogList";
import Aside from "../aside/Aside";
const Category = () => {
  return (
    <>
      <div className="category-bloglist">
        <Bloglist />
        <Aside />
      </div>
    </>
  );
};
export default Category;
