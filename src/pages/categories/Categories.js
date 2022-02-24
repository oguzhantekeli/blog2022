import "./categories.css";
import { getCategories } from "../../actions/BlogActions";
import Featured from "../../components/featured/Featured";
const Categories = ({ blogData }) => {
  return (
    <>
      <h3 className="category-title">All Categories</h3>
      <div className="categories">
        {getCategories(blogData).map((item, idx) => {
          return (
            <div key={idx} className="category-item">
              <a href={`/category/${item.categoryName}`}>
                {item.categoryName} <span>({item.categoryCount})</span>
              </a>
            </div>
          );
        })}
      </div>
      <Featured featuredItems={blogData} />
    </>
  );
};
export default Categories;
