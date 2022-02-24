import "./profile.css";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-left">
          <div className="profile-info">
            <img src="https://place-hold.it/200" alt="profile-avatar" />
            <h4>author name</h4>
            <p className="author-title">small text about the author</p>
          </div>
          <div className="profile-social-links">
            <h3>My Social Links</h3>
            <ul className="links-list">
              <li className="link-item">
                <h4>Website</h4>
                <a target="_blank" href="./">
                  www.test.com
                </a>
              </li>
              <li className="link-item">
                <h4>Facebook</h4>
                <a target="_blank" href="./">
                  @username
                </a>
              </li>
              <li className="link-item">
                <h4>Twitter</h4>
                <a target="_blank" href="./">
                  @username
                </a>
              </li>
              <li className="link-item">
                <h4>Instagram</h4>
                <a target="_blank" href="./">
                  @username
                </a>
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
            <p>
              t fringilla ipsum, vitae lacinia turpis placerat vitae. Morbi in
              sodales lectus. Suspendisse sit amet diam dictum, lacinia massa
              in, semper velit. Cras eu convallis felis, a congue est. Nunc ac
              sollicitudin nisi, a malesuada justo. Donec sodales lobortis
              lorem, ac dictum erat tincidunt facili
            </p>
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
