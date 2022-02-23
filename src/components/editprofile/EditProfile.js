import "./editprofile.css";
const EditProfile = () => {
  return (
    <>
      <div className="editprofile">
        <h2>Edit Profile</h2>
        <form action="" method="post">
          <div className="editauthor">
            <h3>Profile Image</h3>
            <div className="form-group">
              <label for="avatar">Choose your profile image:</label>
              <input type="file" name="avatar" />
              <img src="https://place-hold.it/100" alt="useravatar" />
            </div>
            <h3>About Me</h3>
            <div className="form-group">
              <input
                type="text"
                name="username"
                value=""
                placeholder="Enter user name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="title"
                value=""
                placeholder="Enter your title"
              />
            </div>
            <div className="form-group">
              <textarea
                name="about"
                value=""
                placeholder="write something about yourself"
              ></textarea>
            </div>
            <div className="editlinks">
              <h3>Social Links</h3>
              <div className="form-group">
                <label for="website">Web site:</label>
                <input
                  type="text"
                  name="website"
                  value=""
                  placeholder="Enter your web site link"
                />
              </div>
              <div className="form-group">
                <label for="facebook">Facebook:</label>
                <input
                  type="text"
                  name="facebook"
                  value=""
                  placeholder="Enter your facebook link"
                />
              </div>
              <div className="form-group">
                <label for="twitter">Twitter:</label>
                <input
                  type="text"
                  name="twitter"
                  value=""
                  placeholder="Enter your twitter link"
                />
              </div>
              <div className="form-group">
                <label for="instagram">Instagram:</label>
                <input
                  type="text"
                  name="instagram"
                  value=""
                  placeholder="Enter your instagram link"
                />
              </div>
            </div>
          </div>
          <button className="btn-cancel">Go Back</button>
          <button className="btn-save" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};
export default EditProfile;
