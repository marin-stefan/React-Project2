import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/CartActions";
import { addToFavorites } from "../../redux/favorites/FavoritesActions";

function Cart(props) {
  const {
    cartProducts,
    cartTotal,
    cartCurrency,
    removeFromCartInjected,
    addToFavoriteInjected,
  } = props;
  return (
    <div>
      <Layout>
        <div className="container container-min-max-width bg-light py-3 my-3">
          <h2 className="mx-3">Shopping Cart</h2>
          {cartProducts.map((cartProduct, index) => {
            return (
              <div key={index}>
                <div className="d-flex justify-content-around border m-3">
                  <div className="w-25">
                    <img
                      src={cartProduct.image}
                      alt="Product"
                      className="thumbnail-image"
                    />
                  </div>
                  <div className="w-50">
                    <h5 className="text-center">{cartProduct.name}</h5>
                    <h6>{cartProduct.description}</h6>
                  </div>
                  <div className=" text-center w-25">
                    <div>
                      <h6>Quantity : {cartProduct.quantity} &nbsp;</h6>
                    </div>
                    <div>
                      <button className="btn btn-outline-primary border-warning rounded m-1">
                        -
                      </button>
                      <button className="btn btn-outline-primary border-warning rounded m-1">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-25 ">
                    <h6 className="text-center ">
                      {cartProduct.price} {cartProduct.currency}
                    </h6>
                  </div>

                  <button
                    className="btn border-danger btn-outline-dark my-1 mx-3"
                    onClick={() => {
                      addToFavoriteInjected({
                        product: {
                          id: cartProduct.id,
                          image: cartProduct.image,
                          name: cartProduct.name,
                          price: cartProduct.price,
                          currency: cartProduct.currency,
                          description: cartProduct.description,
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
                    className="btn btn-outline-danger border-warning my-1 mx-3"
                    onClick={() => {
                      removeFromCartInjected({
                        product: {
                          index,
                          price: cartProduct.price,
                        },
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="text-center">
            <h4 className=" my-2">
              Total : {cartTotal} {cartCurrency}
            </h4>
            <button
              className="btn  my-1 text-center btn-outline-primary border-danger"
              data-bs-toggle="modal"
              data-bs-target="#cart-modal"
            >
              Proceed to Checkout
            </button>
          </div>

          <div
            className="modal fade"
            id="cart-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="CartModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Billing details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="container">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="modal-name">Name: </label>
                        <br />
                        <input
                          type="text"
                          name="modal-name"
                          id="modal-name"
                        />
                        <br />
                      </div>
                      <div className="col">
                        <label htmlFor="modal-lastname">Lastname: </label>
                        <br />
                        <input
                          type="text"
                          name="modal-lastname"
                          id="modal-lastname"
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="modal-email">Email: </label>
                        <br />
                        <input
                          type="email"
                          name="modal-email"
                          id="modal-email"
                        />
                        <br />
                      </div>
                      <div className="col">
                        <label htmlFor="modal-phone">Phone no: </label>
                        <br />
                        <input type="tel" name="modal-phone" id="modal-phone" />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="modal-adress">Street:</label>
                        <br />
                        <input
                          type="text"
                          name="modal-street"
                          id="modal-street"
                        />
                        <br />
                      </div>
                      <div className="col">
                        <label htmlFor="modal-city">City:</label>
                        <br />
                        <input type="text" name="modal-city" id="modal-city" />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="modal-zip">Zip/Postal-Code:</label>
                        <br />
                        <input type="text" name="modal-szip" id="modal-szip" />
                        <br />
                      </div>
                      <div className="col">
                        <label htmlFor="modal-country">Country:</label>
                        <br />
                        <input
                          type="text"
                          name="modal-country"
                          id="modal-country"
                        />
                        <br />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <div>
                    <h4>Total : {cartTotal} {cartCurrency}</h4>
                  </div>
                  <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    >
                    Proceed
                  </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartProducts: state.cart.products,
    cartTotal: state.cart.total,
    cartCurrency: state.cart.currency,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)),
    addToFavoriteInjected: (payload) => dispatch(addToFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
