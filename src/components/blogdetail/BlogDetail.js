import React from "react";
import { useParams } from "react-router-dom";
import "./blogdetail.css";
import Aside from "../aside/Aside";
import Comments from "../comments/Comments";
import { getBlogItemData } from "../../actions/BlogActions";

const BlogDetail = ({ blogData }) => {
  let blogItemId = useParams();
  const item = getBlogItemData(blogData, blogItemId.blogItemId);
  const itemTags = item.tags.split(",");
  const itemComments = item.comments;
  return (
    <>
      <div className="blog-detail-page">
        <div className="blog-detail">
          <div className="blog-deatail-header">
            <div className="category-badge">{item.category}</div>
            <div className="blog-title">
              <h2>{item.title}</h2>
            </div>
            <div className="blog-item-meta">
              <p>
                {item.registered} / {item.author}
              </p>
            </div>
            <div className="blog-detail-social-share">
              <div className="social-share">
                <i className="fab fa-facebook-square"></i>
              </div>
              <div className="social-share">
                <i className="fab fa-twitter-square"></i>
              </div>
              <div className="social-share">
                <i className="fab fa-instagram-square"></i>
              </div>
            </div>
          </div>
          <div className="blog-detail-content">
            <div className="blog-detail-image">
              <img src={item.imageBigUrl} alt={item.title} />
            </div>
            <div className="blog-detail-text">
              <p>{item.text}</p>
            </div>
          </div>
          <div className="blog-detail-tags">
            <div className="detail-tag-title">
              <p>Tags</p>
            </div>
            <div className="detail-tags">
              {itemTags.map((tag, idx) => {
                return (
                  <a href={`/search/${tag}`} key={idx}>
                    <div className="tag-item">{tag}</div>
                  </a>
                );
              })}
            </div>
          </div>
          <Comments commentsData={itemComments} />
        </div>
        <Aside asideData={blogData} />
      </div>
    </>
  );
};
export default BlogDetail;
