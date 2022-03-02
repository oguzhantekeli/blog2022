import "./profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const userAvatar = require(`../../images/svg/${user.avatar}.svg`);
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    return !user ? navigate("/login") : null;
  }, [user, navigate]);

  useEffect(() => {}, [myBlogs, setMyBlogs]);

  return (
    <>
      <div className="profile">
        <div className="profile-left">
          <div className="profile-info">
            <img src={userAvatar} alt="profile-avatar" />
            <h4>{user.userName}</h4>
            <p className="author-title">{user.title}</p>
          </div>
          <div className="profile-social-links">
            <h3>My Social Links</h3>
            <ul className="links-list">
              <li className="link-item">
                <h4>Website</h4>
                {user.webSite !== "" ? (
                  <>
                    <a target="_blank" rel="noreferrer" href={user.webSite}>
                      {user.webSite}
                    </a>
                  </>
                ) : (
                  <>Not yet...</>
                )}
              </li>
              <li className="link-item">
                <h4>Facebook</h4>
                {user.facebook !== "" ? (
                  <>
                    <a target="_blank" rel="noreferrer" href={user.facebook}>
                      {user.facebook}
                    </a>
                  </>
                ) : (
                  <>Not yet...</>
                )}
              </li>
              <li className="link-item">
                <h4>Twitter</h4>
                {user.twitter !== "" ? (
                  <>
                    <a target="_blank" rel="noreferrer" href={user.twitter}>
                      {user.twitter}
                    </a>
                  </>
                ) : (
                  <>Not yet...</>
                )}
              </li>
              <li className="link-item">
                <h4>Instagram</h4>
                {user.instagram !== "" ? (
                  <>
                    <a target="_blank" rel="noreferrer" href={user.instagram}>
                      {user.instagram}
                    </a>
                  </>
                ) : (
                  <>Not yet...</>
                )}
              </li>
            </ul>
          </div>
          <div className="edit-profile">
            <a href="./editprofile">Edit Profile</a>
          </div>
          <div className="change-password">
            <a href="./changepassword">Change Password</a>
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-aboutme">
            <h3>About Me</h3>
            <p>{user.about}</p>
          </div>
          <div className="author-blogs">
            <h3>My Blogs</h3>
            <div className="author-blog-item">
              <a href="./">
                <h3>
                  blog title
                  <span className="blogstatus">Published</span>
                </h3>
                <p className="blog-text">
                  nsectetur vestibulum id eu arcu. Suspendisse non placerat
                  urna. Fusce pharetra venenatis turpis, vel gravida arcu
                  feugiat vitae. Suspendis[...]
                </p>
                <p className="blog-date">2020.11.12</p>
              </a>
            </div>
            <div className="author-blog-item">
              <a href="./">
                <h3>
                  blog title
                  <span className="blogstatus">Published</span>
                </h3>
                <p className="blog-text">
                  nsectetur vestibulum id eu arcu. Suspendisse non placerat
                  urna. Fusce pharetra venenatis turpis, vel gravida arcu
                  feugiat vitae. Suspendis[...]
                </p>
                <p className="blog-date">2020.11.12</p>
              </a>
            </div>
            <div className="author-blog-item">
              <a href="./">
                <h3>
                  blog title
                  <span className="blogstatus">Published</span>
                </h3>
                <p className="blog-text">
                  nsectetur vestibulum id eu arcu. Suspendisse non placerat
                  urna. Fusce pharetra venenatis turpis, vel gravida arcu
                  feugiat vitae. Suspendis[...]
                </p>
                <p className="blog-date">2020.11.12</p>
              </a>
            </div>
            <div className="author-blog-item">
              <a href="./">
                <h3>
                  blog title
                  <span className="blogstatus">Published</span>
                </h3>
                <p className="blog-text">
                  nsectetur vestibulum id eu arcu. Suspendisse non placerat
                  urna. Fusce pharetra venenatis turpis, vel gravida arcu
                  feugiat vitae. Suspendis[...]
                </p>
                <p className="blog-date">2020.11.12</p>
              </a>
            </div>
            <div className="author-blog-item">
              <a href="./">
                <h3>
                  blog title
                  <span className="blogstatus">Published</span>
                </h3>
                <p className="blog-text">
                  nsectetur vestibulum id eu arcu. Suspendisse non placerat
                  urna. Fusce pharetra venenatis turpis, vel gravida arcu
                  feugiat vitae. Suspendis[...]
                </p>
                <p className="blog-date">2020.11.12</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
