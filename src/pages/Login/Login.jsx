import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserG, loginUserF } from "../../redux/user/UserActions";

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      this.props.history.push("/");
    }
  }

  render() {
    const { loginUserG, loginUserF } = this.props;
    return (
      <div className="d-flex justify-content-center align-items-center m-5 p-5">
        <div className=" p-5 shadow-lg border rounded-3 ">
          <h1 className="text-center p-5">Login</h1>
          <label htmlFor="user">Username:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="pass">Password:</label>
          <br />
          <input type="password" />
          <div className=" d-flex">
            <Link to="/" className="text-decoration-none fs-5">
              Home
            </Link>
            <Link to="/register" className="text-decoration-none fs-5 mx-5">
              Register
            </Link>
          </div>
          <br /> 
          <div>
            <button
              className="my-2 btn btn-light border shadow"
              onClick={() => loginUserG()}
            >
              Google SignIn
            </button>
            <br />
            <button
              className="my-2 btn btn-primary shadow"
              onClick={() => loginUserF()}
            >
              Facebook SignIn
            </button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUserG: () => {
      dispatch(loginUserG());
    },
    loginUserF: () => {
      dispatch(loginUserF());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
