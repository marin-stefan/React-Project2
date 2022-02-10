import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import { addToFavorites } from "../../redux/favorites/FavoritesActions";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const {
    name,
    price,
    currency,
    image,
    description,
    addToCartInjected,
    addToFavoriteInjected,
    id,
  } = props;

  return (
    <div className="col-12 col-md-4 product-item d-flex flex-column align-items-center py-2">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt="Product"
          className="w-100 mb-2 border border-danger rounded shadow-lg"
        />
      </Link>
      <h5 className="text-center mb-1">{name}</h5>
      <h6 className="text-center">
        {price} {currency}
      </h6>
      <div className="bg-warning p-2 shadow rounded w-100 d-flex justify-content-around">
        
          <button
            className="btn btn-outline-dark border-danger shadow"
            onClick={() => {
              addToCartInjected({
                product: {
                  id,
                  name,
                  price,
                  currency,
                  image,
                  description,
                },
              });
            }}
          >
            Add to cart
          </button>
        
          <button
            className="btn btn-outline-dark border-danger  shadow"
            onClick={() => {
              addToFavoriteInjected({
                product: {
                  id,
                  name,
                  price,
                  currency,
                  image,
                  description,
                },
              });
            }}
          >
            Add to favorites
          </button>
        
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCartInjected: (payload) => dispatch(addToCart(payload)),
    addToFavoriteInjected: (payload) => dispatch(addToFavorites(payload)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
