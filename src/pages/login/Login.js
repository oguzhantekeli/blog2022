import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <h3>Login Your Account</h3>
        <div className="login-section">
          <form action="" method="post" className="login-form">
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
            <button className="btn-login">Login</button>
            <p>* With sending your data you accept the terms</p>
          </form>
          <div className="login-image">
            <img src="https://place-hold.it/300" alt="loginimage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
