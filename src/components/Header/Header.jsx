import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import "./Header.css";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as FavoritesTab } from "../../assets/icons/favorite_black.svg";
import { connect } from "react-redux";
import { logOutUser } from "../../redux/user/UserActions";

function Header(props) {
  const { numberOfProducts,numberOfFavorites, user, logout } = props;

  return (
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
        <Link to="/" className="my-3">
          <img src={logo} alt="The 90's Shop" className="logo" />
        </Link>
        <div>
          {user ? <p>Hello, {user.displayName}!</p> : null}

          <div className="d-flex justify-content-end bg-light border m-3 px-4 py-2 rounded">
            <Link to="/favorites" className="mx-2 d-flex">
              <FavoritesTab className="" />
              <p className="mx-1 mb-0">{numberOfFavorites}</p>
            </Link>
            {user ? (
              <p className="logout h5" onClick={() => logout()}>
                Logout
              </p>
            ) : (
              <Link to="/login" className="h5 mb-0 mx-2">
                Login
              </Link>
            )}
            <div className="d-flex align-items-center">
              <Link to="/cart" className=" mx-2 d-flex">
                <ShoppingCart className="mx-1" />
                <p className="mb-0">{numberOfProducts}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
    numberOfFavorites: state.favorite.products.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logOutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
