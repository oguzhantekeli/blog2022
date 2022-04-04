import "./editprofile.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../features/auth/authSlice";
import { updateUserBlogs } from "../../features/blog/blogSlice";
import avatarList from "../../components/avatarlist/avatarlist";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const AvatarImage = ({ name, clickAq }) => {
  return (
    <>
      <img
        className="avatarimage"
        src={require(`../../images/svg/${name}.svg`)}
        alt="user avatar"
        onClick={() => clickAq(name)}
      />
    </>
  );
};

const EditProfile = () => {
  const { user, isloading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    about: user.about,
    avatar: user.avatar,
    facebook: user.facebook,
    instagram: user.instagram,
    title: user.title,
    twitter: user.twitter,
    userName: user.userName,
    webSite: user.webSite,
  });
  const {
    about,
    avatar,
    facebook,
    instagram,
    title,
    twitter,
    userName,
    webSite,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("userName:", userName, "user.userName:", user.userName);
    const userData = {
      id: user.id,
      about,
      avatar,
      facebook,
      instagram,
      title,
      twitter,
      userName,
      webSite,
      token: user.token,
    };
    //dispatch updates
    if (userName.length) {
      dispatch(editUser(userData));
      if (userName.length && userName !== user.userName) {
        dispatch(
          updateUserBlogs({
            token: user.token,
            oldUserName: user.userName,
            newUserName: userName,
          })
        );
      }
    }
  };

  const changeAvatar = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      avatar: e,
    }));
  };

  useEffect(() => {
    return !user ? navigate("/login") : null;
  }, [user, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Update Successfull.");
      navigate("/profile");
    }
  }, [isError, message, isSuccess, navigate]);

  if (isloading) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={500} width={500} />
      </div>
    );
  }

  return (
    <>
      <div className="editprofile">
        <h2>Edit Profile</h2>
        <form onSubmit={onSubmit}>
          <div className="editauthor">
            <div className="avatar-group">
              <div className="show-avatar">
                <h3>Profile Image</h3>
                <div className="form-group">
                  <img
                    src={require(`../../images/svg/${
                      avatar ? avatar : "default"
                    }.svg`)}
                    alt="useravatar"
                  />
                </div>
              </div>
              <div className="avatar-list">
                {avatarList.map((n) => {
                  return (
                    <AvatarImage name={n} key={n} clickAq={changeAvatar} />
                  );
                })}
              </div>
            </div>
            <h3>About Me</h3>
            <div className="form-group">
              <input
                type="text"
                name="userName"
                placeholder="Enter user name"
                value={userName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Enter your title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="about"
                placeholder="write something about yourself"
                value={about}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="editlinks">
              <h3>Social Links</h3>
              <div className="form-group">
                <label htmlFor="website">Web site:</label>
                <input
                  type="text"
                  name="webSite"
                  placeholder="Enter your web site link"
                  value={webSite}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Facebook:</label>
                <input
                  type="text"
                  name="facebook"
                  placeholder="Enter your facebook link"
                  value={facebook}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Twitter:</label>
                <input
                  type="text"
                  name="twitter"
                  placeholder="Enter your twitter link"
                  value={twitter}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram:</label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="Enter your instagram link"
                  value={instagram}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <button
            className="btn-cancel"
            type="button"
            onClick={() => navigate("/profile")}
          >
            Go Back
          </button>
          <button type="submit" className="btn-save">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};
export default EditProfile;
