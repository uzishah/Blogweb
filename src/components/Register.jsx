import "../App.css";

const Register = () => {
  return (
    <div className="login">
      <span className="loginTitle"> Register</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          className="loginnInput"
          type="text"
          placeholder="Enter Your Username......"
        />
        <label>Email</label>
        <input
          className="loginnInput"
          type="email"
          placeholder="Enter Your Email......"
        />
        <label>Password</label>
        <input
          className="loginnInput"
          type="password"
          placeholder="Enter Your Password......"
        />
        <button className="loginbtn">Register</button>
        <button className="Signbtn">Login</button>
      </form>
    </div>
  );
};

export default Register;
