import "./editprofile.css";
const EditProfile = () => {
  return (
    <>
      <div className="editprofile">
        <h2>Edit Profile</h2>
        <form action="" method="post">
          <div className="editauthor">
            <h3>Profile Image</h3>
            <div className="form-group avatar-edit">
              <img src="https://place-hold.it/200" alt="useravatar" />
              <label htmlFor="avatar">Choose file</label>
              <input type="file" name="avatar" id="avatar" />
            </div>
            <h3>About Me</h3>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Enter user name"
              />
            </div>
            <div className="form-group">
              <input type="text" name="title" placeholder="Enter your title" />
            </div>
            <div className="form-group">
              <textarea
                name="about"
                placeholder="write something about yourself"
              ></textarea>
            </div>
            <div className="editlinks">
              <h3>Social Links</h3>
              <div className="form-group">
                <label htmlFor="website">Web site:</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter your web site link"
                />
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Facebook:</label>
                <input
                  type="text"
                  name="facebook"
                  placeholder="Enter your facebook link"
                />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Twitter:</label>
                <input
                  type="text"
                  name="twitter"
                  placeholder="Enter your twitter link"
                />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram:</label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Enter your instagram link"
                />
              </div>
            </div>
          </div>
          <button className="btn-cancel">Go Back</button>
          <button className="btn-save">Save Changes</button>
        </form>
      </div>
    </>
  );
};
export default EditProfile;
