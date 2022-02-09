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
      <div className="d-flex  justify-content-center align-items-center m-5 p-5">
        <div className=" p-5 shadow-lg border rounded-3 ">
          <h1 className="text-center p-5">Login</h1>
          <label htmlFor="user">Username</label>
          <input type="text" />
          <br />
          <label htmlFor="pass">Password</label>
          <input type="password" />
          <div className="d-flex justify-content-around">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
          </div>
          <br />
          <button
            className="mx-5 my-2 btn btn-light border"
            onClick={() => loginUserG()}
          >
            Google SignIn
          </button>
          <br />
          <button
            className="mx-5 my-2 btn btn-primary"
            onClick={() => loginUserF()}
          >
            Facebook SignIn
          </button>
          <br />






          {/* <button
            className="mx-5 my-2 btn btn-light"
            onClick={() => handleButtonClick("fcb")}
          >
            Facebook SignIn
          </button>
          <br />
          <button
            className="mx-5 my-2 btn btn-light"
            onClick={() => handleButtonClick("git")}
          >
            GitHub SignIn
          </button> */}

          {/* <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <a class="dropdown-item" href="#!">
                Action
              </a>
              <a class="dropdown-item" href="#!">
                Another action
              </a>
            </div>
          </div> */}
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
      dispatch(loginUserF())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
