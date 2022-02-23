import "./register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <h3>Sign Up</h3>
        <div className="register-section">
          <form action="" method="post" className="register-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter user name"
                value=""
                name="username"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your email"
                value=""
                name="usermail"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter password"
                value=""
                name="userpassword"
              />
            </div>
            <button className="btn-register">Register</button>
            <p>* With sending your data you accept the terms</p>
          </form>
          <div className="register-image">
            <img src="https://place-hold.it/300" alt="registerimage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
