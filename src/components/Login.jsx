import "../App.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle"> Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginnInput"
          type="email"
          placeholder="Enter Your Email......"
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Your Password......"
        />
        <button className="loginbtn">Login</button>
        <button className="Signbtn">Register</button>
      </form>
    </div>
  );
};

export default Login;
