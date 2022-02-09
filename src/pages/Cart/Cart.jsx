import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/CartActions";
import { addToFavorites } from "../../redux/favorites/FavoritesActions";

function Cart(props) {
  const {
    cartProducts,
    cartTotal,
    removeFromCartInjected,
    addToFavoriteInjected,
  } = props;
  return (
    <div>
      <Layout>
        <div className="container container-min-max-width bg-light py-5 my-5">
          <h2>Shopping cart</h2>
          {cartProducts.map((cartProduct, index) => {
            return (
              
              <div key={index}>
                <div className="d-flex border m-3">
                  <img
                    src={cartProduct.image}
                    alt="Product"
                    className="thumbnail-image"
                  />
                  <p className="w-50">{cartProduct.name}</p>
                  {/* <p className="w-25">index{index}</p> */}

                  <p className="w-50">
                    {cartProduct.price} {cartProduct.currency}
                  </p>
                  <p className="w-25">Quantity : {cartProduct.quantity}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      addToFavoriteInjected({
                        product: {
                          id: cartProduct.id,
                          image: cartProduct.image,
                          name: cartProduct.name,
                          price: cartProduct.price,
                          currency: cartProduct.currency,
                        },
                      });

                      removeFromCartInjected({
                        product: {
                          index,
                          price: cartProduct.price,
                        },
                      });
                    }}
                  >
                    Move to favorites
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      removeFromCartInjected({
                        product: {
                          index,
                          price: cartProduct.price,
                        },
                      });
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
          <div>Total : {cartTotal}</div>
        </div>
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartProducts: state.cart.products,
    cartTotal: state.cart.total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)),
    addToFavoriteInjected: (payload) => dispatch(addToFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
